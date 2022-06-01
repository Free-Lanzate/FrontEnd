export function showHide(eye) {
    if (eye.className === "bi bi-eye-fill form-icon r-16"){
        eye.className = "bi bi-eye-slash-fill form-icon r-16"
        eye.parentElement.getElementsByTagName("input")[0].type = "password";
    } else if(eye.className === "bi bi-eye-fill form-icon r-30"){
        eye.className = "bi bi-eye-slash-fill form-icon r-30"
        eye.parentElement.getElementsByTagName("input")[0].type = "password";
    }
    else if(eye.className === "bi bi-eye-slash-fill form-icon r-30") {
        eye.className = "bi bi-eye-fill form-icon r-30"
        eye.parentElement.getElementsByTagName("input")[0].type = "text";
    }else {
        eye.className = "bi bi-eye-fill form-icon r-16"
        eye.parentElement.getElementsByTagName("input")[0].type = "text";
    }
}