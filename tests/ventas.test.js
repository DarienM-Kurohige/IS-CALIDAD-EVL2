const { calcularTotal, calcularDespacho, clasificarPedido } = require('../src/ventas');

describe('Cálculo del total', () => {
  test('suma el valor de varios productos', () => {
    expect(calcularTotal(10000, 3)).toBe(30000);
  });
  test('aplica un descuento porcentual', () => {
    expect(calcularTotal(10000, 2, 10)).toBe(18000);
  });
  test('rechaza precios negativos', () => {
    expect(() => calcularTotal(-10, 2)).toThrow(RangeError);
  });
  test('rechaza una cantidad que no sea entera', () => {
    expect(() => calcularTotal(100, 1.5)).toThrow(TypeError);
  });
  test('rechaza descuentos fuera del rango', () => {
    expect(() => calcularTotal(100, 2, 110)).toThrow(RangeError);
  });
});

describe('Despacho', () => {
  test('es gratuito sobre el umbral', () => {
    expect(calcularDespacho(50000)).toBe(0);
  });
  test('cobra tarifa RM para compras menores', () => {
    expect(calcularDespacho(10000, 'RM')).toBe(2990);
  });
});

describe('Clasificación', () => {
  test('detecta pedidos grandes', () => {
    expect(clasificarPedido(120000)).toBe('grande');
  });
  test('detecta pedidos medianos', () => {
    expect(clasificarPedido(30000)).toBe('mediano');
  });
  test('detecta pedidos pequeños', () => {
    expect(clasificarPedido(9000)).toBe('pequeno');
  });
});
