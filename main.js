$(document).ready(function() {
    $('form :submit').click(function(e) {
        e.preventDefault();
        var linha = $("input[id='nomeTarefa']").val();
        var li = '<li>'+ linha +'</li>';
        $('#text').append(li);
        $('#nomeTarefa').each(function(){
            $(this).val('');
        });
    });
    $('form').on('click', 'li',function() {
        $(this).addClass('selected').css('text-decoration', 'line-through');
    });     
        
    $('#limpar, nomeTarefa').click(function() {
        $('ol').empty();
});

});
