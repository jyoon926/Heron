window.addEventListener('mousemove', cursor);
var $win = $(window);
var _cursor = document.getElementById('cursor');
var _cursorRing = document.getElementById('cursorRing');

function everyTick() {
    cursor();
    setTimeout(arguments.callee, 0);
}

function getX(event) //left position
{
    if(!event.pageX)
    {
        return event.clientX;
    }
    else
    {
        return event.pageX - (document.body.scrollLeft || document.documentElement.scrollLeft);
    }
}

function getY(event) //top position
{
    if(event.pageY)
    {
        return event.pageY - (document.body.scrollTop || document.documentElement.scrollTop);
    }
    else
    {
        return event.clientY;
    }
}
function getScroll()
{
}

var offset = 40;


function cursor() {
    _cursor.style.top = getY(event) + "px";
    _cursor.style.left = getX(event) + "px";
    _cursorRing.style.top = getY(event) + "px";
    _cursorRing.style.left = getX(event) + "px";
}

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

window.onload = function load() {
}

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