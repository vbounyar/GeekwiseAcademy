
/* The Form Class
	Make methods to:
		1. Guard against empty fields.
		
		2. Check length of names field are between 3 and 50 characters.
		
		3. Zip code is only numbers
*/	
var form = {

	//This method checks the length of the firstName and lastName elements.
	//Pass in the element's value.
	//Length is between 3 and 50 characters and returns true. Else returns false.
	validateLength : function(firstNameValue, lastNameValue){

		var lengthOfFirstName;
		var lengthOfLastName;
		
		lengthOfFirstName = firstNameValue.length;
		lengthOfLastName = lastNameValue.length;
		
		//check first name
		if(  !( (lengthOfFirstName > 3) && (lengthOfFirstName <50) ) ){
			return false;
		} 
		//check last name
		if( !( (lengthOfLastName > 3) && (lengthOfLastName <50) ) ){
			return false;
		} 
		
		//Means first and last name fields are within range. Return true.
		return true;
	},
	
	//This method checks empty fields. Element values are passed in.
	//Any fields empty, return false.
	isEmptyFields : function(pFirstNameValue, pLastNameValue, pZipCodeValue){
	
		var firstNameValue = pFirstNameValue;
		var lastNameValue = pLastNameValue;
		var zipcodeValue = pZipCodeValue;
		
		if(firstNameValue == ""){
			return true;
		} 
		
		if(lastNameValue == ""){
			return true;
		} 

		if(zipcodeValue == ""){
			
			return true;
		}  
		
		//The fields are not empty. Return false.
		return false;
		
	},
	
	//This method returns true if zip code are numbers, else return false.
	isZipCodeNumber : function(pZipCode){
		var zipcode = pZipCode;
		
		if( !( isNaN( zipcode ) ) ){
			return true;
		} else {
			return false;
		}
	}
	
};