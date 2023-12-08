export const createWorkElement = (work) => {
    const nodeParent = document.querySelector(".projectGallery");
    const newNodeElement = document.createElement("figure");
    newNodeElement.innerHTML = `<img src="${work.imageUrl}" alt="${work.title}" /><figcaption>${work.title}</figcaption>`;
    nodeParent.appendChild(newNodeElement);
};