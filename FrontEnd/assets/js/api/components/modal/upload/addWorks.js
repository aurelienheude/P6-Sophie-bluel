import { apiUrl } from "../../../modules/config.js";
import { imgUploadVerification } from "./imgUpload.js";
import { titleWorkUpload } from './titleWorkUpload.js';
import { categorieWorkUpload } from "./categorieWork.upload.js";
import { successMessageModal } from "../sucessModal.js";
import {changeToUploadModal} from '../modal.js';
import { viewWorks } from "../../projects/viewWorks.js";
import {refreshElement} from '../refreshElement.js';

const addWork = async (uploadFormData) => {
    const addWork = await apiUrl.post('/works', uploadFormData);
};

export const addWorkForm = (uploadedWork) => {
    const addWorkBtn = document.querySelector("#addWorkValidate");

    addWorkBtn.addEventListener("click", async () => {
        imgUploadVerification();

        const uploadFormData = new FormData();

        uploadFormData.append("image", uploadedWork.file);
        uploadFormData.append("category", uploadedWork.categorie);
        uploadFormData.append("title", uploadedWork.title);

        await addWork(uploadFormData);

        successMessageModal(".modal__content", "Nouveau projet créé !");

        refreshElement(".projectGallery");
        await viewWorks();
        
        setTimeout(() => {
            const successMessageModal = document.querySelector(".modal__content > p");
            const modal = document.querySelector(".overlay");

            successMessageModal.remove();
            modal.remove();

            changeToUploadModal();
        }, 1600);
    });
};

export const isChampFull = () => {
    const workTitle = document.getElementById("workTitle");
    const workCategorie = document.querySelector(".modal__content select");
    const imgUploadInput = document.querySelector(".modal__content > .upload > img");
    const uploadFile = document.querySelector("#modalUpload > dialog > form > div.upload > div > input[type=file]");
    const btnAddWorkValidation = document.querySelector("#addWorkValidate");

    if (workTitle.value.length > 1 && workCategorie.value !== "option1" && workCategorie.value && imgUploadInput) {
        btnAddWorkValidation.removeAttribute("disabled");
        btnAddWorkValidation.style.background = "#1D6154";
        btnAddWorkValidation.style.cursor = "pointer";

        const uploadedWork = {
            title: workTitle.value,
            categorie: parseInt(workCategorie.value),
            file: uploadFile.files[0]
        };

        addWorkForm(uploadedWork);
    } else {
        btnAddWorkValidation.setAttribute("disabled", true);
        btnAddWorkValidation.style.background = "grey";
        btnAddWorkValidation.style.cursor = "not-allowed";
    }
}

export const btnFormValidation = () => {
    const btnAddWorkValidation = document.querySelector("#addWorkValidate");

    btnAddWorkValidation.setAttribute("disabled", true);
    btnAddWorkValidation.style.background = "grey";
    btnAddWorkValidation.style.cursor = "not-allowed";

    titleWorkUpload();
    imgUploadVerification();
    categorieWorkUpload();
};
