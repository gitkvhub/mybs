function gotowhatsapp() {
    
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var service = document.getElementById("service").value;
     var tfmethode = document.getElementById("tfmethode").value;

    var url = "mailto:kurvadigital.info@gmail.com?subject=Pesan%20" 
    + "Service: " + service + "&body="
    + "Name: " + name + "%20"
    + lastname + "%0A"
    + "Phone: " + phone + "%0A"
    + "Email: " + email  + "%0A"
    + "Service: " + service + "%0A"
    + "Pembayaran: " + tfmethode; 

    window.open(url);
}
