let user = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")


async function submit() {
    if (user.value.length < 4) {
        alert("user must be higher than 4")
        return
    }
    if (password.value.length < 6) {
        alert("password must be higher than 6")
        return
    }
    const uesrCheek = await fetch(`https://68219a00259dad2655afc151.mockapi.io/account?username=${user.value}`)
    if (uesrCheek.ok) {
        alert("User exsit")
        return
    }
    const emailCheek = await fetch(`https://68219a00259dad2655afc151.mockapi.io/account?email=${email.value}`)
    if (emailCheek.ok) {
        alert("email exsit")
        return
    }
    await fetch('https://68219a00259dad2655afc151.mockapi.io/account', {
        method: 'POST',
        body: JSON.stringify({
            username: user.value,
            email: email.value,
            password: password.value,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}

