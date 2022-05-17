class FormValidator {
	constructor(form, fields) {
		this.form = form;
		this.fields = fields;
	}

	initialize() {
		this.validateOnSubmit();
		this.validateOnEntry();
	}

	validateOnSubmit() {
		let self = this;

		this.form.addEventListener("submit", (e) => {
			e.preventDefault();
			self.fields.forEach((field) => {
				const input = document.querySelector(`#${field}`);
				self.validateFields(input);
			});
		});
	}

	validateOnEntry() {
		let self = this;
		this.fields.forEach((field) => {
			const input = document.querySelector(`#${field}`);

			input.addEventListener("input", (event) => {
				self.validateFields(input);
			});
		});
	}

	validateFields(field) {
		// check for a valid email address
		if (field.type === "email") {
			const re = /\S+@\S+\.\S+/;
			if (re.test(field.value)) {
				if (field.value === "group42@capstone.project") {
					this.setStatus(field, null, "success");
					alert(`recovery link has been sent to ${field.value}`);
				} else {
					this.setStatus(field, "email does not exist", "error");
				}
			} else {
				this.setStatus(field, "Please enter valid email address", "error");
			}
		}
	}

	setStatus(field, message, status) {
		const successIcon = field.parentElement.querySelector(".icon-success");
		const errorIcon = field.parentElement.querySelector(".icon-error");
		const errorMessage = field.parentElement.querySelector(".error-message");

		if (status === "success") {
			if (errorIcon) {
				errorIcon.classList.add("hidden");
			}
			if (errorMessage) {
				errorMessage.innerText = "";
			}
			successIcon.classList.remove("hidden");
			field.classList.remove("input-error");
		}

		if (status === "error") {
			if (successIcon) {
				successIcon.classList.add("hidden");
			}
			field.parentElement.querySelector(".error-message").innerText = message;
			errorIcon.classList.remove("hidden");
			field.classList.add("input-error");
		}
	}
}

const form = document.querySelector(".form");
const fields = ["email", "password"];

const validator = new FormValidator(form, fields);
validator.initialize();
