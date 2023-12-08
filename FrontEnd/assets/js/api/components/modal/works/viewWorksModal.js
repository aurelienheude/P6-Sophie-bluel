import { apiUrl } from "../../../modules/config.js";
import { createWorkModalElement } from "./createWorkDeleteElements.js";

export const viewWorksModal = async () => {
    const viewWorksModal = await apiUrl.get('/works');
    
    viewWorksModal.forEach(work => {
        createWorkModalElement(work);
    });

    return viewWorksModal;
};