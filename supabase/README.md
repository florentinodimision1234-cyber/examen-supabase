# Supabase local

Esta app esta preparada para Supabase local con Docker.

## 1. Arrancar Supabase

```bash
npm run supabase:start
```

Si es la primera vez, Supabase descargara contenedores Docker.

## 2. Crear la base de datos

La migracion esta en:

```txt
supabase/migrations/20260521000000_schema_inicial.sql
```

Aplica la migracion con:

```bash
npm run supabase:reset
```

Eso deja creada la tabla `public.app2_03_academia_cursos`, indices, RLS, policies y datos semilla.

## 3. Pegar claves en Next

Consulta las claves locales:

```bash
npm run supabase:status
```

Copia `API URL` y `anon key` en `.env.local` usando `.env.local.example`.

## 4. Arrancar Next

```bash
npm run dev
```

Studio local suele estar en:

```txt
http://127.0.0.1:54323
```
