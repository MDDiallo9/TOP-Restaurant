import { elementCreator, container, cleanContainer } from ".";
const createContact = () => {
    console.log("contact")
    /* cleanContainer() */
    container.append(elementCreator("div","CONTACT PAGE"))
}

export{createContact}