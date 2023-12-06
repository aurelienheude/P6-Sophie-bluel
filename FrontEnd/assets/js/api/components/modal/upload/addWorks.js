import { apiUrl } from "../../../modules/config.js";

const addWork = async (uploadFormData) => {
    const addWork = await apiUrl.post('/works', uploadFormData);
};

const uploadVerfification = () => {
    const workUploadFile = document.querySelector(".modal__content input[type=file]").files[0];
    const workCategorie = document.querySelector(".modal__content select").value;
    const workTitle = document.getElementById("workTitle").value;

    if(workTitle){
        // il y a du texte
    }else{
        console.log("champs titre vide");
    }

    if(workCategorie != "option1"){
        // il y a une option
    }else{
        console.log("catégorie non selectionné");
    }

    if(workUploadFile){
        
        imgUploadVerification(workUploadFile);
    }else{
        console.log("fichier non selectionné");
    }
};

const imgUploadVerification = (workUploadFile) => {
    
    if(workUploadFile.size < 4194304){
        
        if(workUploadFile.type === "image/jpeg" || workUploadFile.type === "image/png" || workUploadFile.type === "image/jpg"){
            console.log("extension de fichier ok");
            console.log(workUploadFile.type);
        }else{
            console.log(`le type ${workUploadFile.type} n'est pas une image jpeg,png,jpg.`)
        }
    }else{
        console.log(`votre fichier est trop volumineux ! 4 mo Maximum`);
    }
};

export const addWorkForm = () => {

    const addWorkBtn = document.querySelector("#addWorkValidate");
    addWorkBtn.addEventListener("click", () => {

        uploadVerfification();

        const uploadFormData = new FormData();

        /*uploadFormData.append("image", workUploadFile);
        uploadFormData.append("category", parseInt(workCategorie));
        uploadFormData.append("title", workTitle);
        addWork(uploadFormData);*/
    });
};