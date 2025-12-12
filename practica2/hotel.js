class Hotel {
    constructor(nombre, ciudad, habitacionesDisponibles) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.habitacionesDisponibles = habitacionesDisponibles;
    }

    reservar(cantidad) {
        if (cantidad <= this.habitacionesDisponibles) {
            this.habitacionesDisponibles -= cantidad;
            console.log(`Reserva exitosa. Habitaciones restantes: ${this.habitacionesDisponibles}`);
        } else {
            console.log("No hay suficientes habitaciones disponibles.");
        }
    }

    liberar(cantidad) {
        this.habitacionesDisponibles += cantidad;
        console.log(`Habitaciones liberadas. Total disponibles: ${this.habitacionesDisponibles}`);
    }

    info() {
        return `Hotel: ${this.nombre}, Ciudad: ${this.ciudad}, Habitaciones disponibles: ${this.habitacionesDisponibles}`;
    }
}

const hotel1 = new Hotel("Hotel Paraíso", "Santa Cruz", 10);

console.log(hotel1.info());
hotel1.reservar(4);
hotel1.liberar(2);
console.log(hotel1.info());
