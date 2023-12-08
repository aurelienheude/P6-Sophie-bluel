import { createWorkElement } from "./createWorkElements.js";
import { apiUrl } from '../../modules/config.js';

export async function viewWorks(){
  const dataWorks = await apiUrl.get('/works');

  dataWorks.forEach(work => {
    createWorkElement(work);
  })
};