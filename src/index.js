import fetchBreeds from './cat-api';
import fetchCatByBreed from './cat-api';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import axios from "axios";

const refs = {
    breedselect: document.querySelector('.breed-select'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    catinfo: document.querySelector('.cat-info'),
    jsloader: document.querySelector('.js-loader'),
};

refs.select.addEventListener('change', handselect);
refs.select.hidden = true;
refs.error.hidden = true;
refs.loader.hidden = false;
refs.jsloader.hidden = false;




