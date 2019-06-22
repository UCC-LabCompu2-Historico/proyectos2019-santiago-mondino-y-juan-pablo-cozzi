
/**
 * Esta funcion lo que hace es realizar el calculo de los datos faltantes del triangulo rectangulo que se desea obtener.
 * Para ello primero analiza que datos ha ingresado el usuario y en base a eso, realiza el calculo correspondiente.
 * @method Calcular
 */

function Calcular(){

    var Ladoa = document.getElementById("Valor1a").value;
    var Ladob = document.getElementById("Valor1b").value;
    var Ladoc = document.getElementById("Valor1c").value;
    var Anguloα = document.getElementById("Valor1A").value;
    var Anguloβ = document.getElementById("Valor1B").value;
    var Anguloγ = document.getElementById("Valor1C").value;
    var AreaTriang = document.getElementById("Area").value;
    var PerimTriang = document.getElementById("Perimetro").value;



// FALTAN AGREGAR UN PAR DE COMBINACIONES PARA CUANDO TENEMOS DOS LADOS Y UN SOlo ANGULO.

    if (Anguloβ == '' && Ladob=='' && Ladoc==''){
        var angbeta = (Anguloγ-Anguloα);
        document.getElementById("Valor1B").value = angbeta;
        var ang_convertido = (Anguloα*Math.PI)/(180);
        var catetoC = ((Ladoa)/(Math.sin(ang_convertido)));
        document.getElementById("Valor1c").value = catetoC;
        var catetoB = ((Ladoa)/Math.tan(ang_convertido));
        document.getElementById("Valor1b").value = catetoB;
        var Area = ((catetoB*Ladoa)/2);
        document.getElementById("Area").value = Area;
        var PerimetroT = parseInt(Ladoa) + (catetoB + catetoC) ;
        document.getElementById("Perimetro").value = PerimetroT;

    }
    else if(Anguloβ == '' && Ladoa=='' && Ladoc==''){
        var angbeta = (Anguloγ-Anguloα);
        document.getElementById("Valor1B").value = angbeta;
        var ang_convertido = (Anguloα*Math.PI)/(180); //angulo alfa convertido a radianes
        var catetoC = ((Ladob)/(Math.cos(ang_convertido)));
        document.getElementById("Valor1c").value = catetoC;
        var catetoA = ((Ladob)*Math.tan(ang_convertido));
        document.getElementById("Valor1a").value = catetoA;
        var Area = ((Ladob*catetoA)/2);
        document.getElementById("Area").value = Area;
        var PerimetroT = parseInt(Ladob) + (catetoA + catetoC) ;
        document.getElementById("Perimetro").value = PerimetroT;
    }
    else if(Anguloβ == '' && Ladoa=='' && Ladob==''){
        var angbeta = (Anguloγ-Anguloα);
        document.getElementById("Valor1B").value = angbeta;
        var ang_convertido = (Anguloα*Math.PI)/(180); //angulo alfa convertido a radianes
        var catetoB = ((Ladoc)*(Math.cos(ang_convertido)));
        document.getElementById("Valor1b").value = catetoB;
        var catetoA = ((Ladoc)*Math.sin(ang_convertido));
        document.getElementById("Valor1a").value = catetoA;
        var Area = ((catetoB*catetoA)/2);
        document.getElementById("Area").value = Area;
        var PerimetroT = parseInt(Ladoc) + (catetoA + catetoB) ;
        document.getElementById("Perimetro").value = PerimetroT;
    }
    else if (Anguloα == '' && Ladob=='' && Ladoc==''){
        var angalfa = (Anguloγ-Anguloβ);
        document.getElementById("Valor1A").value = angalfa;
        var ang_convertido = (Anguloβ*Math.PI)/(180); //angulo alfa convertido a radianes
        var catetoB = ((Ladoa)*(Math.tan(ang_convertido)));
        document.getElementById("Valor1b").value = catetoB;
        var catetoC = ((Ladoa)/Math.cos(ang_convertido));
        document.getElementById("Valor1c").value = catetoC;
        var Area = ((catetoB*Ladoa)/2);
        document.getElementById("Area").value = Area;
        var PerimetroT = parseInt(Ladoa) + (catetoC + catetoB) ;
        document.getElementById("Perimetro").value = PerimetroT;
    }
    else if (Anguloα == '' && Ladoa=='' && Ladoc==''){
        var angalfa = (Anguloγ-Anguloβ);
        document.getElementById("Valor1A").value = angalfa;
        var ang_convertido = (Anguloβ*Math.PI)/(180); //angulo alfa convertido a radianes
        var catetoA = ((Ladob)/(Math.tan(ang_convertido)));
        document.getElementById("Valor1a").value = catetoA;
        var catetoC = ((Ladob)/Math.sin(ang_convertido));
        document.getElementById("Valor1c").value = catetoC;
        var Area = ((catetoA*Ladob)/2);
        document.getElementById("Area").value = Area;
        var PerimetroT = parseInt(Ladob) + (catetoC + catetoA) ;
        document.getElementById("Perimetro").value = PerimetroT;
    }
    else if (Anguloα == '' && Ladoa=='' && Ladob==''){
        var angalfa = (Anguloγ-Anguloβ);
        document.getElementById("Valor1A").value = angalfa;
        var ang_convertido = (Anguloβ*Math.PI)/(180); //angulo alfa convertido a radianes
        var catetoA = ((Ladoc)*(Math.cos(ang_convertido)));
        document.getElementById("Valor1a").value = catetoA;
        var catetoB = ((Ladoc)*Math.sin(ang_convertido));
        document.getElementById("Valor1b").value = catetoB;
        var Area = ((catetoB*catetoA)/2);
        document.getElementById("Area").value = Area;
        var PerimetroT = parseInt(Ladoc) + (catetoB + catetoA) ;
        document.getElementById("Perimetro").value = PerimetroT;
    }
    else if(Ladoa==''){
        var catetoB = parseInt(Ladob);
        var catetoC = parseInt(Ladoc);
        var catetoA= Math.sqrt((Ladoc*Ladoc)-(Ladob*Ladob));
        document.getElementById("Valor1a").value = catetoA;
        var angalfa= Math.atan(catetoA/Ladob);
        var ang_convertido = (angalfa*180)/(Math.PI);
        document.getElementById("Valor1A").value = ang_convertido;
        var angbeta = (Anguloγ-ang_convertido);
        document.getElementById("Valor1B").value = angbeta;

        var Area = ((Ladob*catetoA)/2);
        document.getElementById("Area").value = Area;
        var PerimetroT = parseInt(catetoB) + (catetoC + catetoA) ;
        document.getElementById("Perimetro").value = PerimetroT;

    }
    else if(Ladob==''){
        var catetoA = parseInt(Ladoa);
        var catetoC = parseInt(Ladoc);
        var catetoB= Math.sqrt((Ladoc*Ladoc)-(Ladoa*Ladoa));
        document.getElementById("Valor1b").value = catetoB;
        var angalfa= Math.atan(Ladoa/catetoB);
        var ang_convertido = (angalfa*180)/(Math.PI);
        document.getElementById("Valor1A").value = ang_convertido;
        var angbeta = (Anguloγ-ang_convertido);
        document.getElementById("Valor1B").value = angbeta;
        var Area = ((Ladoa*catetoB)/2);
        document.getElementById("Area").value = Area;
        var PerimetroT = parseInt(catetoB) + (catetoC + catetoA) ;
        document.getElementById("Perimetro").value = PerimetroT;

    }
    else if(Ladoc=='') {
        var catetoA = parseInt(Ladoa);
        var catetoB = parseInt(Ladob);
        var catetoC = Math.sqrt((Ladoa * Ladoa) + (Ladob * Ladob));
        document.getElementById("Valor1c").value = catetoC;
        var angalfa = Math.atan(Ladoa / Ladob);
        var ang_convertido = (angalfa * 180) / (Math.PI);
        document.getElementById("Valor1A").value = ang_convertido;
        var angbeta = (Anguloγ - ang_convertido);
        document.getElementById("Valor1B").value = angbeta;
        var Area = ((Ladob*Ladoa)/2);
        document.getElementById("Area").value = Area;
        var PerimetroT = parseInt(catetoB) + (catetoC + catetoA) ;
        document.getElementById("Perimetro").value = PerimetroT;

    }

     if (Ladoa=='' && Ladob=='' && Ladoc==''){
        alert("Por Favor, ingrese correctamente los datos");
         Reiniciar();
         Limpiar();
     }
    if (Ladob=='' && Ladoc==''&& Anguloα=='' && Anguloβ==''){
        alert("Por Favor, ingrese correctamente los datos");
        Reiniciar();
        Limpiar();
    }
    if (Ladoa=='' && Ladob==''&& Anguloα=='' && Anguloβ==''){
        alert("Por Favor, ingrese correctamente los datos");
        Reiniciar();
        Limpiar();
    }
    if (Ladoa=='' && Ladoc==''&& Anguloα=='' && Anguloβ==''){
        alert("Por Favor, ingrese correctamente los datos");

        Reiniciar();
        Limpiar();
    }
}


