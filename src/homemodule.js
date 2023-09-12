import { elementCreator, container, cleanContainer } from ".";
const createHome = () => {
    console.log("Home")
    /* cleanContainer() */
    container.append(document.createElement("section"))
    let section  = document.querySelector("section")
    section.append(elementCreator("div","",["home","img"]))
    section.append(elementCreator("div","",["home","text"]))
    section.append(elementCreator("div","",["home","img"]))
    let imgDivs = document.querySelectorAll(".img")
    for (let div of imgDivs){
        console.log(div)
        div.append(elementCreator("img"))
    }
    document.querySelector("#content > section > div:nth-child(1) > img").src = "https://le-sixiemesens.fr/wp-content/uploads/2016/06/restaurant-gastronomique-le-sixieme-sens-rouen-6-6eme-vieux-marche-gueret-1880-8-saumon-hover-780x584.jpg"
    document.querySelector("#content > section > div:nth-child(3) > img").src = "https://le-sixiemesens.fr/wp-content/uploads/2016/06/restaurant-gastronomique-le-sixieme-sens-rouen-6-6eme-vieux-marche-gueret-1880-9-asperge-780x584.jpg"
    document.querySelector(".text").append(elementCreator("h1","Bienvenue au 6e Sens"))
    document.querySelector(".text").append(elementCreator("p",`Le chef Hakim Benallal et son équipe vous proposent une cuisine contemporaine, pleine de sensations réalisée exclusivement à partir de produits frais. Tous les plats sont "Faits Maison". Éveillez vos papilles dans un écrin atypique et exceptionnel que constitue cette cave voûtée du XVIII alliant pierres brutes et modernité.`))
}

export {createHome}