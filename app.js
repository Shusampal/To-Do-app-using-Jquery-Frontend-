$('#ul').click(function(e){
    console.dir(e.target);
    $(e.target).toggleClass('lineThrough');

})


$('#ul').on('click','i',function (e) {
    $(e.target).parent().remove();

})



$('span').click(function(e){
    $('#input').toggleClass('none');
})


$('#input').keydown(function(e){
    if(e.key==='Enter' && $(e.target).val() !=='')
    {
        var li = `<li><i class="fas fa-trash-restore"></i>${$(e.target).val()}</li>`;
        $('#ul').append(li);

        $(e.target).val('');

    }
})