/**
 * La funcion aqui abajo realiza el dibujo del triangulo correspondiente a los datos ingresados/calculados.
 * El dibujo se hace sobre un canvas
 * @method dibujar
 */
function dibujar() {

    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var base = parseInt(document.getElementById("Valor1b").value);
    var altura = parseInt(document.getElementById("Valor1a").value);

    var Xmedia= canvas.width/2;
    var Ymedia = canvas.height/2;
    //context.scale(0.8,0.8);

    context.beginPath();
    context.moveTo(Xmedia, Ymedia);
    context.lineTo(base, Ymedia);
    context.lineTo(base, altura);
    context.closePath();

    //Contorno
    context.lineWidth = 2;
    context.strokeStyle = '#000000';
    context.stroke();

    //relleno
    context.fillStyle = "#FFCC00";
    context.fill();


}
/**
 * La siguiente funcion lo que hace es reiniciar todos los inputs a su valor original, con el objetivo de que el usuario
 * realice nuevamente un calculo.
 * @method Reiniciar
 */

function Reiniciar() {


    document.getElementById("Valor1B").value = null;
    document.getElementById("Valor1A").value = null;
    document.getElementById("Valor1a").value = null;
    document.getElementById("Valor1c").value = null;
    document.getElementById("Valor1b").value = null;
    document.getElementById("Area").value = null;
    document.getElementById("Perimetro").value = null;
}

/**
 * La siguiente funcion lo que hace es limpiar el canvas, con el objetivo de que cuando el usuario
 * realice nuevamente un calculo, se dibuje el triangulo correspondiente si tener al anterior por debajo.
 * @method Limpiar
 */
function Limpiar() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    context.clearRect (0, 0, canvas.width, canvas.height);

}

