
function logout() {
    window.location.href = "/index.html"
}
let containerSec = document.getElementById("container-sec")

let containerSec2 = document.getElementById("container-sec2")


document.addEventListener("DOMContentLoaded", (event) => {
    getel();
});

function getel() {
    fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((data) => {
            data.forEach(element => {

                let cardDiv = document.createElement("div");
                cardDiv.classList.add("card-contre");
                let imgdiv = document.createElement("div")
                imgdiv.classList.add("imgae-card");
                let img = document.createElement("img");
                img.src = element.flags.png;
                let h4 = document.createElement("h4");
                h4.innerText = element.name.common
                let contant = document.createElement("div")
                contant.classList.add("contant")
                let p1 = document.createElement("p")
                p1.innerText = `the official: ${element.name.official}`
                let p2 = document.createElement("p")
                p2.innerText = `the pop: ${element.population}`
                let p3 = document.createElement("p")
                p3.innerText = `the region ${element.region}`
                let p4 = document.createElement("p")
                p4.innerText = element.languages
                let a = document.createElement("a")
                a.href = `${element.maps.googleMaps}`
                a.innerText = "googleMaps"

                containerSec.appendChild(cardDiv)
                cardDiv.appendChild(imgdiv)
                cardDiv.appendChild(h4)
                cardDiv.appendChild(contant)
                imgdiv.append(img)
                contant.appendChild(p1)
                contant.appendChild(p2)
                contant.appendChild(p3)
                contant.appendChild(a)

            });
        });

}

// function getel2() {
//     fetch('https://api.harvardartmuseums.org/Object?apikey=b1b551ed-25eb-4f86-99a6-2be4472bef0a')
//         .then((response) => response.json())
//         .then((data) => {
//             data.records.forEach(element => {
//                 console.log(element.dated);


//                 let cardDiv = document.createElement("div");
//                 cardDiv.classList.add("card-contre-2");
//                 let imgdiv = document.createElement("div")
//                 imgdiv.classList.add("imgae-card");
//                 let img = document.createElement("img");


//                 let contant = document.createElement("div")
//                 contant.classList.add("contant")
//                 let p1 = document.createElement("p")
//                 p1.innerText = element.dated
//                 let p2 = document.createElement("p")

//                 let p3 = document.createElement("p")


//                 containerSec2.appendChild(cardDiv)
//                 cardDiv.appendChild(imgdiv)
//                 cardDiv.appendChild(contant)
//                 imgdiv.append(img)
//                 contant.appendChild(p1)
//                 contant.appendChild(p2)
//                 contant.appendChild(p3)

//             });
//         });

// }
