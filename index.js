function changeLogo() {
  console.log("Extensão ativada")
  const divContainer = document.querySelector(
    "div.css-1dbjc4n.r-dnmrzs.r-1vvnge1"
  )

  if (divContainer) {
    console.log("engine started")
    while (divContainer.firstChild) {
      divContainer.removeChild(divContainer.firstChild)
    }

    const newImage = document.createElement("img")

    newImage.setAttribute(
      "class",
      "r-13v1u17 r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp mama aqui melon musk"
    )

    newImage.src = chrome.runtime.getURL("twitter_logo.png")

    newImage.style.width = "100%"
    newImage.style.height = "auto"
    newImage.style.objectFit = "contain"

    divContainer.innerHTML = ""

    divContainer.setAttribute("class", "css-1dbjc4n r-dnmrzs r-1vvnge1")
    divContainer.style.paddingTop = "20px"
    divContainer.style.paddingBottom = "50px"
    divContainer.style.width = "40px"
    divContainer.style.height = "40px"

    divContainer.appendChild(newImage)
  }
}

window.addEventListener("load", changeLogo)
