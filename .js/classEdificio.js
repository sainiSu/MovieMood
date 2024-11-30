class Edificio {
    constructor(nombre, numeroPlantas, superficie) {
        this.nombre = nombre;
        this.numeroPlantas = numeroPlantas;
        this.superficie = superficie;
    }
    getNombre() {
        return this.nombre;
    }

    getNumeroPlantas() {
        return this.numeroPlantas;
    }

    getSuperficie() {
        return this.superficie;
    }
     limpiar() {
        return "<hr><p><button onclick='limpiarPantalla()'>Clean The Data</button></p>";
      }
    toString() {
        let mostrar = `${this.nombre}  \n
                Numero de plantas: ${this.numeroPlantas} \n
                Superficie(m2): ${this.superficie}\n`;
        return mostrar;
    }
    limpiar() {
        let tiempoLimpiar = this.superficie / 5;  //given
        let minutoLimpiar = this.numeroPlantas / 2 + tiempoLimpiar;
        let horas = Math.floor(minutoLimpiar / 60);
        let minutos = minutoLimpiar % 60;
        let costeMensual = minutoLimpiar * 30;
        return `Se necesitan ${horas} horas y ${minutos}                
                 minutos para el servicio de limpieza y 
                tiene un coste total de ${costeMensual.toFixed(2)}€`;;
    }
    costeVigilancia(metros, peligrosidad) {
        let coste = 0;
        let vigilantes = 0;
        vigilantes = Math.ceil(this.superficie / metros);
        coste = vigilantes * 1300 + peligrosidad;
        return `Se necesitan ${vigilantes} vigilantes para este edificio y 
                tiene un coste de ${coste.toFixed(2)}€`;
    }

}
class Hotel extends Edificio {
    constructor(nombre, numeroPlantas, superficie, habitaciones) {
        super(nombre, numeroPlantas, superficie);
        this.habitaciones = habitaciones;
    }

    getHabitaciones() {
        return this.habitaciones;
    }
    setHabitacion(newHabitacion) {
        this.habitaciones = newHabitacion;
    }

    servicioHabitaciones() {
        let personas = 0;
        let coste;
        personas = parseInt(Math.ceil(this.habitaciones / 20));
        coste = personas * 1000;
        let mensaje = "Se necesitan " + personas + " personas para el servicio de habitaciones" + "\n";
        mensaje = "El coste de este servicio es: " + coste + "€";
        return mensaje;
    }

    toString() {
        let mostrar = "El Hotel" + "\n";
        mostrar += super.toString() + "<br>";
        mostrar += "Tiene Habitaciones " + this.habitaciones + " habitaciones" + "<br>";
        mostrar += super.limpiar() + "<br>";
        mostrar += super.costeVigilancia(1000, 500) + "<br>";
        mostrar += this.servicioHabitaciones();
        return mostrar;
    }
}
class Hospital extends Edificio {
    constructor(nombre, numeroPlantas, superficie, enfermos) {
        super(nombre, numeroPlantas, superficie);
        this.enfermos = enfermos;
    }
    getEnfermos() {
        return this.enfermos;
    }
    setEnfermos(newEnfermos) {
        this.enfermos = newEnfermos;
    }

    repatirAlmuerzo() {
        let almuerzoDiario = this.enfermos * 3;
        return almuerzoDiario;
    }
    actualizaComida() {
        let numEnfermos = Number(prompt("Numero de enfermos hospitalizado:", "200"));
        let raccion = numEnfermos * 3;
        return raccion;
    }
    toJs() {
        let mostrar = "El Hospital \n";
             mostrar += super.toString() + "\n";
             mostrar += "Tiene enfermos: " + this.enfermos + "\n";
              mostrar += super.limpiar() + "\n"
        return mostrar;
    }

    toString() {
        let mostrar = "El Hospital <br>";
             mostrar += super.toString() + "<br>";
             mostrar += "Tiene enfermos: " + this.enfermos + "<br>";
              mostrar += super.limpiar() + "<br>"
        return mostrar;
    }

}
class Cine extends Edificio {
    constructor(nombre, numeroPlantas, superficie, capacidad) {
        super(nombre, numeroPlantas, superficie);
        this.capacidad = capacidad;
    }
    getAforo() {
        return this.aforo;
    }
    setCapacidad(newCapacidad) {
        this.capacidad = newCapacidad;
    }
    projectSession(assistents, entryPrice) {
        let resulatdo = "";
        if (assistents > this.capacidad) {
            alert("Error! El valor de assistents es mayor que capacidad.");
        } else {
            const final = assistents * entryPrice;
            resulatdo = "Project session of cine:" + final.toFixed(2) + "€";
        }
        return resulatdo;
    }
    toJs() {
        let mostrar = "El Cinema \n";
        mostrar += super.toString() +"\n";
        mostrar += "Tiene max capacided de:" + this.capacidad;
        return mostrar;
    }
    toString() {
        let mostrar = "El Cinema <br>";
        mostrar += super.toString() +"<br>";
        mostrar += "Tiene max capacided de:" + this.capacidad;
        return mostrar;
    }

}
