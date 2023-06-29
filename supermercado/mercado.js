function calcularDescuentos() {
    let cantidad = parseInt(document.getElementById("cantidadInput").value)

    // Entradas
    const precioPorDocena = 2.800 // precio de una docena de cerezas
    const cantidadDeDocenas = cantidad // cantidad de docenas a comprar

    // Proceso
    let montoDeCompra = precioPorDocena * cantidadDeDocenas;
    let descuento = 0
    let unidadesDeObsequio = 0

    if (cantidadDeDocenas > 3) {
        descuento = montoDeCompra * 0.15
        unidadesDeObsequio = 1
    } else {
        descuento = montoDeCompra * 0.1
    }

    montoDeCompra -= descuento

    // Salidas
    let totalmontodeCompra = document.getElementById("montoDeCompra")
    totalmontodeCompra.textContent = "El monto de compra es: " + montoDeCompra.toFixed(3); 

    let totalDescuento = document.getElementById("descuento")
    totalDescuento.textContent = "El descuento es: " + descuento.toFixed(3);

    let obsequio = document.getElementById("unidadesDeObsequio")
    obsequio.textContent =  "Unidades de obsequio: " + unidadesDeObsequio

}