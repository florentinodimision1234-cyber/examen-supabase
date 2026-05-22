
create extension if not exists "pgcrypto";

create table if not exists cursos (
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
  cuesos_editados timestamptz timestamptz not null
);

create index if not exists app2_03_academia_cursos_estado_idx on public.app2_03_academia_cursos(estado);
create index if not exists app2_03_academia_cursos_prioridad_idx on public.app2_03_academia_cursos(prioridad);

