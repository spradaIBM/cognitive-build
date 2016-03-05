$(function(){
    
    var ua = navigator.userAgent.toLowerCase(),
    isAndroid = ua.indexOf("android") > -1;
                
    // Only animate elements when using non-mobile devices    
    if (jQuery.browser.mobile === false && !isAndroid) 
    {
        /*---------------------------------------*/
        /*  BAR CHART
        /*---------------------------------------*/
        $('.bar-chart').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated fadeInRight delayp1').css('opacity', 1);}
        });
        
        
        /*---------------------------------------*/
        /*  CONTENT BOXES
        /*---------------------------------------*/
        $('.content-boxes').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated fadeInUp delayp1').css('opacity', 1);}
        });
        
        
        /*---------------------------------------*/
        /*  COUNTERS
        /*---------------------------------------*/
        $('.counter-item').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated fadeInUp delayp1').css('opacity', 1);}
        });
        
        
        /*---------------------------------------*/
        /*  FUNNY BOXES
        /*---------------------------------------*/
        $('.funny-boxes-text').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated fadeInUp delayp1').css('opacity', 1);}
        });

 
        /*---------------------------------------*/
        /*  TIMELINE
        /*---------------------------------------*/
        $('.timeline').find('.timeline-panel').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated fadeInLeft').css('opacity', 1);}
        });

        $('.timeline > .timeline-inverted > .timeline-panel').css('opacity', 0).one('inview', function(isInView){
            if (isInView) {$(this).addClass('animated fadeInRight').css('opacity', 1);}
        });
    }
});