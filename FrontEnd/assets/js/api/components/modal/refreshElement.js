export const refreshElement = (nodeParent) => {
    const nodeParents = document.querySelector(nodeParent);
    nodeParents.innerHTML = "";
}