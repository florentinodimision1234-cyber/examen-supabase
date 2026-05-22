import lista from "@/data/cursos";

export async function GET() {
  return Response.json({ data: lista, total: lista.length })
}

export async function POST(request) {
  const body = await request.json()
  return Response.json({
    message: "En Supabase seria insert().select()",
    received: body
  }, { status: 201 })
}
