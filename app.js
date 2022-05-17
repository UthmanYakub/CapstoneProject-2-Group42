const hamburger = document.querySelector(".navbar-toggler");
const navmenu = document.querySelector("#navbarSupportedContent");

hamburger.addEventListener("click", () => {
	navmenu.classList.toggle("show");
	navmenu.classList.toggle("nav--active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
	n.addEventListener("click", () => {
		navmenu.classList.remove("show");
		navmenu.classList.toggle("nav--active");
	})
);

const togglePassword = document.querySelector("#togglePassword");
const togglePasswordConfirmation = document.querySelector(
	"#togglePasswordconfirmation"
);
const password = document.querySelector(".password");
const passwordConfirmation = document.querySelector("#password_confirmation");

togglePassword.addEventListener("click", function () {
	// toggle the type attribute
	const type1 =
		password.getAttribute("type") === "password" ? "text" : "password";
	password.setAttribute("type", type1);

	// toggle the icon
	this.classList.toggle("bi-eye");
});

togglePasswordConfirmation.addEventListener("click", function () {
	// toggle the type attribute
	const type2 =
		passwordConfirmation.getAttribute("type") === "password"
			? "text"
			: "password";
	passwordConfirmation.setAttribute("type", type2);

	// toggle the icon
	this.classList.toggle("bi-eye");
});
