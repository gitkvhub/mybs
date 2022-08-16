function gotowhatsapp() {
    
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var service = document.getElementById("service").value;

    var url = "https://wa.me/6281906417979?text=" 
    + "Name: " + name + "%0A"
    + "Phone: " + phone + "%0A"
    + "Email: " + email  + "%0A"
    + "Service: " + service; 

    window.open(url);
}
