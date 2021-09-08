$(document).ready(function () {
    $('.menubar').click(function () {
        $('.menulist').slideToggle(500)
    })
    function checkwidth() {
        var windowSize = $(window).width();
        if (windowSize >= 767) {
            $('.menulist').show()
        }
    }
    checkwidth();
    // Bind event listener
    $(window).resize(checkwidth);
})
$(document).ready(function () {
    $('.menulinks').click(function () {
        var windowSize = $(window).width();
        if (windowSize <= 767) {
            $('.menulist').slideToggle()
        }
    })
})