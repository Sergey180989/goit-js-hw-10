import axios from "axios";
import Notiflix from "notiflix";
import SlimSelect from 'slim-select'

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
axios.defaults.headers.common["x-api-key"] = "live_vIIpCY7JYs7i7OrCqWJPM2cnJjMXJtLhWqLDzpnRB4GYbvmpMH2ohwsgNhQJI9a5";

export function fetchBreeds() {
    return axios.get('breeds')
    .then(response => {
      return response.data;
    })
    .catch(error => {
        throw error;
      });
    }

export function fetchCatByBreed(breedId) {
    return axios.get(`images/search?breed_ids=${breedId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      Notiflix.Notify.failure("Oops! Something went wrong! Try reloading the page!");
    });
    }




