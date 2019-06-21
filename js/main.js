$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('full_loaded');
    }, 2000);
    
    $('div.jumbotron').fadeIn(2500,function(){
        $('#lcont').fadeIn(function(){
            $('#ccont').fadeIn(function(){
                $('#rcont').fadeIn();
            });
        });
    });
    
});

