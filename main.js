
/*This method checks to see if, in this order:

	1. Any fields are empty.
	2. If not empty, are the first and last name fields between 3 and 50 characters?
	3. Lastly, is the zip code a number?
	
	Write any error messages. If there is no error, then there should be no error messages.
*/ 

function validateForm(){

	var errorMessages = "";
	var errorDiv = document.getElementById("errors");
	var elementFirstNameValue = document.getElementById("firstName").value;
	var elementLastNameValue = document.getElementById("lastName").value;
	var elementZipCodeValue = document.getElementById("zipcode").value;
		
	//Check to see if first and last name fields are empty. 
	if( form.isEmptyFields(elementFirstNameValue, elementLastNameValue, elementZipCodeValue) ){
		errorMessages += "Error: One or more fields are emptied. <br />";
	} else {
	
	//Check to see if then the length is within range.
		if( !(form.validateLength(elementFirstNameValue, elementLastNameValue)) ){
			errorMessages += "Error: First and/or Last name are not between 3 to 50 characters <br />";
		}
	}
	
	//Check to see if zipcode is a number
	if( !( form.isZipCodeNumber(elementZipCodeValue) ) ){
		errorMessages += "Error: Zipcode is not a number.";
	}
	
	//print out to the empty div any errors
	if(errorMessages != ""){
		errorDiv.innerHTML = errorMessages;
	} else {
		//Clear the error message if any from previous submits.
		errorDiv.innerHTML = "";
	}
	
	return false;
}
