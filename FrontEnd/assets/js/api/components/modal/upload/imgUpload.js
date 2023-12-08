import { errorMessageModal } from "../errorModal.js";

export const imgUploadVerification = () => {
    const imgUploadInput = document.querySelector(".modal__content input[type=file]");

    imgUploadInput.addEventListener('change', function onFileChange() {
        const workUploadFile = imgUploadInput.files[0];

        if (workUploadFile.size < 4194304) {
            if (workUploadFile.type === "image/jpeg" || workUploadFile.type === "image/png" || workUploadFile.type === "image/jpg") {
                showImagePreview(workUploadFile);

                imgUploadInput.addEventListener('input', function erasedErrorMessage() {
                    errorMessageModal(".upload", "");
                });
                //console.log(workUploadFile);
                return workUploadFile;
            }else {
                errorMessageModal(".upload", `Le type ${workUploadFile.type} n'est pas une image JPEG, PNG, JPG.`);
            }
        }else {
            errorMessageModal(".upload", "Votre fichier dépasse 4 Mo");
        }
    });
};

const showImagePreview = (file) => {
    const reader = new FileReader();

    reader.onload = function (e) {
        
        const newWorkImg = document.createElement("img");
        newWorkImg.src = e.target.result;

        const previewContainer = document.querySelector(".upload");
        previewContainer.innerHTML = "";
        previewContainer.appendChild(newWorkImg);
    };

    // Lire le contenu de l'image en tant que Data URL
    reader.readAsDataURL(file);
};