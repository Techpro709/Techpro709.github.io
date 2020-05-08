function check() {
    var username = document.getElementById("userF");
    var usertext = username.value;
    var password = document.getElementById("passF");
    var passtext = password.value;
    var id = document.getElementById("idF");
    var idtext = id.value;
    // vars for value
    if (((usertext == "hi")&&(passtext == "hello")||(idtext == "7"))) {
        document.write('admin');
        document.write('id verifed');
        location.assign('https://www.google.com');
    }

}