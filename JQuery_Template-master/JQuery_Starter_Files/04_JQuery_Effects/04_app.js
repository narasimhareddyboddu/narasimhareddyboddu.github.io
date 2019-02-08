// Hide & Show
let hideCount = 0;
$('#btn-1').click(function () {
    if (hideCount %2 === 0){
        $(this).text('SHOW');
        $(#card-1).hide(1000);
        hideCount++;
    }
    else {
        $(this).text('HIDE');
        $(#card-1).show(1000);
        hideCount++;
    }
});

// Hide & Show => Toggle
$('#btn-2').click(function () {
    ($(this).text()=== 'HIDE')? $(this).text('SHOW'): $(this).text('HIDE');
    $('#card-2').toggle(1000);
});