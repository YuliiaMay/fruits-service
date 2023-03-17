import axios from 'axios';


axios.defaults.baseURL = 'https://fruityvice.com';
const ALL = '/api/fruit/all';


export default class FruitsApiService {
    // static #BASE_URL = 'https://fruityvice.com';
    
    constructor() {
        this.searchQuery = 'Apple';
        this.page = 1;
    }


    async searchAllFruits() {
        try {
            const response = await axios.get(`${ALL}`);
            return response;
        } catch (err) {
            console.log(err);
        }
    }


}