let opcl = true;
let sidebar = document.getElementById("sidebar");
function myFunction(x) {
    x.classList.toggle("change");
    if (opcl === true) {
        console.log("opened");
        opcl = false;
        sidebar.style.height = "100%";
    } else {
        console.log("closed");
        opcl = true;
        sidebar.style.height = "0px";
    }
}

document.getElementById("postbtn").onclick = function() {
    const apost = document.createElement("div");
    const discription = document.createElement("p");
    const image = document.createElement("img");
    image.src = "./img/posted.jpg";
    image.height = 600;
    image.width = 600;
    image.style.borderRadius = "20px"
    image.alt = "posted image";
    image.style.borderRadius = 20;
    discription.innerText = "This website doesn't has a server yet. Nobody can see it. And this is the only image you can post here. Wait for updates.";
    discription.style.color = "red";
    document.body.appendChild(apost);
    apost.appendChild(image);
    apost.appendChild(discription);
    console.log(image.style.borderRadius);
}