import { getMainBanner } from "@/lib/contentfulHttp";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  if (type === "mainBanner") {
    try {
      const banner = await getMainBanner();
      return NextResponse.json(banner);
    } catch (error) {
      console.error("Erro ao buscar main banner:", error);
      return NextResponse.json(
        { error: "Erro ao buscar main banner" },
        { status: 500 }
      );
    }
  }

  return NextResponse.json(
    { error: "Tipo de requisição inválido" },
    { status: 400 }
  );
}
