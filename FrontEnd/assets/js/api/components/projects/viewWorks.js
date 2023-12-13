import { createWorkElement } from "./createWorkElements.js";
import { apiUrl } from '../../modules/config.js';

export const viewWorks = async () => {
  const dataWorks = await apiUrl.get('/works');

  dataWorks.forEach(work => {
    createWorkElement(work);
  })
};