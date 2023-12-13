export const successMessageModal = (parentNode, sucess) => {
    const parentNodeSelected = document.querySelector(parentNode);
    const existingSuccessElement = document.querySelector(".sucessText");

    if (!existingSuccessElement) {
        const SuccessMessage = document.createElement("p");

        SuccessMessage.classList.add("successText");
        SuccessMessage.innerText = sucess;
        parentNodeSelected.appendChild(SuccessMessage);
    }
};