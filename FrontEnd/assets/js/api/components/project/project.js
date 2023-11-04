import { apiUrl } from "../../modules/config.js";

let viewWorks = apiUrl.get('/works')

    .then(data => {
        for(let i = 0; i < data.length; i++){
            const nodeParent = document.querySelector(".projectGallery");
            const newNodeElement = document.createElement("figure");
            newNodeElement.innerHTML = `<img src="${data[i].imageUrl}" alt="${data[i].title}" />
                                        <figcaption>${data[i].title}</figcaption>`;
            nodeParent.appendChild(newNodeElement);
        }})

    .catch(error => {
        console.error(error);
    });

export { viewWorks };