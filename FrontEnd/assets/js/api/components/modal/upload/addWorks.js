import { apiUrl } from "../../../modules/config.js";
import { imgUploadVerification } from "./imgUpload.js";
import { titleWorkUpload } from './titleWorkUpload.js';
import { categorieWorkUpload } from "./categorieWork.upload.js";

const addWork = async (uploadFormData) => {
    const addWork = await apiUrl.post('/works', uploadFormData);
};

export const addWorkForm = () => {
    const addWorkBtn = document.querySelector("#addWorkValidate");
    addWorkBtn.addEventListener("click", () => {
        console.log("j'ajoute un super work");
        const uploadFormData = new FormData();

        /*uploadFormData.append("image", workUploadFile);
        uploadFormData.append("category", parseInt(workCategorie));
        uploadFormData.append("title", workTitle);
        addWork(uploadFormData);*/
    });
};

const uploadVerification = () => {
    const titleResult = titleWorkUpload();
    const imgUploadResult = imgUploadVerification();
    const categorieResult = categorieWorkUpload();

    return titleResult && imgUploadResult && categorieResult;
};

export const isChampFull = (toto, titi, proute) => {
    console.log(toto, titi, proute);
}
export const btnFormValidation = () => {
    const btnAddWorkValidation = document.querySelector("#addWorkValidate");
    
    btnAddWorkValidation.setAttribute("disabled", true);
    const isValid = uploadVerification();

    if (isValid) {
        console.log("c'est valide");
        btnAddWorkValidation.style.background = "green";
        btnAddWorkValidation.style.cursor = "pointer";
    } else if(!isValid){
        console.log("c'est pas valide");
        btnAddWorkValidation.style.background = "grey";
        btnAddWorkValidation.style.cursor = "not-allowed";
    }
};