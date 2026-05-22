CREATE OR REPLACE FUNCTION cursos_editados()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE app2_03_academia_cursos
  SET
    cursos_editados       = cursos_editados + NEW.cambio,
    actualizado = now()
  WHERE id = NEW.curso_id;

  RETURN NEW;
END;
$$;

CREATE TRIGGER trigger_nuevo_curso
  AFTER INSERT ON app2_03_academia_cursos
  FOR EACH ROW
  EXECUTE FUNCTION cursos_editados();
