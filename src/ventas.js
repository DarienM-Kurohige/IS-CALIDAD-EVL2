/** Lógica simplificada de una tienda. No requiere servidor ni base de datos. */
function calcularTotal(precio, cantidad, descuento = 0) {
  if (!Number.isFinite(precio) || !Number.isInteger(cantidad)) {
    throw new TypeError('Precio o cantidad inválidos');
  }
  if (precio < 0 || cantidad < 0) {
    throw new RangeError('No se aceptan valores negativos');
  }
  if (descuento < 0 || descuento > 100) {
    throw new RangeError('El descuento debe estar entre 0 y 100');
  }
  return Math.round(precio * cantidad * (1 - descuento / 100));
}

function calcularDespacho(total, region = 'RM') {
  if (total >= 50000) return 0;
  if (region === 'RM') return 2990;
  return 5990; // Rama no cubierta al principio; útil para explicar la cobertura.
}

function clasificarPedido(total) {
  if (total >= 100000) return 'grande';
  if (total >= 20000) return 'mediano';
  return 'pequeno';
}

module.exports = { calcularTotal, calcularDespacho, clasificarPedido };
