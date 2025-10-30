function enterBtn() {
    let age = Number(document.getElementById("age").value);
    let vip = document.getElementById("vip").checked;

    if (age >= 18 || vip === true) {
        alert("Access granted");
    } else {
        alert("Access Denied");
    }
    if (vip === true) {
        alert("Welcome in my best VIP customer :)");
    }
}
