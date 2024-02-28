"use strict";

// const url = ("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=pyrin%2Cclore-ai%2Cnexellia%2Calephium%2Chypra%2Cradiant%2Cergo%2Ckarlsen%2Cravencoin%2Cabelian%2Cdynex%2Cai-power-grid%2Ckiirocoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d%2C30d%2C200d%2C1y&locale=en");

// const url = (`https://restcountries.com/v2/name/${country}`)

const getData = async function () {
   const response = await fetch("https://restcountries.com/v2/name//portugal");
   const data = await response.json();
   console.log(data)
};

getData();
console.log('FIRST');

// comment
