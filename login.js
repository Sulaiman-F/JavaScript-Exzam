let user = document.getElementById("username")
let password = document.getElementById("password")

function submit() {
    fetch('https://68219a00259dad2655afc151.mockapi.io/account')
        .then((response) => response.json())
        .then((data) => {
            data.forEach(element => {


                if (user.value == element.username && password.value == element.password) {
                    alert("login sussces")
                    window.location.href = "/home.html"
                } else {
                    alert("error uesr name or password")
                }

            });
        });
}

