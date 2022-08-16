function gotowhatsapp() {
    
    var produk = document.getElementById("produk").value;
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var service = document.getElementById("service").value;
     var tfmethode = document.getElementById("tfmethode").value;

    var url = "https://wa.me/6281906417979?text=" 
    + "Pesanan Produk " + produk + "%0A"
    + "Name: " + name + "%20"
    + lastname + "%0A"
    + "Phone: " + phone + "%0A"
    + "Email: " + email  + "%0A"
    + "Service: " + service + "%0A"
    + "Pembayaran: " + tfmethode; 

    window.open(url);
}
