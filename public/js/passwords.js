function ShowHide(eye) {
    if (eye.className === "bi bi-eye-fill form-icon"){
        eye.className = "bi bi-eye-slash-fill form-icon"
        eye.parentElement.getElementsByTagName("input")[0].type = "password";
    } else {
        eye.className = "bi bi-eye-fill form-icon"
        eye.parentElement.getElementsByTagName("input")[0].type = "text";
    }
}

function validatePassword() {
    document.getElementById("repeatPassword").setCustomValidity(document.getElementById("repeatPassword").value !== document.getElementById("newPassword").value ? "Las contraseñas no coinciden" : "")
}