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
        var angbeta = (Anguloγ-Anguloα);
        angbeta = Math.round(angbeta*100)/100;
        document.getElementById("AnguloBeta").value = angbeta;
        var ang_convertido = (Anguloα*Math.PI)/(180);
        var catetoC = (Ladoa)/(Math.sin(ang_convertido));
        catetoC = Math.round(catetoC*100)/100;
        document.getElementById("LadoC").value = catetoC;
        var catetoB = (Ladoa)/(Math.tan(ang_convertido));
        catetoB = Math.round(catetoB*100)/100;
        document.getElementById("LadoB").value = catetoB;
        var Area = ((catetoB*Ladoa)/2);
        Area = Math.round(Area*100)/100;
        document.getElementById("Area").value = Area;
        var PerimetroT = parseFloat(Ladoa) + parseFloat(catetoB) + parseFloat(catetoC);
        PerimetroT = Math.round(PerimetroT*100)/100;
        document.getElementById("Perimetro").value = PerimetroT;

    }
    else if(Anguloβ == '' && Ladoa=='' && Ladoc==''){
        var angbeta = (Anguloγ-Anguloα);
        angbeta = Math.round(angbeta*100)/100;
        document.getElementById("AnguloBeta").value = angbeta;
        var ang_convertido = (Anguloα*Math.PI)/(180); //angulo alfa convertido a radianes
        var catetoC = Ladob/(Math.cos(ang_convertido));
        catetoC = Math.round(catetoC*100)/100;
        document.getElementById("LadoC").value = catetoC;
        var catetoA = (Ladob)*Math.tan(ang_convertido);
        catetoA = Math.round(catetoA*100)/100;
        document.getElementById("LadoA").value = catetoA;
        var Area = (Ladob*catetoA)/2;
        Area = Math.round(Area*100)/100;
        document.getElementById("Area").value = Area;
        var PerimetroT = parseFloat(Ladob) + parseFloat(catetoA) + parseFloat(catetoC) ;
        PerimetroT = Math.round(PerimetroT*100)/100;
        document.getElementById("Perimetro").value = PerimetroT;
    }
    else if(Anguloβ == '' && Ladoa=='' && Ladob==''){
        var angbeta = (Anguloγ-Anguloα);
        angbeta = Math.round(angbeta*100)/100;
        document.getElementById("AnguloBeta").value = angbeta;
        var ang_convertido = (Anguloα*Math.PI)/(180); //angulo alfa convertido a radianes
        var catetoB = (Ladoc)*(Math.cos(ang_convertido));
        catetoB = Math.round(catetoB*100)/100;
        document.getElementById("LadoB").value = catetoB;
        var catetoA = (Ladoc)*Math.sin(ang_convertido);
        catetoA = Math.round(catetoA*100)/100;
        document.getElementById("LadoA").value = catetoA;
        var Area =(catetoB*catetoA)/2;
        Area = Math.round(Area*100)/100;
        document.getElementById("Area").value = Area;
        var PerimetroT = parseFloat(Ladoc) + parseFloat(catetoA) + parseFloat(catetoB);
        PerimetroT = Math.round(PerimetroT*100)/100;
        document.getElementById("Perimetro").value = PerimetroT;
    }
    else if (Anguloα == '' && Ladob=='' && Ladoc==''){
        var angalfa = (Anguloγ-Anguloβ);
        angalfa = Math.round(angalfa*100)/100;
        document.getElementById("AnguloAlfa").value = angalfa;
        var ang_convertido = (Anguloβ*Math.PI)/(180); //angulo alfa convertido a radianes
        var catetoB = (Ladoa)*(Math.tan(ang_convertido));
        catetoB = Math.round(catetoB*100)/100;
        document.getElementById("LadoB").value = catetoB;
        var catetoC = (Ladoa)/Math.cos(ang_convertido);
        catetoC = Math.round(catetoC*100)/100;
        document.getElementById("LadoC").value = catetoC;
        var Area =(catetoB*Ladoa)/2;
        Area = Math.round(Area*100)/100;
        document.getElementById("Area").value = Area;
        var PerimetroT = parseFloat(Ladoa) + parseFloat(catetoC) + parseFloat(catetoB);
        PerimetroT = Math.round(PerimetroT*100)/100;
        document.getElementById("Perimetro").value = PerimetroT;
    }
    else if (Anguloα == '' && Ladoa=='' && Ladoc==''){
        var angalfa = (Anguloγ-Anguloβ);
        angalfa = Math.round(angalfa*100)/100;
        document.getElementById("AnguloAlfa").value = angalfa;
        var ang_convertido = (Anguloβ*Math.PI)/(180); //angulo alfa convertido a radianes
        var catetoA = (Ladob)/(Math.tan(ang_convertido));
        catetoA = Math.round(catetoA*100)/100;
        document.getElementById("LadoA").value = catetoA;
        var catetoC = (Ladob)/Math.sin(ang_convertido);
        catetoC = Math.round(catetoC*100)/100;
        document.getElementById("LadoC").value = catetoC;
        var Area = (catetoA*Ladob)/2;
        Area = Math.round(Area*100)/100;
        document.getElementById("Area").value = Area;
        var PerimetroT = parseFloat(Ladob) + parseFloat(catetoC) + parseFloat(catetoA);
        PerimetroT = Math.round(PerimetroT*100)/100;
        document.getElementById("Perimetro").value = PerimetroT;
    }
    else if (Anguloα == '' && Ladoa=='' && Ladob==''){
        var angalfa = (Anguloγ-Anguloβ);
        angalfa = Math.round(angalfa*100)/100;
        document.getElementById("AnguloAlfa").value = angalfa;
        var ang_convertido = (Anguloβ*Math.PI)/(180); //angulo alfa convertido a radianes
        var catetoA = (Ladoc)*(Math.cos(ang_convertido));
        catetoA = Math.round(catetoA*100)/100;
        document.getElementById("LadoA").value = catetoA;
        var catetoB = (Ladoc)*Math.sin(ang_convertido);
        catetoB = Math.round(catetoB*100)/100;
        document.getElementById("LadoB").value = catetoB;
        var Area = (catetoB*catetoA)/2;
        Area = Math.round(Area*100)/100;
        document.getElementById("Area").value = Area;
        var PerimetroT =parseFloat(Ladoc) + parseFloat(catetoB) + parseFloat(catetoA);
        PerimetroT = Math.round(PerimetroT*100)/100;
        document.getElementById("Perimetro").value = PerimetroT;
    }
    else if(Ladoa==''){
        var catetoC = Math.round(parseInt(Ladoc));
        var catetoB = Math.round(parseInt(Ladob));
        var catetoA = Math.sqrt((Ladoc * Ladoc) - (Ladob * Ladob));
        catetoA = Math.round(catetoA*100)/100;
        document.getElementById("LadoA").value = catetoA;
        var angalfa = Math.atan(catetoA / Ladob);
        var ang_convertido = (angalfa * 180)/ (Math.PI);
        ang_convertido = Math.round(ang_convertido*100)/100;
        document.getElementById("AnguloAlfa").value =  ang_convertido;
        var angbeta = (180 - Anguloγ) - ang_convertido;
        angbeta = Math.round(angbeta*100)/100;
        document.getElementById("AnguloBeta").value = angbeta;
        var Area = (Ladob*catetoA)/2;
        Area = Math.round(Area*100)/100;
        document.getElementById("Area").value = Area;
        var PerimetroT = parseFloat(Ladoc) + parseFloat(Ladob) + parseFloat(catetoA);
        PerimetroT = Math.round(PerimetroT*100)/100;
        document.getElementById("Perimetro").value = PerimetroT;

    }
    else if(Ladob==''){
        var catetoA = Math.round(parseInt(Ladoa));
        var catetoC = Math.round(parseInt(Ladoc));
        var catetoB = Math.sqrt((Ladoc * Ladoc) - (Ladoa * Ladoa));
        catetoB = Math.round(catetoB*100)/100;
        document.getElementById("LadoB").value = catetoB;
        var angalfa = Math.atan(Ladoa / catetoB);
        var ang_convertido = (angalfa * 180)/ (Math.PI);
        ang_convertido = Math.round(ang_convertido*100)/100;
        document.getElementById("AnguloAlfa").value =  ang_convertido;
        var angbeta = (180 - Anguloγ) - ang_convertido;
        angbeta = Math.round(angbeta*100)/100;
        document.getElementById("AnguloBeta").value = angbeta;
        var Area = (catetoB*Ladoa)/2;
        Area = Math.round(Area*100)/100;
        document.getElementById("Area").value = Area;
        var PerimetroT = parseFloat(Ladoa) + parseFloat(Ladoc) + parseFloat(catetoB);
        PerimetroT = Math.round(PerimetroT*100)/100;
        document.getElementById("Perimetro").value = PerimetroT;


    }
    else if(Ladoc=='') {
        var catetoA = Math.round(parseInt(Ladoa));
        var catetoB = Math.round(parseInt(Ladob));
        var catetoC = Math.sqrt((Ladoa * Ladoa) + (Ladob * Ladob));
        catetoC = Math.round(catetoC*100)/100;
        document.getElementById("LadoC").value = catetoC;
        var angalfa = Math.atan(Ladoa / Ladob);
        var ang_convertido = (angalfa * 180)/ (Math.PI);
        ang_convertido = Math.round(ang_convertido*100)/100;
        document.getElementById("AnguloAlfa").value =  ang_convertido;
        var angbeta = (180 - Anguloγ) - ang_convertido;
        angbeta = Math.round(angbeta*100)/100;
        document.getElementById("AnguloBeta").value = angbeta;
        var Area = (Ladob*Ladoa)/2;
        Area = Math.round(Area*100)/100;
        document.getElementById("Area").value = Area;
        var PerimetroT = parseFloat(Ladoa) + parseFloat(Ladob) + parseFloat(catetoC);
        PerimetroT = Math.round(PerimetroT*100)/100;
        document.getElementById("Perimetro").value = PerimetroT;

    }
    if (Ladoa=='' && Ladob=='' && Ladoc==''){
        alert("Por Favor, ingrese correctamente los datos");
        Reiniciar();
        Limpiar();
        return false;

    }
    if (Ladoa== ' ' && Ladob=='' && Ladoc=='' && Anguloα=='' && Anguloβ==''){
        alert("Por Favor, ingrese correctamente los datos");
        Reiniciar();
        Limpiar();
        return false;
    }
    if (Ladob=='' && Ladoc==''&& Anguloα=='' && Anguloβ==''){
        alert("Por Favor, ingrese correctamente los datos");
        Reiniciar();
        Limpiar();
        return false;
    }
    if (Ladoa=='' && Ladob==''&& Anguloα=='' && Anguloβ==''){
        alert("Por Favor, ingrese correctamente los datos");
        Reiniciar();
        Limpiar();
        return false;
    }
    if (Ladoa=='' && Ladoc==''&& Anguloα=='' && Anguloβ==''){
        alert("Por Favor, ingrese correctamente los datos");
        Reiniciar();
        Limpiar();
        return false;
    }

    if ((isNaN(Ladoa) && Ladoa=='')== true){
        alert("Por Favor, ingrese correctamente los datos");
        Reiniciar();
        Limpiar();
        return false;
    }
    if ((isNaN(Ladob))== true){
        alert("Por Favor, ingrese correctamente los datos");
        Reiniciar();
        Limpiar();
        return false;
    }

    if ((isNaN(Ladoc))== true){
        alert("Por Favor, ingrese correctamente los datos");
        Reiniciar();
        Limpiar();
        return false;
    }
    if ((isNaN(Anguloα))== true){
        alert("Por Favor, ingrese correctamente los datos");
        Reiniciar();
        Limpiar();
        return false;
    }
    if ((isNaN(Anguloβ))== true){
        alert("Por Favor, ingrese correctamente los datos");
        Reiniciar();
        Limpiar();
        return false;
    }

    if ((Ladoa>Ladoc)&& Ladoc!=''){
        alert("Por Favor, ingrese correctamente los datos");
        Reiniciar();
        Limpiar();
        return false;
    }
    if (Ladob>Ladoc && Ladoc!=''){
        alert("Por Favor, ingrese correctamente los datos");
        Reiniciar();
        Limpiar();
        return false;
    }

    if (Anguloα>90 || Anguloβ>90){
        alert("Por Favor, ingrese correctamente los angulos");
        Reiniciar();
        Limpiar();
        return false;
    }
    if (contador > 1){
        alert("Si desea volver a calcular, presione REINICIAR");
        return  false;
    }


}


