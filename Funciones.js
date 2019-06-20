

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

}

function Reiniciar() {
    document.getElementById("Valor1B").value = null;
    var angalfa = " ";
    document.getElementById("Valor1A").value = null;
    var catetoA = " ";
    document.getElementById("Valor1a").value = null;
    var catetoC = " ";
    document.getElementById("Valor1c").value = null;
    var catetoB = " ";
    document.getElementById("Valor1b").value = null;
    var Area = " ";
    document.getElementById("Area").value = null;
    var PerimetroT = " " ;
    document.getElementById("Perimetro").value = null;
}

