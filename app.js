let nav = document.querySelector("#nav");
// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
// const mainbottom = document.querySelector("#main").offset().top();

// on scroll,
window.addEventListener("scroll", function () {
	// we round here to reduce a little workload
	// stop = Math.round(window.scrollTop());
	if (window.pageYOffset > 80) {
		nav.classList.add("past-main");
		nav.classList.add("transution-effect");
		// nav.classList.add("fixed-top");
	} else {
		nav.classList.remove("past-main");
		// nav.classList.remove("fixed-top");
	}
});

const hamburger = document.querySelector(".navbar-toggler");
const navmenu = document.querySelector("#navbarSupportedContent");

hamburger.addEventListener("click", () => {
	navmenu.classList.toggle("show");
});

document.querySelectorAll(".nav-link").forEach((n) =>
	n.addEventListener("click", () => {
		navmenu.classList.remove("show");
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
