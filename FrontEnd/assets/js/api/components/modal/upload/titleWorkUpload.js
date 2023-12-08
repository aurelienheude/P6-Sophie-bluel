import { errorMessageModal } from "../errorModal.js";
import { isChampFull } from "./addWorks.js";

export const titleWorkUpload = () => {
    const workTitle = document.getElementById("workTitle");

    workTitle.addEventListener('change', (e) => {
        isChampFull();

        const texteSaisi = e.target.value;
        if (texteSaisi === "") {
            errorMessageModal("#workTitleGrp", "Champ non rempli");
        } else {
            workTitle.addEventListener('input', () => {
                errorMessageModal("#workTitleGrp", "");
            });
            return workTitle.value;
        }
    });
}