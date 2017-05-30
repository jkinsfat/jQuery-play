$("Document").ready(function() {
    var triggered = true;
    $(".toggleClassOn").click(function() {
        $('p:first-of-type').addClass('bigRed');
    })
    $(".toggleClassOff").click(function() {
        $('p:first-of-type').removeClass('bigRed');
    })
    $(".toggleSlide").click(function() {
        triggered = !triggered;
        $('.catBread').slideToggle();
        if (!triggered) {
            $('div:nth-of-type(2)').append("<h2> I AM THE PAW </h2>");
        } else {
            $('div:nth-of-type(2) h2').remove();
        }
    })
    $(".clickme").hover(function() {
        $('.nyahnyah').show();
    }, function() {
        $('.nyahnyah').hide();
    })
});
