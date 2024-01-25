let eyeIcon = document.getElementById("eyeIcon");
let password = document.getElementById("password");

eyeIcon.onclick = () => {
    if (password.type == "password" ) {
        password.type = "text";
        eyeIcon.src = "/eye-icons/eye-close.png"
    } else {
        password.type = "password";
        eyeIcon.src = "/eye-icons/eye-open.png"
    }
}