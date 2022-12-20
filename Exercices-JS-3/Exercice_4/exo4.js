function valid() {
let valeur1 = document.getElementById('password').value;
let valeur2 = document.getElementById('confirmPassword').value;
let colorful;

if(valeur1 == valeur2){
    colorful = document.getElementById("confirmPassword").style.border = "10px solid green";
} else {
    colorful = document.getElementById("confirmPassword").style.border = "10px dotted red";
}
    return colorful;
}