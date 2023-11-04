import { apiUrl } from "../../modules/config.js";

const nodeParent = document.querySelector(".filtersbtn");
const categoriesFilterChild = [];

let viewCategories = apiUrl.get('/categories')

    .then(data => {
        
        for(let i = 0; i < data.length; i++){
            
            const newNodeElement = document.createElement("button");
            newNodeElement.classList.add("btnCategory", "btnCategory--inactive");
            newNodeElement.setAttribute("data-filter", `${data[i].name}`);
            newNodeElement.innerText= `${data[i].name}`;
            nodeParent.appendChild(newNodeElement);
        }})
    .catch(error => {
        console.error(error);
    });

export {viewCategories};