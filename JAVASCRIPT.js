//Determinar el resultado de la suma, resta, multiplicación y división de dos números ingresados por el usuario.
function operacionesBasicas(){
    //Declaramos variables
    var a =0;
    var b =0;
    var suma =0;
    var resta =0;
    var multiplicacion =0;
    var divison =0;
    //Solicitamos los valores y lo asignamos a las variables correspondientes
    //pasrseFloat toma los valores numericos, solo prompt toma cadena de caracteres
    a = parseFloat(prompt ("Por favor ingrese el primer valor"));
    b = parseFloat(prompt ("Por favor ingrese el segundo valor"));
    //Se realizan las operaciones
    suma = a + b ;
    resta = a - b ;
    multiplicacion = a * b ;
    division = a / b ;
    //Imprimimos los resultados en pantalla
    alert("La suma es: " + suma);
    alert("La resta es: " + resta);
    alert("La multiplicacion es: " + multiplicacion);
    alert("La division es: " + division);
}

//Determinar el mayor de dos números ingresados por el usuario.
function mayorDeDosNumeros() {

    var A = 0;
    var B = 0;

        A = parseFloat(prompt("Por favor ingrese el primer numero"));
        B = parseFloat(prompt("Por favor ingrese el segundo numero"));


        if ( A === B) {
            alert(" Son numeros iguales");
        } else if (A > B) {
            alert(A + " Es mayor que " + B);
        }
        else {
            alert(B + " Es mayor que " + A);
        }


}

//Determinar el menor de tres números ingresados por el usuario.
function menorDeTresNumeros() {

    var A = 0;
    var B = 0;
    var C = 0;
    
    A = parseFloat(prompt(" Por favor ingrese el primer número "));
    B = parseFloat(prompt(" Por favor ingrese el segundo número "));
    C = parseFloat(prompt(" Por favor ingrese el tercer número "));
    
    if ((A == B) && (A == C)) {
        alert("Los números son iguales ");
    } else if ((A <= B ) && ( A <= C )) {
        alert( A + " Es el numero menor ");
    } else if ((B < A) && (B < C)){
        alert(B + " Es el numero menor");
    }else {
        alert(C + " Es el numero menor");
     } 
}    


//Determinar si un número es par o impar.
function parImpar() {

    var A = 0;

        A = parseFloat(prompt("Por favor ingrese el número"));
       
        if ( A % 2 == 0) {
            alert(A+" Es un número par");
        } else {
            alert(A + " Es un número impar" );
        }
}

//E.	Determinar el cuadrado de un número.
function cuadrado() {

    var A = 0;
    var R = 0;

        A = parseFloat(prompt("Por favor ingrese el número"));
        R = A*A;
            alert(R + " Es el cuadrado de "+A );
}

//F.	Determinar el área de un triángulo.
function areaTriangulo() {

    var A = 0;
    var B = 0;  
    var R = 0;

        A = parseFloat(prompt("Por favor ingrese la altura del trangulo"));
        B = parseFloat(prompt("Por favor ingrese la base del triangulo"));
        R = (( A * B ) / 2);
        alert(" El area del triangulo es: "+ R );
}

//Determinar los centímetros de un valor dado en metros por el usuario.
function centimetros() {

    var A = 0;
    var C = 0;

        A = parseFloat(prompt("Por favor ingrese el número en metros"));
        C = A *100;
        alert(A + " metros son " + C +" centimetros" );
}

//Determinar el año en que nacio el usuario ingresando su edad
function añoNacimiento(){
    var A = 0;
    var B = 0;
    A = parseFloat(prompt("Por favor ingrese su edad"));
    B = 2021 - A; 
    alert(" Su año de nacimiento es: " + B);
}

//Un individuo desea invertir su capital en un banco y requiere saber cuánto dinero ganará después de N número de años, teniendo en cuenta que el banco paga un interés del 2% mensual.
function interes(){
    var A = 0;
    var capital = 0;
    var ganancia = 0;
    var total = 0;
    var intereses = 0;

    capital = parseFloat(prompt("Por favor ingrese el capital que desea invertir"));
    A = parseFloat(prompt("Por favor ingrese el numero de años que sea dejar su dinero"));
    
    ganancia = capital * 0.02;
    intereses =ganancia *( A* 12);
    total = capital + intereses;

    alert(" Si su inversion es de $" + capital + " mensualmente tendrá una ganacia de $"+ ganancia + ", en "+ A + " años tendrá $"+ intereses + " de intereses. Para un total de $"+ total);
}

//El colegio ABC requiere un sistema que le permita calcular el promedio de un alumno que tiene 5 calificaciones en la materia de Inglés. Las calificaciones son en escala de 1 a 5, donde reprueba entre 1 y 2,9 y aprueba si es superior a 3.
function promedio(){
    //Declaramos variables
    var nota1 =0;
    var nota2 =0;
    var nota3 =0;
    var nota4 =0;
    var nota5 =0;
    var promedio =0;
    //Solicitamos los valores y lo asignamos a las variables correspondientes
    //pasrseFloat toma los valores numericos, solo prompt toma cadena de caracteres
    nota1 = parseFloat(prompt ("Por favor ingrese la primera nota"));
    nota2 = parseFloat(prompt ("Por favor ingrese la segunda nota"));
    nota3 = parseFloat(prompt ("Por favor ingrese la tercera nota"));
    nota4 = parseFloat(prompt ("Por favor ingrese la cuarta nota"));
    nota5 = parseFloat(prompt ("Por favor ingrese la quinta nota"));
    //Se realizan las operaciones
    promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    //Imprimimos los resultados en pantalla
    if(promedio <= 2.9){
        alert("Reprobo la materia con: " + promedio);
    }else{
        alert("Aprobo la materia con:  " + promedio);
    }
}

//Una frutería vende manzanas a $4.500 el kilo, realice un algoritmo que permita saber
//al vendedor cuanto debe pagar un cliente teniendo en cuenta que la frutería tiene
//la siguiente tabla de descuentos:
function descuentos(){
    //Declaramos variables
    var a =0;
    var b =0;
    
    //Solicitamos los valores y lo asignamos a las variables correspondientes
    //pasrseFloat toma los valores numericos, solo prompt toma cadena de caracteres
    a = parseFloat(prompt ("Por favor ingrese el total de kilos comprados"));
 
    //Imprimimos los resultados en pantalla
    if(a<=2){
        b= a*4500;
        alert("El total a pagar es: " + b);
    }else if(a<=5 && a>=3){
        b = ( a * 4500 ) - ( 10 * ( a * 4500 ) / 100);
        alert("El total a pagar es: " + b);
    }else if(a<=10 && a>=6){
        b = (a*4500)-(15* (a*4500)/100);
        alert("El total a pagar es: " + b);
    }else if(a>10){
        b = (a*4500)-(20 * (a*4500)/100);
        alert("El total a pagar es: " + b);
    }
}