var nama = prompt("Input your name");
document.getElementById("nama").innerText = nama;
 
function validateForm(){
    var name = document.forms["messege-form"]["fullname"].value;
    var email = document.forms["messege-form"]["email"].value;
    var phone = document.forms["messege-form"]["phone"].value;
    var messege = document.forms["messege-form"]["messege"].value;

    if (name == "" || email == "" || phone == "" || messege == "") {
        alert("Input tidak boleh kosong");
        return false;
    }

    document.getElementById("sender-name").innerText = name;
    document.getElementById("sender-email").innerText = email;
    document.getElementById("sender-phone").innerText = phone;
    document.getElementById("sender-messege").innerText = messege;
    return false;
}