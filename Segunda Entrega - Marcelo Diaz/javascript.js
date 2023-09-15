let alumnos = prompt('Ingresa cantidad de alumnos');
let sumaNotas = 0;
let promedio = 0;
let aprobados = [];
let reprobados = [];

for (let i = 0; i < alumnos; i++) {
    let nombre = prompt('Ingresa nombre');
    let nota = prompt('Ingresa nota');
    while (nota < 1 || nota > 7) {
        nota = prompt('Valor incorreto / Ingresa nota nuevamente');
    }         
    nota = parseInt(nota);    
    sumaNotas += nota;   
    if (nota >= 4) {
        console.log(nombre + ' aprobó con nota ' + nota);
        let alumnosNota = {
            nombre: nombre,
            nota: nota
        };
        aprobados.push(alumnosNota);
        
    } else {
        console.log(nombre + ' reprobó con nota ' + nota);        
        let alumnosNota = {
            nombre: nombre,
            nota: nota
        };
        reprobados.push(alumnosNota);
    }    
    
}

promedio = parseInt(sumaNotas) / parseInt(alumnos);
console.log('el promedio del curso es: ' + promedio.toFixed(2));

//Aprobados
console.log('Alumnos aprobados:');
aprobados.forEach(aprobado => {
    console.log('El alumno: ', aprobado.nombre, ' aprobó con nota ',aprobado.nota)
});

//Reprobados
console.log('Alumnos reprobados:');
reprobados.forEach(reprobado => {
    console.log('El alumno: ', reprobado.nombre, ' reprobó con nota ', reprobado.nota)
});






