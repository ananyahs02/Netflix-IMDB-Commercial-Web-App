/**
 * Handle the data returned by LoginServlet
 * @param resultDataString jsonObject
 */
function handleLoginResult(resultDataString) {
	
// Fuyao: not json array!, you should handle a json object! like line 12
	
// 	var jArray = resultObject.getJSONArray("data");
// 	resultDataJson = JSON.parse(jArray);
	console.log(resultDataString);
    resultDataJson = resultDataString;

    console.log("handle login response");
    
    console.log(resultDataJson["status"]);
    
    if (resultDataJson["status"] === "SUCCESS") {
	// you should jump to main page, which is not implemented now, not movie-list.html
	// currently, you can do leave this here.
        window.location.replace("dashboard.html");
    } else {
      
        console.log("show error message");
        console.log(resultDataJson["message"]);
        $("#login_error_message").text(resultDataJson["message"]);
    }
}

/**
 * Submit the form content with POST method
 * @param formSubmitEvent
 */
function submitLoginForm(formSubmitEvent) {
    console.log("submit admin login form");
    /**
     * When users click the submit button, the browser will not direct
     * users to the url defined in HTML form. Instead, it will call this
     * event handler when the event is triggered.
     */
    formSubmitEvent.preventDefault();

    $.post(
        "../api/adminLogin",
        // Serialize the login form to the data sent by POST request
        $("#log_form").serialize(),
        (resultDataString) => handleLoginResult(resultDataString)
    );
}

// Bind the submit action of the form to a handler function
$("#log_form").submit((event) => submitLoginForm(event));
