//SMS App
let charCount = 100;
$('#text-area').keyup(function () {
    $('#span').text(charCount - $(this).val().length);
});
    
