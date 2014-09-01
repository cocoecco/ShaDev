function enterFromLeft() {
    setTimeout(function(){
        $( "#fullPageDiv" ).animate({
            left: "-200%"
        }, 500, function() {
         // Animation complete.
        }); 
    }, 1000);
}   

function showPageOne() {
    setTimeout(function(){
        $( "#fullPageDiv" ).animate({
            left: "-100%"
        }, 500, function() {
         // Animation complete.
        }); 
    }, 20); 
}

function centerFromPageOne() {
    setTimeout(function(){
        $( "#fullPageDiv" ).animate({
            left: "-=100%"
        }, 500, function() {
         // Animation complete.
        }); 
    }, 20); 
}


function showPageThree() {
    setTimeout(function(){
        $( "#fullPageDiv" ).animate({
            left: "-=100%"
        }, 500, function() {
         // Animation complete.
        }); 
    }, 20); 
}


function centerFromPageThree() {
    setTimeout(function(){
        $( "#fullPageDiv" ).animate({
            left: "+=100%"
        }, 500, function() {
         // Animation complete.
        }); 
    }, 20); 
}






function rotateAnimation(el,speed){
var elem = document.getElementById(el);
if(navigator.userAgent.match("Chrome")){
elem.style.WebkitTransform = "rotate("+degrees+"deg)";
} else if(navigator.userAgent.match("Firefox")){
elem.style.MozTransform = "rotate("+degrees+"deg)";
} else if(navigator.userAgent.match("MSIE")){
elem.style.msTransform = "rotate("+degrees+"deg)";
} else if(navigator.userAgent.match("Opera")){
elem.style.OTransform = "rotate("+degrees+"deg)";
} else {
elem.style.transform = "rotate("+degrees+"deg)";
}
looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
degrees++;
if(degrees > 359){
degrees = 1;
}
document.getElementById("status").innerHTML = "rotate("+degrees+"deg)";
}











