import "./style.css"
import logo from "./restaurant-logo.png"
import contact, { createContact } from "./contactmodule.js"
import { createCarte } from "./cartemodule"
import { createHome } from "./homemodule"

const elementCreator = (type,content,classname="") => {
    let element = document.createElement(type)
    for (let item of classname){
        console.log(item) 
        element.classList.add(item)
    }
    element.textContent = content
    return element
}

let container = document.querySelector("#content")
let logoimg = document.querySelector("#logoimg")

logoimg.src = logo
/* createContact()
createCarte() */
/* createHome() */

const cleanContainer = () => {
    for (let elem of container.children){
        container.removeChild(elem)
    }
}

createContact()

const home = document.querySelector('#home')
const navButttons = document.querySelectorAll("li")

const btnNames = ["home","carte","sens","traiteur","contact"]
for (let i = 0 ; i < btnNames.length ; i++){
    navButttons[i].setAttribute("id",btnNames[i])
}
const runSelectors = () => {
    document.querySelector("#home").addEventListener("click", () => {
        createHome()
    })
    document.querySelector("#carte").addEventListener("click", () => {
        createCarte()
    })
    document.querySelector("#sens").addEventListener("click", () => {
        createHome()
    })
    document.querySelector("#traiteur").addEventListener("click", () => {
        createHome()
    })
    document.querySelector("#contact").addEventListener("click", () => {
        createContact()
    })
}

runSelectors()

export {elementCreator,cleanContainer,container}







