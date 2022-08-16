<script>
function gotowhatsapp() {
    
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var service = document.getElementById("service").value;

    var url = "https://wa.me/6281906417979?text=" 
    + "Name: " + name + "%3A%0"
    + "Phone: " + phone + "%3A%0"
    + "Email: " + email  + "%3A%0"
    + "Service: " + service; 

    window.open(url, '_blank').focus();
}
</script>
