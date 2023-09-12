import "./style.css"

const elementCreator = (type,content,classname) => {
    let element = document.createElement(type)
    for (let item of classname){
        console.log(item) 
        element.classList.add(item)
    }
    element.textContent = content
    return element
}

console.log("test");
let testDiv = elementCreator("div","petit test",["blue","flex"])
console.log(testDiv)


let container = document.querySelector("#content")
container.appendChild(testDiv)

