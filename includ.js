$(document).ready(function(){

    $( "#headerNavDropdownMenu" ).click(function() {
        $( this ).toggleClass( "active" );
        $( ".drop-menu" ).toggleClass( "show" );
    });

    $( "#headerNavDropdownFlag" ).click(function() {
        $( this ).toggleClass( "active" );
        $( ".drop-content-flag" ).toggleClass( "show" );
    });

    $( "#dropdownMobil" ).click(function() {
        $( this ).toggleClass( "active" );
        $( ".navbar" ).toggleClass( "show" );
    });

    $(window).on('scroll', function(){
        if ($(window).scrollTop()) {
            $('header').addClass('h-pos');
        }
        else {
            $('header').removeClass('h-pos');
        }
    })

});