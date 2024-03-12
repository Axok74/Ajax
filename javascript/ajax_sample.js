let data = null;
let number = 0
datos()
async function datos() {
    const response = await fetch("/data/ajax.json")
    console.log(response)
    if (response.ok) {
        data = await response.json()
    }else{
        console.error("error en el servidor")
    }
    console.log(data[0].title)
}
function cambiarVideo(){
    console.log(data[number])
    const title = document.getElementById("title")
    const parrafo = document.getElementById("content")
    const video = document.getElementById("video")

    title.innerHTML = data[number].title
    parrafo.innerHTML = data[number].content
    video.style.display = "block"
    video.setAttribute("src", data[number].url)
    number++
    if (number >= 3){
        number = 0
    }
}