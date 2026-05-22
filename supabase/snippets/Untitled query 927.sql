CREATE OR REPLACE FUNCTION aplicar_movimiento_stock()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE productos
  SET
    stock       = stock + NEW.cambio,
    actualizado = now()
  WHERE id = NEW.producto_id;

  RETURN NEW;
END;
$$;

CREATE TRIGGER trigger_movimiento_stock
  AFTER INSERT ON movimientos_stock
  FOR EACH ROW
  EXECUTE FUNCTION aplicar_movimiento_stock();
