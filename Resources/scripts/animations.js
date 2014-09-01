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
            left: "+50%"
        }, 500, function() {
         // Animation complete.
        }); 
    }, 20); 
}


function showPageThree() {
    setTimeout(function(){
        $( "#fullPageDiv" ).animate({
            left: "+100%"
        }, 500, function() {
         // Animation complete.
        }); 
    }, 20); 
}


function centerFromPageThree() {
    setTimeout(function(){
        $( "#fullPageDiv" ).animate({
            left: "-100%"
        }, 500, function() {
         // Animation complete.
        }); 
    }, 20); 
}

