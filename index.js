function changeLogo() {
  console.log("Extensão ativada")
  const divContainer = document.querySelector(
    "div.css-1dbjc4n.r-dnmrzs.r-1vvnge1"
  )

  console.log("******************************************************")
  console.log(divContainer)

  if (divContainer) {
    console.log("Positivo e operante")

    while (divContainer.firstChild) {
      divContainer.removeChild(divContainer.firstChild)
    }

    const newImage = document.createElement("img")

    newImage.setAttribute(
      "class",
      "r-13v1u17 r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp mama aqui melon musk"
    )
    newImage.src = chrome.runtime.getURL("twitter_logo.png")

    divContainer.innerHTML = ""

    divContainer.setAttribute("class", "css-1dbjc4n r-dnmrzs r-1vvnge1")

    console.log(newImage)

    divContainer.appendChild(newImage)

    console.log(divContainer)
  }
}

window.addEventListener("load", changeLogo)
