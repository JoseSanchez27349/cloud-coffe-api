function calcularDescuento() {
  // Precio base del capuchino
  const precioCapuchino = 50.00; 
  
  // Obtener el valor del descuento seleccionado en el HTML
  const porcentaje = parseFloat(document.getElementById('tipoDescuento').value);
  
  // Operación matemática para el precio final
  const descuento = precioCapuchino * porcentaje;
  const precioFinal = precioCapuchino - descuento;
  
  // Mostrar el resultado en pantalla
  const elementoResultado = document.getElementById('resultado');
  
  if (porcentaje > 0) {
    elementoResultado.textContent = `¡Aplicado! Precio final: $${precioFinal.toFixed(2)} (Ahorraste $${descuento.toFixed(2)})`;
  } else {
    elementoResultado.textContent = `Precio total: $${precioFinal.toFixed(2)}`;
  }
}