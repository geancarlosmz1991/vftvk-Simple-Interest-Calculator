function compute()
{
    //Obtenemos los valores ingresados por el usuario
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //calculamos el interes
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    
    //mostrar resultado en pantalla
    document.getElementById("result").innerHTML = "If you deposit \<mark\>" + principal + 
    "\<\\mark\>\<br\>at an interes rate of \<mark\>" + rate + "%\<\\mark\>\<br\>You will receive an amount of \<mark\>" + amount +
    "\<\\mark\>\<br\>in the year \<mark\>" + year + "\<\\mark\>\<br\>"; 

}

function updateRate()
{
    //obtenemos el valor del meter y lo mostramos en el span
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function validar(){
    //obtener el valor principal cuando pierde el foco
    var principal = document.getElementById("principal").value;

    //si el valor de principal es menos o igual a cero mostar mensaje
    if(parseFloat(principal) <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}

        