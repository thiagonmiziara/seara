import { getDailyMissionsMissionsCard } from '@/services/get-daily-missions-missions-card';
import { getDevotionals } from '@/services/get-devotionals';
import { getProducts } from '@/services/get-products';
import { getServiceProviders } from '@/services/get-service-providers';
import { getAllNews } from '@/services/get-all-news';
import { mainBannerData } from '@/data/main-banner';
import { NextResponse } from 'next/server';

// Utility function to handle API errors
function handleApiError(error: unknown, message: string, status: number = 500) {
  console.error(message, error);
  return NextResponse.json({ error: message }, { status });
}

// Map request types to their corresponding functions and error messages
const requestHandlers: Record<
  string,
  { handler: () => Promise<any> | any; errorMessage: string; noCache?: boolean }
> = {
  mainBanner: {
    handler: () => mainBannerData,
    errorMessage: 'Error fetching main banner',
  },
  products: {
    handler: getProducts,
    errorMessage: 'Error fetching products',
  },
  serviceProviders: {
    handler: getServiceProviders,
    errorMessage: 'Error fetching service providers',
  },
  serviceDevotionals: {
    handler: getDevotionals,
    errorMessage: 'Error fetching service devotionals',
    noCache: true, // Disable cache for devotionals
  },
  serviceDailyMissionsCard: {
    handler: getDailyMissionsMissionsCard,
    errorMessage: 'Error fetching service missions',
  },
  newsList: {
    handler: getAllNews,
    errorMessage: 'Error fetching news list',
  },
  newsItem: {
    handler: async () => null,
    errorMessage: 'Error fetching news item',
  },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  if (!type || !requestHandlers[type]) {
    return handleApiError(null, 'Invalid request type', 400);
  }

  const { handler, errorMessage, noCache } = requestHandlers[type];

  try {
    let data: any;

    if (type === 'newsItem') {
      const slug = searchParams.get('slug');
      if (!slug) return handleApiError(null, 'Missing slug', 400);
      // call the getNewsItemBySlug service dynamically to pass slug
      const { getNewsItemBySlug } =
        await import('@/services/get-news-item-by-slug');
      data = await getNewsItemBySlug(slug);
    } else {
      data = await handler();
    }

    // Add no-cache headers for devotionals
    if (noCache) {
      return NextResponse.json(data, {
        headers: {
          'Cache-Control':
            'no-store, no-cache, must-revalidate, proxy-revalidate',
          Pragma: 'no-cache',
          Expires: '0',
        },
      });
    }

    return NextResponse.json(data);
  } catch (error) {
    return handleApiError(error, errorMessage);
  }
}

// Disable caching for this route
export const dynamic = 'force-dynamic';
export const revalidate = 0;
