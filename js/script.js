window.addEventListener('mousemove', cursor);
var $win = $(window);
var _cursor = document.getElementById('cursor');
var _cursorFollower = document.getElementById('cursorFollower');

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

var offset = 200;


function cursor() {
    _cursor.style.top = getY(event) - 16 + "px";
	_cursor.style.left = getX(event) - 16 + "px";
    _cursorFollower.style.top = getY(event) - offset + "px";
    _cursorFollower.style.left = getX(event) - offset + "px";
}

function hover() {
    _cursorFollower.style.transform = "scale(2)";
}

function hoverOut() {
    _cursorFollower.style.transform = "scale(1)";
}

/**$win.on('scroll', function(){
	$logo.css('transform', 'rotate(' + $win.scrollTop()/10 + 'deg)');
});**/

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
    document.getElementById('preload').style.transform = "scaleY(0)";
    show('wrap', true);
});