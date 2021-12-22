// Form Contact.js

const forms = document.getElementById("forms")

const email = document.getElementById("email")

const errorElement = document.getElementById("error")

form.addEventListener('submit', (e) => {
	(
		let messages = []
	if (fname.value === '' || fname.value == null) {
		messages.push("First Name is required")
	}

	if (messages.length > 0) {
		errorElement.innerText = messages.join(", ")
		e.preventDefault()
	}
)}