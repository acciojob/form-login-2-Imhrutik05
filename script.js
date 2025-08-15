//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function(event) {
	event.preventDefault();

	const firstName = document.getElementById('fname').value;
	const lastName = document.getElementById('lname').value;
	const phoneNumber = document.getElementById('phone').value;
	const emailID = document.getElementById('email').value;

	alert(
		`First Name: ${firstName} ` +
		`Last Name: ${lastName} ` + 
		`Phone Number: ${phoneNumber} ` +
		`Email ID: ${emailID}`
	);
});