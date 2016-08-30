<!--视差动画简单实例2-->

var articleHeight =800;
var section1 = document.getElementById('section1'),
    section2 = document.getElementById('section2'),
    section3 = document.getElementById('section3');
window.addEventListener('scroll',scrollHandler);

function scrollHandler(e){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop > 0 && scrollTop < articleHeight){
        section1.classList.add('anim');
    }else if(scrollTop >= articleHeight && scrollTop < articleHeight*2){
        section2.classList.add('anim');
    }else if(scrollTop >= articleHeight*2 && scrollTop < articleHeight*3){
        section3.classList.add('anim');
    }
}

$(document).ready(function () {
    // Cache the Window object
    $window = $(window);

    $('section[data-type="background"]').each(function () {
        var $bgobj = $(this); // assigning the object

        $(window).scroll(function () {

            // Scroll the background at var speed
            // the yPos is a negative value because we're scrolling it UP!
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));

            // Put together our final background position
            var coords = '50% ' + yPos + 'px';

            // Move the background
            $bgobj.css({
                backgroundPosition: coords
        });
        }); // window scroll Ends
    });
});