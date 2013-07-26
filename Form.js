
/* The Form Object
	Make methods to:
		1. Guard against empty fields.
		
		2. Check length of names field are between 3 and 50 characters.
		
		3. Zip code is only numbers
*/	
var form = {

	//This method checks the length of the firstNameLabel and lastNameLabel.
	//Length is between 3 and 50 characters and returns true. Else returns false.
	validateLength : function(){

		var lengthOfFirstName;
		var lengthOfLastName;
		
		lengthOfFirstName = document.getElementById("firstName").value.length;
		lengthOfLastName = document.getElementById("lastName").value.length;
		
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
	
	//This method checks empty fields in firstNameLabel, lastNameLabel, and zipcodeLabel.
	//Any fields empty, return false.
	isEmptyFields : function(){
		var firstName = document.getElementById("firstName").value;
		var lastName = document.getElementById("lastName").value;
		var zipcode = document.getElementById("zipcode").value;
		
		if(firstName == ""){
			return true;
		} 
		
		if(lastName == ""){
			return true;
		} 

		if(zipcode == ""){
			return true;
		} 
		
		//The fields are not empty. Return false.
		return false;
		
	},
	
	//This method returns true if zip code are numbers, else return false.
	isZipCodeNumber : function(){
		var zipcode = document.getElementById("zipcode").value;
		
		if( !( isNaN( zipcode ) ) ){
			return true;
		} else {
			return false;
		}
	}
	
};