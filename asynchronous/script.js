'use strict';

//NO ANYNMORE
//https://restcountries.eu/rest/v2/

// USE THIS ONE
// https://countries-api-836d.onrender.com/countries/


const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

/* const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();


    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText)
        console.log(data);

        // const languages = data.languages[Object.keys(data.languages)[0]];
        // const currencies = data.currencies[Object.keys(data.currencies)[0]].name
        const languages = Object.values(data.languages);
        const currencies = Object.values(data.currencies)[0].name;

        const html = `
    <article class="country">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${languages}</p>
      <p class="country__row"><span>💰</span>${currencies}</p>
    </div>
  </article>
    `;

        countriesContainer.insertAdjacentHTML('beforeend', html)
        countriesContainer.style.opacity = 1;

    })
} */


function renderCountry(data, className = '') {
  // const languages = data.languages[Object.keys(data.languages)[0]];
  // const currencies = data.currencies[Object.keys(data.currencies)[0]].name
  const languages = Object.values(data.languages);
  const currencies = Object.values(data.currencies)[0].name;



  const html = `
  <article class="${className}">
  <img class="country__img" src="${data.flags.svg}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${languages}</p>
    <p class="country__row"><span>💰</span>${currencies}</p>
  </div>
</article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html)
  countriesContainer.style.opacity = 1;
}

// - - - - - - - - - - - CALLBACK HELL - - - - - - - - - - - - -
/*
const getCountryAndNeighbour = function (country) {
  //AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText)
    console.log(data);

    //Render country 1
    renderCountry(data)


    //Get neighbour country (2)
    const neighbour = data.borders?.[0]

    if (!neighbour) return;

    //AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function(){
      const [data2] = JSON.parse(this.responseText)
      console.log(data2);

      renderCountry(data2, 'neighbour')
    })

  })
}

getCountryAndNeighbour('sweden') */




// - - - - - - - - - - - - - MODERN: FETCH API - - - - - - - - - - - - - -

//OLD WAY
/* const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send(); */


//NEW WAY

// const request = fetch('https://restcountries.com/v3.1/name/portugal')
// console.log(request);


// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (res) {
//     console.log(res);
//     return res.json().then(function (data) {
//       console.log(data);
//       renderCountry(data[0])
//     })
//   })
// }

//SIMPLIFIED VERSION
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((res) => res.json())
    .then((data) => renderCountry(data[0]))
}

getCountryData('portugal')