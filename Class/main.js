//welcome notifications
function notifyMe() {
    if (!("Notification" in window)) {
        alert("This browser does not support notifications");
    }
    else if (Notification.permission === "granted") {
        notify()
    }
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                notify()
            }
        });

    }
}


function notify() {


    var notification = new Notification("Class Says", {
        icon: 'ZLogo.jpg',
        body: "Welcome"
    });
    notification.onclick = function () {
        window.open('https://www.google.com');
    }
    setTimeout(notification.close.bind(notification), 7000);
}
//welcome notifications
//header
function header() {
    alert("It's true");
}
//header
//features
function raisehand() {
    var id = document.getElementById("id");
    var idtext = id.value;


    var notification = new Notification("Class Says", {
        icon: 'ZLogo.jpg',
        body: (idtext + " raised a hand")
    });
    notification.onclick = function () {
        window.open('https://www.google.com');
    }
    setTimeout(notification.close.bind(notification), 7000);
}

//features
//id
function id() {

}
//id