/**
 * La funcion aqui abajo realiza el llamado a la funcion animar, la cual dibuja el triangulo animado.
 * @method dibujar
 */

function dibujar() {
    animar();
}


/**
 * La funcion aqui abajo realiza la animacion del triangulo correspondiente a los datos ingresados/calculados.
 * El dibujo animado se hace sobre un canvas
 * @method animar
 */
var chequeoB=0;
var chequeoA=0;
var mov=0;
var mov1=0;

function animar() {

    if (contador == 1) {

        var canvas = document.getElementById("myCanvas");
        var context = canvas.getContext("2d");
        var base = parseInt(document.getElementById("LadoB").value);
        var altura = parseInt(document.getElementById("LadoA").value);
        var flag = 1;

        var Xmedia = ((canvas.width / 2) - 120);
        var Ymedia = ((canvas.height / 2) + 50);

        var animacion = requestAnimationFrame(animar);

        context.beginPath();
        context.moveTo(Xmedia, Ymedia);
        mov = Xmedia + chequeoB;
        mov1 = Ymedia - chequeoA;

        if (chequeoB != base) {
            context.clearRect(0, 0, canvas.width, canvas.height);

            context.lineTo(mov, Ymedia);
            chequeoB += (1 / 4);

        }

        if (chequeoA != altura && chequeoB == base) {
            context.moveTo(mov, Ymedia);
            context.lineTo(mov, mov1);
            chequeoA += 1 / 4;
        }

        if (chequeoA == altura && chequeoB == base) {
            context.moveTo(mov, mov1);
            context.lineTo(Xmedia, Ymedia);
            chequeoA += 1 / 4;
            cancelAnimationFrame(animacion);
        }

        //Contorno
        context.lineWidth = 2;
        context.strokeStyle = '#000000';
        context.lineCap = "round";
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