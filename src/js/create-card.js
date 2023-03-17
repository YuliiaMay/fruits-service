import axios from 'axios';
// import FruitsApiService from './api-fruits';


// const fruitsApiService = new FruitsApiService();

const ALL_FRUITS = 'https://fruityvice.com/api/fruit/all';


fetchFruits();


async function fetchFruits() {
    try {
        const allFruits = await getAllFruit();
        return allFruits;
    } catch (error) {
        console.error;
    }
}




async function getAllFruit() {
    try {
        const response = await axios.get(ALL_FRUITS);
        console.log(response);
        return response;
    } catch (error) {
        console.error;
    }
};



