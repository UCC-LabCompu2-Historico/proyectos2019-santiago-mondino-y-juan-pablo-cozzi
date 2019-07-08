var contador = 0;

/**
 * Esta funcion lo que hace es realizar el calculo de los datos faltantes del triangulo rectangulo que se desea obtener.
 * Para ello primero analiza que datos ha ingresado el usuario y en base a eso, realiza el calculo correspondiente.
 * @method Calcular
 */

function Calcular(){

    var Ladoa = document.getElementById("LadoA").value;
    var Ladob = document.getElementById("LadoB").value;
    var Ladoc = document.getElementById("LadoC").value;
    var Anguloα = document.getElementById("AnguloAlfa").value;
    var Anguloβ = document.getElementById("AnguloBeta").value;
    var Anguloγ = document.getElementById("AnguloGamma").value;
    var AreaTriang = document.getElementById("Area").value;
    var PerimTriang = document.getElementById("Perimetro").value;

    contador= contador + 1;




    if (Anguloβ == '' && Ladob=='' && Ladoc==''){
        var angbeta = Math.round(Anguloγ-Anguloα);
        document.getElementById("AnguloBeta").value = angbeta;
        var ang_convertido = (Anguloα*Math.PI)/(180);
        var catetoC = Math.round((Ladoa)/(Math.sin(ang_convertido)));
        document.getElementById("LadoC").value = catetoC;
        var catetoB = Math.round((Ladoa)/Math.tan(ang_convertido));
        document.getElementById("LadoB").value = catetoB;
        var Area = ((catetoB*Ladoa)/2);
        document.getElementById("Area").value = Area;
        var PerimetroT = Math.round(parseInt(Ladoa) + (catetoB + catetoC)) ;
        document.getElementById("Perimetro").value = PerimetroT;

    }
    else if(Anguloβ == '' && Ladoa=='' && Ladoc==''){
        var angbeta = Math.round(Anguloγ-Anguloα);
        document.getElementById("AanguloBeta").value = angbeta;
        var ang_convertido = (Anguloα*Math.PI)/(180); //angulo alfa convertido a radianes
        var catetoC = Math.round((Ladob)/(Math.cos(ang_convertido)));
        document.getElementById("LadoC").value = catetoC;
        var catetoA = Math.round((Ladob)*Math.tan(ang_convertido));
        document.getElementById("LadoA").value = catetoA;
        var Area = Math.round((Ladob*catetoA)/2);
        document.getElementById("Area").value = Area;
        var PerimetroT = Math.round(parseInt(Ladob) + (catetoA + catetoC)) ;
        document.getElementById("Perimetro").value = PerimetroT;
    }
    else if(Anguloβ == '' && Ladoa=='' && Ladob==''){
        var angbeta = Math.round((Anguloγ-Anguloα));
        document.getElementById("AnguloBeta").value = angbeta;
        var ang_convertido = (Anguloα*Math.PI)/(180); //angulo alfa convertido a radianes
        var catetoB = Math.round((Ladoc)*(Math.cos(ang_convertido)));
        document.getElementById("LadoB").value = catetoB;
        var catetoA = Math.round((Ladoc)*Math.sin(ang_convertido));
        document.getElementById("LadoA").value = catetoA;
        var Area = Math.round((catetoB*catetoA)/2);
        document.getElementById("Area").value = Area;
        var PerimetroT = Math.round(parseInt(Ladoc) + (catetoA + catetoB)) ;
        document.getElementById("Perimetro").value = PerimetroT;
    }
    else if (Anguloα == '' && Ladob=='' && Ladoc==''){
        var angalfa = Math.round(Anguloγ-Anguloβ);
        document.getElementById("AnguloAlfa").value = angalfa;
        var ang_convertido = (Anguloβ*Math.PI)/(180); //angulo alfa convertido a radianes
        var catetoB = Math.round((Ladoa)*(Math.tan(ang_convertido)));
        document.getElementById("LadoB").value = catetoB;
        var catetoC = Math.round((Ladoa)/Math.cos(ang_convertido));
        document.getElementById("LadoC").value = catetoC;
        var Area = Math.round((catetoB*Ladoa)/2);
        document.getElementById("Area").value = Area;
        var PerimetroT = Math.round(parseInt(Ladoa) + (catetoC + catetoB)) ;
        document.getElementById("Perimetro").value = PerimetroT;
    }
    else if (Anguloα == '' && Ladoa=='' && Ladoc==''){
        var angalfa = Math.round(Anguloγ-Anguloβ);
        document.getElementById("AnguloAlfa").value = angalfa;
        var ang_convertido = (Anguloβ*Math.PI)/(180); //angulo alfa convertido a radianes
        var catetoA = Math.round((Ladob)/(Math.tan(ang_convertido)));
        document.getElementById("LadoA").value = catetoA;
        var catetoC = Math.round((Ladob)/Math.sin(ang_convertido));
        document.getElementById("LadoC").value = catetoC;
        var Area = Math.round((catetoA*Ladob)/2);
        document.getElementById("Area").value = Area;
        var PerimetroT = Math.round(parseInt(Ladob) + (catetoC + catetoA)) ;
        document.getElementById("Perimetro").value = PerimetroT;
    }
    else if (Anguloα == '' && Ladoa=='' && Ladob==''){
        var angalfa = Math.round(Anguloγ-Anguloβ);
        document.getElementById("AnguloAlfa").value = angalfa;
        var ang_convertido = (Anguloβ*Math.PI)/(180); //angulo alfa convertido a radianes
        var catetoA = Math.round((Ladoc)*(Math.cos(ang_convertido)));
        document.getElementById("LAdoA").value = catetoA;
        var catetoB = Math.round((Ladoc)*Math.sin(ang_convertido));
        document.getElementById("LadoB").value = catetoB;
        var Area = Math.round((catetoB*catetoA)/2);
        document.getElementById("Area").value = Area;
        var PerimetroT = Math.round(parseInt(Ladoc) + (catetoB + catetoA)) ;
        document.getElementById("Perimetro").value = PerimetroT;
    }
    else if(Ladoa==''){
        var catetoB = Math.round(parseInt(Ladob));
        var catetoC = Math.round(parseInt(Ladoc));
        var catetoA= Math.round(Math.sqrt((Ladoc*Ladoc)-(Ladob*Ladob)));
        document.getElementById("LadoA").value = catetoA;
        var angalfa= Math.round(Math.atan(catetoA/Ladob));
        var ang_convertido = Math.round(angalfa*180)/(Math.PI);
        document.getElementById("AnguloAlfa").value = ang_convertido;
        var angbeta = Math.round(Anguloγ-ang_convertido);
        document.getElementById("AnguloBeta").value = angbeta;

        var Area = Math.round((Ladob*catetoA)/2);
        document.getElementById("Area").value = Area;
        var PerimetroT = Math.round(parseInt(catetoB) + (catetoC + catetoA));
        document.getElementById("Perimetro").value = PerimetroT;

    }
    else if(Ladob==''){
        var catetoA = Math.round(parseInt(Ladoa));
        var catetoC = Math.round(parseInt(Ladoc));
        var catetoB= Math.round(Math.sqrt((Ladoc*Ladoc)-(Ladoa*Ladoa)));
        document.getElementById("LadoB").value = catetoB;
        var angalfa= Math.round(Math.atan(Ladoa/catetoB));
        var ang_convertido = Math.round(angalfa*180)/(Math.PI);
        document.getElementById("AanguloAlfa").value = ang_convertido;
        var angbeta = Math.round(Anguloγ-ang_convertido);
        document.getElementById("AnguloBeta").value = angbeta;
        var Area = Math.round((Ladoa*catetoB)/2);
        document.getElementById("Area").value = Area;
        var PerimetroT = Math.round(parseInt(catetoB) + (catetoC + catetoA)) ;
        document.getElementById("Perimetro").value = PerimetroT;

    }
    else if(Ladoc=='') {
        var catetoA = Math.round(parseInt(Ladoa));
        var catetoB = Math.round(parseInt(Ladob));
        var catetoC = Math.round(Math.sqrt((Ladoa * Ladoa) + (Ladob * Ladob)));
        document.getElementById("LadoC").value = catetoC;
        var angalfa = Math.round(Math.atan(Ladoa / Ladob));
        var ang_convertido = Math.round(angalfa * 180) / (Math.PI);
        document.getElementById("AnguloAlfa").value = ang_convertido;
        var angbeta = Math.round(Anguloγ - ang_convertido);
        document.getElementById("AnguloBeta").value = angbeta;
        var Area = Math.round(Ladob*Ladoa/2);
        document.getElementById("Area").value = Area;
        var PerimetroT = Math.round(catetoB) + (catetoC + catetoA);
        document.getElementById("Perimetro").value = PerimetroT;

    }
    if (Ladoa=='' && Ladob=='' && Ladoc==''){
        alert("Por Favor, ingrese correctamente los datos");
        Reiniciar();
        Limpiar();

    }
    if (Ladoa== ' ' && Ladob=='' && Ladoc=='' && Anguloα=='' && Anguloβ==''){
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

    if ((isNaN(Ladoa))== true){
        alert("Por Favor, ingrese correctamente los datos");
        Reiniciar();
        Limpiar();
    }
    if ((isNaN(Ladob))== true){
        alert("Por Favor, ingrese correctamente los datos");
        Reiniciar();
        Limpiar();
    }

    if ((isNaN(Ladoc))== true){
        alert("Por Favor, ingrese correctamente los datos");
        Reiniciar();
        Limpiar();
    }
    if ((isNaN(Anguloα))== true){
        alert("Por Favor, ingrese correctamente los datos");
        Reiniciar();
        Limpiar();
    }
    if ((isNaN(Anguloβ))== true){
        alert("Por Favor, ingrese correctamente los datos");
        Reiniciar();
        Limpiar();
    }

    if (contador > 1){
        alert("Si desea volver a calcular, presione REINICIAR");
    }


}


/**
 * La funcion aqui abajo realiza el dibujo del triangulo correspondiente a los datos ingresados/calculados.
 * El dibujo se hace sobre un canvas
 * @method dibujar
 */

function dibujar() {
    animar();
}


/**
 * La funcion aqui abajo realiza la animacion del triangulo correspondiente a los datos ingresados/calculados.
 * El dibujo animado se hace sobre un canvas
 * @method dibujar
 */
var chequeoB=0;
var chequeoA=0;
var mov=0;
var mov1=0;

function animar() {

    if (contador == 1) {

        var canvas = document.getElementById("myCanvas");
        var context = canvas.getContext("2d");
        var base = document.getElementById("LadoB").value;
        var altura = document.getElementById("LadoA").value;
        var flag = 1;

        var Xmedia = ((canvas.width / 2)-120);
        var Ymedia = ((canvas.height / 2)+40);

        var animacion = requestAnimationFrame(animar);

        context.beginPath();
        context.moveTo(Xmedia, Ymedia);
        mov = Xmedia + chequeoB;
        mov1 = Ymedia - chequeoA;

        if (chequeoB != base) {
            context.clearRect(0, 0, canvas.width, canvas.height);

            context.lineTo(mov, Ymedia);
            chequeoB += (1 / 8);
            console.log(chequeoB);

        }

        if (chequeoA != altura && chequeoB == base) {
            context.moveTo(mov, Ymedia);
            context.lineTo(mov, mov1);
            chequeoA += 1 / 8;
            console.log(chequeoA);
        }

        if (chequeoA == altura && chequeoB == base) {
            context.moveTo(mov, mov1);
            context.lineTo(Xmedia, Ymedia);
            chequeoA += 1 / 8;
            cancelAnimationFrame(animacion);
        }

        //Contorno
        context.lineWidth = 2;
        context.strokeStyle = '#000000';
        context.stroke();

    }
}


/**
 * La siguiente funcion lo que hace es reiniciar todos los inputs a su valor original, con el objetivo de que el usuario
 * realice nuevamente un calculo.
 * @method Reiniciar
 */

function Reiniciar() {


    document.getElementById("AnguloBeta").value = null;
    document.getElementById("AnguloAlfa").value = null;
    document.getElementById("LadoA").value = null;
    document.getElementById("LadoC").value = null;
    document.getElementById("LadoB").value = null;
    document.getElementById("Area").value = null;
    document.getElementById("Perimetro").value = null;

    contador=0;


    chequeoB=0;
    chequeoA=0;
    mov=0;
}

/**
 * La siguiente funcion lo que hace es limpiar el canvas, con el objetivo de que cuando el usuario
 * realice nuevamente un calculo, se dibuje el triangulo correspondiente si tener al anterior por debajo.
 * @method Limpiar
 */
function Limpiar() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

}

