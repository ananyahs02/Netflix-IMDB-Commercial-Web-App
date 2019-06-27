$(document).ready(function() {
    $("#btn").click(function(){
    	var query= $("#search").val();
    	console.log(query);
        var url="searchResults.html?query="+query;
        window.location.replace(url);
    }); 
});