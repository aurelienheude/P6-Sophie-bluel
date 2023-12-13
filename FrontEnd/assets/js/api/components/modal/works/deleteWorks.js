import { apiUrl } from "../../../modules/config.js";
import { refreshElement } from "../refreshElement.js";
import { viewWorks } from "../../projects/viewWorks.js";
const deleteWork = async (workId) => {
    await apiUrl.delete(`/works/${workId}`);
};

export const deleteWorkHandler = () => {
    const deleteWorkBtnArray = document.querySelectorAll('.deleteBtn');

    deleteWorkBtnArray.forEach(deleteBtn => {
        deleteBtn.addEventListener('click', async () => {
            const workId = deleteBtn.dataset.workId;
            const parentNodeWork = deleteBtn.parentElement;

            if (parentNodeWork.classList.contains("worksEdit")) {
                await deleteWork(workId);
                parentNodeWork.remove();

                refreshElement(".projectGallery");
                await viewWorks();
            }
        });
    });
};