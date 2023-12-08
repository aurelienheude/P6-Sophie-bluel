import { errorMessageModal } from "../errorModal.js";
import { isChampFull } from "./addWorks.js";
export const categorieWorkUpload = () => {
    const workCategorie = document.querySelector(".modal__content select");

    workCategorie.addEventListener('change', function onCategoryChange() {
        const selectedCategory = workCategorie.value;

        if (selectedCategory === "") {
            errorMessageModal("#modalUpload > dialog > form > div:nth-child(3)", "Champ non rempli");
        } else {
            // Supprimer le message d'erreur si l'utilisateur commence à changer la catégorie
            workCategorie.addEventListener('input', function erasedErrorMessage() {
                errorMessageModal("#modalUpload > dialog > form > div:nth-child(3)", "");
            });
            //console.log(workCategorie.value);

            return parseInt(workCategorie.value);
        }
    });
};