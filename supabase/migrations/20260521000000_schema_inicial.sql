-- Academia de cursos
-- Copiar y pegar en Supabase SQL Editor.
-- Incluye tabla, indices, RLS y datos semilla.

create extension if not exists "pgcrypto";

create table if not exists public.app2_03_academia_cursos (
  id uuid primary key default gen_random_uuid(),
  titulo text not null,
  descripcion text not null default '',
  estado text not null default 'pendiente'
    check (estado in ('pendiente', 'en_proceso', 'completado')),
  prioridad text not null default 'media'
    check (prioridad in ('alta', 'media', 'baja')),
  cantidad integer not null default 1 check (cantidad >= 0),
  owner_id uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

create index if not exists app2_03_academia_cursos_estado_idx on public.app2_03_academia_cursos(estado);
create index if not exists app2_03_academia_cursos_prioridad_idx on public.app2_03_academia_cursos(prioridad);

alter table public.app2_03_academia_cursos enable row level security;

drop policy if exists "app2_03_academia_cursos_select" on public.app2_03_academia_cursos;
create policy "app2_03_academia_cursos_select"
on public.app2_03_academia_cursos
for select
using (true);

drop policy if exists "app2_03_academia_cursos_insert" on public.app2_03_academia_cursos;
create policy "app2_03_academia_cursos_insert"
on public.app2_03_academia_cursos
for insert
to authenticated
with check (auth.uid() = owner_id or owner_id is null);

drop policy if exists "app2_03_academia_cursos_update" on public.app2_03_academia_cursos;
create policy "app2_03_academia_cursos_update"
on public.app2_03_academia_cursos
for update
to authenticated
using (auth.uid() = owner_id or owner_id is null)
with check (auth.uid() = owner_id or owner_id is null);

drop policy if exists "app2_03_academia_cursos_delete" on public.app2_03_academia_cursos;
create policy "app2_03_academia_cursos_delete"
on public.app2_03_academia_cursos
for delete
to authenticated
using (auth.uid() = owner_id or owner_id is null);

insert into public.app2_03_academia_cursos (titulo, descripcion, estado, prioridad, cantidad)
values
  ('Registro inicial', 'Dato para practicar select', 'pendiente', 'alta', 3),
  ('Registro en curso', 'Dato para practicar update', 'en_proceso', 'media', 5),
  ('Registro cerrado', 'Dato para practicar delete', 'completado', 'baja', 1)
on conflict do nothing;

-- Patrones de examen:
-- const { data, error } = await supabase.from("app2_03_academia_cursos").select("*")
-- const { data, error } = await supabase.from("app2_03_academia_cursos").insert({ titulo, descripcion }).select()
-- const { error } = await supabase.from("app2_03_academia_cursos").update({ estado: "completado" }).eq("id", id)
-- const { error } = await supabase.from("app2_03_academia_cursos").delete().eq("id", id)
