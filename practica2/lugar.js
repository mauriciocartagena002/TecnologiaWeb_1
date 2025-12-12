const lugarTuristico = {
    nombre: "Parque Nacional Amboró",
    ciudad: "Santa Cruz",
    precioEntrada: 50,
    horario: "08:00 - 18:00",
    calificaciones: [5, 4, 4, 5, 3],

    promedioCalificaciones: function() {
        let suma = 0;
        for (let i = 0; i < this.calificaciones.length; i++) {
            suma += this.calificaciones[i];
        }
        return suma / this.calificaciones.length;
    },

    aplicarDescuento: function(porcentaje) {
        let descuento = this.precioEntrada * (porcentaje / 100);
        this.precioEntrada -= descuento;
    }
};

console.log("Promedio:", lugarTuristico.promedioCalificaciones());

lugarTuristico.aplicarDescuento(20);
console.log("Nuevo precio con 20% de descuento:", lugarTuristico.precioEntrada);
