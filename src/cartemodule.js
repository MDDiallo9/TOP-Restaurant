import { elementCreator, container,cleanContainer } from ".";
const createCarte = () => {
    cleanContainer()
    console.log("JE SUIS LA CARTE")
    container.append(elementCreator("div","CARTE PAGE"))
}

export {createCarte}