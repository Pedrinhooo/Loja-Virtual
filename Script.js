var cliqueA = window.document.getElementById("calcularA");
cliqueA.addEventListener('click', clicarA);

var saiuA = window.document.getElementById("calcularA");
saiuA.addEventListener('mouseout', sairA);

function sairA(){
    saiuA.innerHTML = "Calcular"
}
function clicarA(){
    cliqueA.innerHTML = "clicou";



    var restA = window.document.getElementById("resA");
   
    var valorQtdA = qtdA.options[qtdA.selectedIndex].value;
    var totalA = valorQtdA * 90.00;
  
    restA.innerHTML = totalA.toFixed(2).replace('.',','); 


}



var cliqueB = document.getElementById("calcularB");
cliqueB.addEventListener('click', clicarB);

function clicarB(){
    var restB = window.document.getElementById("resB");
    var valorQtdB = qtdB.options[qtdB.selectedIndex].value;
    var totalB = valorQtdB * 60.00;
    restB.innerHTML = totalB.toFixed(2).replace('.',','); 
}

var saiuB = window.document.getElementById("calcularB");
saiuB.addEventListener('mouseout', sairB);

function sairB(){
    saiuB.innerHTML = "Calcular"
}




var cliqueC = document.getElementById("calcularC");
cliqueC.addEventListener('click', clicarC);

function clicarC(){
    var restC = window.document.getElementById("resC");
    var valorQtdC = qtdC.options[qtdC.selectedIndex].text;
    var totalC = valorQtdC * 30.00; 

    restC.innerHTML = totalC.toFixed(2).replace('.',',');
}
var saiuC = window.document.getElementById("calcularC");
saiuC.addEventListener('mouseout', sairC);

function sairC(){
    saiuC.innerHTML = "Calcular"
}






