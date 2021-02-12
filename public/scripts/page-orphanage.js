// object {} array[] string "" number 01


//criando variavel e atribuindo um lugar para parecer na div q tem o id mapid
const options = {
    zoomControl: false,
    doubleClickZoon: false,
    dragging: false,
    touchZoom: false,
    scrollWheelZoon: false
    

}



const map = L.map('mapid',options).setView([-22.7562924,-43.468877], 17)


//MAPA E JOGANDO MAPA NA VARIAVEL map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)


// criando icone
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]

})



//POP UP PARA ADD AO MAPA create and add map
L
.marker([-22.7562924,-43.468877], {icon})
.addTo(map)

/* image gallery*/

function selectImage(event){
    const button = event.currentTarget


    //remorver todas as classes active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove("active")
    })
   
    /* mais um jeito de fazer a função --- mais explicativa
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)
    function removeActiveClass(button){
        button.classList.remove("active")
    }*/


    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")



    //atualizar o contatiner de imagem
    imageContainer.src = image.src

    //adicionar a classe activer para o botao clicado
    button.classList.add('active')
}