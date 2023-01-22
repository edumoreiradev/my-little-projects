
const botaoTrailer = document.querySelector(".botao-trailer")

const modal = document.querySelector(".modal")

const botaoFechar = document.querySelector(".fechar-modal")

const video = document.getElementById("video")

const linkDoVideo = video.src

function alterarModal() {
    modal.classList.toggle("aberto")
}

botaoFechar.addEventListener("click", () => {
    alterarModal()
	video.setAttribute("src", linkDoVideo);
});

botaoTrailer.addEventListener("click", () => {
    alterarModal()
    video.setAttribute("src", linkDoVideo)
})