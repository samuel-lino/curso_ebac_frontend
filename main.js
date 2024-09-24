let numA = document.querySelector("#numeroA");
let numB = document.querySelector("#numeroB");
let form = document.querySelector("#formulario");

function maiorQue(numeroB, numeroA){
    return numeroB > numeroA
}

form.addEventListener('submit', function(e){
    document.querySelector("#erro").style.display = "none";
    document.querySelector("#correto").style.display = "none";
    e.preventDefault();
    let n1 = parseInt(numB.value)
    let n2 = parseInt(numA.value)
    if(maiorQue(n1 , n2)){
        document.querySelector("#correto").style.display = "block";
    }
    else{
        document.querySelector("#erro").style.display = "block";
    }
    numA.value = '';
    numB.value = '';
})

