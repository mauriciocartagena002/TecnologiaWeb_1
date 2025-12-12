function mostrarFechaActual() {
    const fecha = new Date();

    const dias = [
        "Domingo", "Lunes", "Martes", "Miércoles",
        "Jueves", "Viernes", "Sábado"
    ];

    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let año = fecha.getFullYear();

    let fechaCompleta = `${diaSemana}, ${dia} de ${mes} del ${año}`;

    console.log(fechaCompleta);
}

mostrarFechaActual();
