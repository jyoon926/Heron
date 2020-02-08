function hover() {
    _cursorRing.style.width = "120px";
    _cursorRing.style.height = "120px";
    _cursorRing.style.margin = "-60px";
}

function hoverOut() {
    _cursorRing.style.width = "80px";
    _cursorRing.style.height = "80px";
    _cursorRing.style.margin = "-40px";
}
document.addEventListener("mousemove", e => {
    document.getElementById('cursorRing').style.top = e.pageY + "px";
    document.getElementById('cursorRing').style.left = e.pageX + "px";
    document.getElementById('cursor').style.top = e.pageY + "px";
    document.getElementById('cursor').style.left = e.pageX + "px";
})

function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    document.getElementById('preload').style.opacity = "0";
    document.getElementById('preloadImg').style.opacity = "0";
    show('wrap', true);
});

//Parallax
$win.on('scroll', function(){
	//$('#heroImg').css('transform', 'translateY(' + $win.scrollTop()/5 + 'px)');
});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}