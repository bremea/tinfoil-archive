import RestClient from "../RestClient.js";

class UsersAPI {
	private client: RestClient;

	constructor(client: RestClient) {
		this.client = client;
	}

	me = async () => this.client.request('/users/@me', 'GET');
}

export default UsersAPI;