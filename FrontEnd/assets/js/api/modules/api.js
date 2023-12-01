class API {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  // Méthode pour effectuer une requête GET
  async get(endpoint) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`);
      if (!response.ok) {
        throw new Error(`Erreur HTTP, statut ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error(error.message);
    }
  }

  // Méthode pour effectuer une requête POST
  async post(endpoint, data) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`Erreur HTTP, statut ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error(error.message);
    }
  }

  // Méthode pour effectuer une requête DELETE
  async delete(endpoint) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Erreur HTTP, statut ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default API;