const cardsPerPage = 4;
const dataContainer = document.getElementById("data-container");
const pagination = document.getElementById("paginition");
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next')
const pageNumbers = document.getElementById("page-numbers");
const pageLinks = document.getElementById(".page-link");

const cards = Array.from(dataContainer.getElementsByClassName('card'));

const totalPages = Math.ceil(cards.length/cardsPerPage);
let currentPage = 1;

