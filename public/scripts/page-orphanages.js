// object {} array[] string "" number 01


//criando variavel e atribuindo um lugar para parecer na div q tem o id mapid
const map = L.map('mapid').setView([-22.7562924,-43.468877], 17)


//MAPA E JOGANDO MAPA NA VARIAVEL map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)


// criando icone
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]

})

// criando popup orverlay
const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240

}).setContent('Lar das Meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg" /> </a> ')


//POP UP PARA ADD AO MAPA create and add map
L
.marker([-22.7562924,-43.468877], {icon})
.addTo(map)
.bindPopup(popup)