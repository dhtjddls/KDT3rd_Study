squre = $('.squre');
cnt = 0
squre.click(function() {
    if (cnt == 0) {
        squre.addClass('bg-yellow');
        cnt += 1
    }
    else if (cnt == 1) {
        squre.addClass('bg-red');
        squre.removeClass('bg-yellow');
        cnt += 1
    }
    else if (cnt == 2) {
        squre.addClass('bg-blue');
        squre.removeClass('bg-red');
        cnt += 1
    }
    else {
        cnt = 0
        squre.removeClass('bg-blue');
    }
});