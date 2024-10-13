document.addEventListener('DOMContentLoaded', function(){
    const buttons =document.querySelectorAll('.product-button');

    buttons.forEach(button=>{
        button.addEventListener('click', function(e){
            alert('Sobre o produto: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti esse molestiae quibusdam, corporis velit adipisci accusamus laborum, earum sed id praesentium eum sint ipsam dolorem nemo tempore repellat saepe cumque?')
        });
    })
});