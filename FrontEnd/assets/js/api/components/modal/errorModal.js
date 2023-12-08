export const errorMessageModal = (parentNode, error) => {
    const parentNodeSelected = document.querySelector(parentNode);
    const existingErrorElement = document.querySelector(".errorText");
    if (!existingErrorElement) {
        // S'il n'y a pas déjà un élément d'erreur, créez-en un
        const errorMessage = document.createElement("p");
        errorMessage.classList.add("errorText");
        errorMessage.innerText = error;
        parentNodeSelected.appendChild(errorMessage);
    } else {
        existingErrorElement.innerText = error;
    }
};