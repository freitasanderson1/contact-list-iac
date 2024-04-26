import axios from 'axios';

export const apiContacts = axios.create({
	baseURL: 'http://0.0.0.0:8009/api/listaContatos',
});

export const baseURLApi = 'http://0.0.0.0:8009/'