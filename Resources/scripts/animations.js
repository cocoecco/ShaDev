    function enterFromLeft() {
        setTimeout(function(){
            $( "#fullPageDiv" ).animate({
                left: "-200%"
            }, 500, function() {
             // Animation complete.
            }); 
        }, 1000);
        

    }   