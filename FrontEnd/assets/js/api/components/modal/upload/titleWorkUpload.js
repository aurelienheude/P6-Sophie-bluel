import { errorMessageModal } from "../errorModal.js";

export const titleWorkUpload = () => {
    const workTitle = document.getElementById("workTitle");

    let focused = false;
    
    workTitle.addEventListener('focus', function onFocus() {
        if (!focused) {
    
            workTitle.addEventListener('blur', function onBlur(event) {
                const texteSaisi = event.target.value;
                if (texteSaisi === "") {
                    errorMessageModal("#workTitleGrp", "Champ non rempli");
                }else {
                    workTitle.addEventListener('input', function erasedErrorMessage() {
                        errorMessageModal("#workTitleGrp", "");
                    });
                    //console.log(texteSaisi);
                    return workTitle.value;
                }
            });
    
            focused = true;
        }
    });
}