# Academia de cursos

Proyecto nuevo posible de examen. No es copia de los repos del profesor, pero usa su estilo:

- `app/layout.jsx` con navegacion y `metadata`.
- `app/page.jsx` como pantalla principal.
- `app/[id]/page.jsx` con `params` y `generateMetadata`.
- `app/buscar/page.jsx` con `searchParams`.
- `app/api/cursos/route.js` con `GET` y `POST`.
- Componentes cliente con `"use client"`, `useState`, `useEffect`, `useMemo` y eventos.
- `store/` con Zustand + `persist`.
- `lib/supabase.js` incluido en todas las apps.
- `supabase/schema.sql` listo para pegar en Supabase.

## Arrancar

```bash
npm install
npm run dev
```

## Tabla

`app2_03_academia_cursos`
