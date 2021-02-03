$(function () {


    
    $(document).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('#return').stop().fadeIn()
        } else {
            $("#return").stop().fadeOut()
        }
    })

    $('#return').on('click', function () {
        // $("html").scrollTop(100)

        $("html").scrollTop(100)
    })
})