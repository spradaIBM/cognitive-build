$(function() {

    /*---------------------------------------*/
    /*  PAGE LOADER
    /*---------------------------------------*/
    $(window).load(function(){
        $('#page-loader').fadeOut('slow');
    });

    /*---------------------------------------*/
    /*  OWL CAROUSEL
    /*---------------------------------------*/
    $('#carousel-who-we-are').owlCarousel({
        autoPlay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });
    
});