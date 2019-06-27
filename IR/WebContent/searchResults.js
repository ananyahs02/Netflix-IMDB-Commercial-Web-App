function getParameterByName(target) {
   
    let url = window.location.href;
 
    target = target.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + target + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';    
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function handleResult(resultData) {

    console.log("handleResult: populating result table from resultData");
    let queryTable = jQuery("#results_table");
    console.log(resultData);  
  for (let i = 0; i < resultData.length; i++) {
       let rowHTML = "";
       rowHTML += "<tr>";
       rowHTML += "<th>" +

       '<a href="' + resultData[i]+ '">'
       '</a>' +
       "</th>";
       rowHTML += "</tr>";
            
       // Append the row created to the table body, which will refresh the page
       queryTable.append(rowHTML);
       
  } 
}
  
  $(document).ready(function(){
  let query= getParameterByName('query');
  console.log(query);

  jQuery.ajax({
     
      method: "GET",
      url: "127.0.0.1:4996/members/" + query, 
      success: function(resultData){
      	handleResult(resultData) ;    
      },
      error:function(request, status, error){
    	 
    	  var val = request.responseText;
          console.log("error"+val);
      }
      
  });  
   
  });
   
