let edificios = [ //para crear edificios hotel hospital y cinema.
    new Hotel("Hotel Arts", 15, 2500),
    new Hotel("Hotel Palace", 20, 3000, 300),
    new Hotel("Hotel Ritz", 25, 4000, 500),
    new Hotel("Hotel W", 300, 15, 2500, 800),// nombre, plantas,superficie y habitaciones.
    new Hospital("Cruz Roja", 5, 3000),
    new Hospital("Sant Juan de diu", 4, 2500, 100),
    new Hospital("Barcelona", 10, 5000, 180),
    new Hospital("Hospital Clinic", 15, 3500, 200),//nombre, plantas,superficie,enfermos.
    new Cine("Multiplex", 3, 5000),
    new Cine("Cinesa", 4, 2000, 400),
    new Cine("Cinema", 5, 3000, 600),
    new Cine("Uppal", 3, 3300, 350)//nombre,plantas,superficies,capacidad.
]
console.table(edificios);
let posicion = 0;

function buscar(valor) {
    let encontardo = false;
    let indice = -1;
    let i = 0;
    let vuelats = edificios.length;
    while (i < vuelats && !encontardo) {
        if (valor == edificios[i].nombre) {
            indice = i;
            encontardo = true;
        }
        i++;
    }
    return indice;
}
function aregrar() {
    let tipo, newEdificio, habitacion, enfermo, capacity;
    let message = "";
    let nombreEdificio = prompt( "Indica el nombre del edificio que quieres aregrar:","New Buliding");
    let indice = buscar(nombreEdificio);
    if (indice > 0) {
        message = " El edificio esta registrada y datos de edificio son: \n";
        message += edificios[indice].toJs();
    }else{
        do {
            tipo = prompt("Indica el tipo de edificio que quieres aregrar:\n A-Hotel \n B-Hospital \n C- Cinema", "A".toUpperCase());
        } while (!('ABC'.includes(tipo)));
        let edificioNombre = prompt("Indica el nombre del edificio", "Hotel Marriot");
        let numPlantas = Number(prompt("Indica el numero de plantas:", "15"));
        let edificiSuperficie = Number(prompt("Indica el superficie de edificio:", "2500"));
        if (tipo == "A") {
            habitacion = parseInt(prompt("Indica numero de habitaciones:", "300"));
            newEdificio = new Hotel(edificioNombre, numPlantas, edificiSuperficie, habitacion);
        } else if (tipo == "B") {
            enfermo = parseInt(prompt("Indica numero de enfermos: ", "100"));
            newEdificio = new Hospital(edificioNombre, numPlantas, edificiSuperficie, enfermo);
        } else if (tipo == "C") {
            capacity = parseInt(prompt("Indica el aforo del cine:", "600"));
            newEdificio = new Cine(edificioNombre, numPlantas, edificiSuperficie, capacity);
        }
        edificios.push(newEdificio);
        message = newEdificio.toString();
        //alert(newEdificio.toString());
        alert("Edificio esta creado");
        console.table(edificios);
    }
    document.getElementById('result').innerHTML = message;
}

/*function mostrarEdificio(){
    let nombreEdificio = prompt( "Indica el nombre del edificio que quieres mostrar:","Hotel W");
    let indice = buscar(nombreEdificio);

    if(indice < 0 ){
        alert("El edificio que quieres mostrar no esta registrado.");
        
    }else {
        const edificio = edificios[indice];
            if(edificios[posicion] instanceof Hotel) {
                let newHabitacion = prompt("Introduce numeros de habitaciones:", "800");
                edificios[posicion].setHabitacion(newHabitacion);
                alert(edificios[posicion].costeVigilancia(1000, 500));
                alert("El edificio" + edificios.toString());
                   
            } else if (edificios[posicion] instanceof Hospital) {
                let newEnfermos = prompt("Introduce el número de pacientes actuales: ", "100");
                edificios[posicion].setEnfermos(newEnfermos);
                alert(edificios[posicion].repatirAlmuerzo(newEnfermos));
                alert(edificios[posicion].costeVigilancia(1000, 0));
                alert("El edificio" + edificios.toString());
      
            } else if (edificios[posicion] instanceof Cine) {
                let entryPrice = prompt("Cuál es el precio de las entradas?: ", "30 €");
                let assistents = prompt("Entra el número de asistentes: ", "100");
                alert(edificios[posicion].projectSession(assistents, entryPrice));
                alert(edificios[posicion].costeVigilancia(3000, 0)); 
                alert("El edificio" + edificios.toString());
    
            }else{
                alert(edificios[posicion].toString());
            } 
        }
    
    }*/
    function mostrarEdificio() { 
        let nombreEdificio, indice, assistents,  entryPrice;
        nombreEdificio = prompt("Indica el nombre del edificio que quieres mostrar:","Hotel W");
        indice = buscar(nombreEdificio);
        if (indice < 0) {
        alert("El edificio que quieres mostrar no esta registrado.");
        } else {
            const edificio = edificios[indice]; 
            if (edificio instanceof Hotel) {
                document.getElementById("result").innerHTML = edificio.toString();
            } else if (edificio instanceof Hospital) {
                document.getElementById("result").innerHTML = edificio.toString()//+ 
            } else if (edificio instanceof Cine) { 
                assistents = parseInt(prompt("Entra el número de asistentes: ","100"));
                 entryPrice= parseFloat(prompt("Cuál es el precio de las entradas?: ", "30 €"));
                let cine = edificio.projectSession(assistents,  entryPrice);
                document.getElementById("result").innerHTML = edificio.toString();
                document.getElementById("result").innerHTML += cine;
            }
        }     
    }

function eliminar(){
    let nombreEdificio = prompt( "Indica el nombre del edificio que quieres eliminar:","Hotel W");
    let indice = buscar(nombreEdificio);
    if(indice < 0 ){
        alert("El edificio que quieres eliminar no esta registrado.");
    }else{
        let edificio = edificios[indice];
    alert("¿Desea eliminar este edificio?\n"  + edificio.toString());
    let message;
    confirmEliminar = confirm(message);    
    if(confirmEliminar){
        edificios.splice(indice, 1);
        alert("Edificio esta elminado.");        
    }else{
        alert("El edificio no esta eliminado esta mantiene registrado.");
    }
    console.table(edificios);
    }
}
function limpiarPantalla() {
    document.getElementById("result").innerHTML ="";
  }