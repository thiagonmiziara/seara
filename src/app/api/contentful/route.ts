import {
  getMainBanner,
  getProducts,
  getServiceProviders,
} from "@/lib/contentfulHttp";
import { getDevotionals } from "@/services/contentfulHttp";
import { NextResponse } from "next/server";

// Utility function to handle API errors
function handleApiError(error: unknown, message: string, status: number = 500) {
  console.error(message, error);
  return NextResponse.json({ error: message }, { status });
}

// Map request types to their corresponding functions and error messages
const requestHandlers: Record<
  string,
  { handler: () => Promise<any>; errorMessage: string }
> = {
  mainBanner: {
    handler: getMainBanner,
    errorMessage: "Error fetching main banner",
  },
  products: {
    handler: getProducts,
    errorMessage: "Error fetching products",
  },
  serviceProviders: {
    handler: getServiceProviders,
    errorMessage: "Error fetching service providers",
  },
  serviceDevotionals: {
    handler: getDevotionals,
    errorMessage: "Error fetching service devotionals",
  },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  if (!type || !requestHandlers[type]) {
    return handleApiError(null, "Invalid request type", 400);
  }

  const { handler, errorMessage } = requestHandlers[type];

  try {
    const data = await handler();
    return NextResponse.json(data);
  } catch (error) {
    return handleApiError(error, errorMessage);
  }
}
