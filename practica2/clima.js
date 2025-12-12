function climaSegunTemperatura(temp) {
    if (temp >= -10 && temp <= 15) {
        return "Frío";
    } else if (temp >= 16 && temp <= 25) {
        return "Templado";
    } else if (temp >= 26 && temp <= 40) {
        return "Calor";
    } else {
        return "Temperatura fuera de rango";
    }
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingrese la temperatura en °C: ", temp => {
    console.log("El clima es:", climaSegunTemperatura(parseInt(temp)));
    readline.close();
});

