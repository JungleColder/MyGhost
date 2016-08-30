
<!--视差动画简单实例1-->

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
