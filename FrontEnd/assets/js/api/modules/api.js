class API {
	constructor(baseURL) {
		this.baseURL = baseURL;
	}

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

	async post(endpoint, formData) {
		try {
			const token = localStorage.getItem('token');

			const response = await fetch(`${this.baseURL}${endpoint}`, {
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
				},
				body: formData,
			});

			if (!response.ok) {
				throw new Error(`Erreur HTTP, statut ${response.status}`);
			}

			return response.json();
		} catch (error) {
			console.error(error.message);
		}
	}

	async auth(endpoint, data) {
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
			const responseData = await response.json();
			const token = responseData.token;
			localStorage.setItem('token', token);
			window.location.href = "index.html";

		} catch (error) {
			const errorNodeMessage = document.querySelector(".form p");
			console.log(errorNodeMessage);
			if (!errorNodeMessage) {
				errorNodeMessage.innerHTML = "";
			} else {
				const nodeParent = document.querySelector(".form");
				const newNodeElement = document.createElement("p");
				newNodeElement.innerText = "Email ou mot de passe invalide";
				nodeParent.appendChild(newNodeElement);
			}
		}
	}

	async delete(endpoint) {
		try {
			const token = localStorage.getItem('token');

			const response = await fetch(`${this.baseURL}${endpoint}`, {
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${token}`,
				},
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