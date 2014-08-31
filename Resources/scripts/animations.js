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
            left: "-90%"
        }, 500, function() {
         // Animation complete.
        }); 
    }, 20); 
}