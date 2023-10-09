import axios from "axios";

axios.defaults.headers.common['x-api-key'] = APIkey;

const APIkey = 'live_vIIpCY7JYs7i7OrCqWJPM2cnJjMXJtLhWqLDzpnRB4GYbvmpMH2ohwsgNhQJI9a5';
const beginurl = 'https://api.thecatapi.com/v1/breeds';
const searchurl = 'https://api.thecatapi.com/v1/images/search';

export function fetchBreeds () {
    const url = '${beginurl}?api_key'
    return axios.get(url).then(response => {
        return response.data;
    })    
}

export function fetchCatByBreed(breedId) {
    const url = '${searchurl}?api_key&breed_ids=${breedId}'
    return axios.get(url).then(response => {
        return response.data;
    })    
}