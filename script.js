const showSignup = document.querySelector("#showSignup");
const showLogin = document.querySelector("#showLogin");

showSignup.addEventListener("click", () => {
  document.body.classList.add("show-signup");
});

showLogin.addEventListener("click", () => {
  document.body.classList.remove("show-signup");
});

document.querySelectorAll(".password-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const input = button.parentElement.querySelector("input");
    const icon = button.querySelector("i");

    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";

    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");

    button.setAttribute(
      "aria-label",
      isPassword ? "Hide password" : "Show password",
    );
  });
});

document.querySelector("#loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Login form submitted.");
});

document.querySelector("#signupForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const password = document.querySelector("#signupPassword").value;
  const confirmPassword = document.querySelector("#confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  alert("Account created successfully.");
});
