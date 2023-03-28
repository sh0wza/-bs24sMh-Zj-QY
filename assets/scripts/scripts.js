function loadMore() {
    $('#more').show()
    $('.fb-comments-loadmore').hide().remove()
}

$('like').on('click', function() {
    if ($(this).hasClass('liked')) {
        $(this).parents('.fb-comments-wrapper, .fb-comments-reply-wrapper').find('likes').text(parseInt($(this).parents('.fb-comments-wrapper, .fb-comments-reply-wrapper').find('likes').text()) - 1)
        $(this).removeClass('liked')
        $(this).text('Curtir')
    } else {
        $(this).parents('.fb-comments-wrapper, .fb-comments-reply-wrapper').find('likes').text(parseInt($(this).parents('.fb-comments-wrapper, .fb-comments-reply-wrapper').find('likes').text()) + 1)
        $(this).addClass('liked')
        $(this).text('Descurtir')
    }
})

let num = 450;
let rateUp = 1.01;
let rateDown = 1.005;

function updateNumber() {
let random = Math.random();
if (random < 0.5) {
    num *= rateUp;
} else {
    num /= rateDown;
}
document.getElementById("num").textContent = num.toFixed(0);
}

setInterval(updateNumber, 2000);

function setReturningVisitorCookie() {
var d = new Date();
d.setTime(d.getTime() + 10000);
var expires = "expires=" + d.toUTCString();
document.cookie = "returningVisitor=yes;" + expires + ";path=/;max-age=31536000";
}
setTimeout(setReturningVisitorCookie, 10000);

const cookieValue = document.cookie.match('(^|;)\\s*' + 'returningVisitor' + '\\s*=\\s*([^;]+)');
if (cookieValue) {
    setTimeout(() => {
    document.getElementById("add-to-cart").style.display = "block";
     }, 0);
}