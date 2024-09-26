$(document).ready(function(){
    $('header button').click(function(){
        $('#form-adicionar').slideDown();
    });

    $('#cancelar').click(function(){
        $('#form-adicionar').slideUp();
    });

    $('#form-adicionar form').on('submit',function(e){
        e.preventDefault();
        const novaTarefa = $('#new-task');
        const novoDiv = $('<div class="tarefas"></div>');
        const novoItem = $('<li></li>');

        const checkbox = $('<input type="checkbox">');
        checkbox.appendTo(novoItem);
        const label = $(`<label>${novaTarefa.val()}</label>`);
        label.appendTo(novoItem);
        $(novoItem).appendTo(novoDiv);

        $(novoDiv).appendTo('ol');

        checkbox.on('change', function(){
            if(this.checked){
                label.addClass('concluido');
            }
            else{
                label.removeClass('concluido');
            }
        })

    });

    
})

