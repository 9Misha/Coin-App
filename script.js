"use strict";

const url = ("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=pyrin%2Cclore-ai%2Cnexellia%2Calephium%2Chypra%2Cradiant%2Cergo%2Ckarlsen%2Cravencoin%2Cabelian%2Cdynex%2Cai-power-grid%2Ckiirocoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d%2C30d%2C200d%2C1y&locale=en");

// https://jsonplaceholder.typicode.com/todos


const getData = async function () {
   try {
      const response = await fetch(url)
      const data = await response.json();
      return data
      
   } catch (error) {
      console.log(error)
   }
   
};


async function displayData() {
   try {
      const coinData = await getData()
      
      for (const el of coinData) {
         const tableBody = document.getElementById('table-body');
         const row = document.createElement("tr")

         const imageCell = document.createElement("td")
         const nameCell = document.createElement("td")
         const currentPriceCell = document.createElement("td")

         nameCell.textContent = el.name;

         row.appendChild(nameCell)
         tableBody.appendChild(row)
         

         // let table = ''
         
         
      //    table += ` 
      //   <tr>
      //    <td><img src="${el.image}" alt="${el.name}" width="20" height="20"></td>
      //    <td class="active__coin">${el.name}</td>
      //    <td>${el.current_price}</td>
      //    <td>${el.high_24h}</td>
      //    <td>${el.price_change_percentage_24h_in_currency.toFixed(3)}</td>
      //    <td>${el.price_change_percentage_7d_in_currency.toFixed(2)}</td>
      //    <td>${el.price_change_percentage_30d_in_currency}</td>
      //    <td>${el.price_change_percentage_200d_in_currency}</td>
      //    <td>${el.price_change_percentage_1y_in_currency}</td>
      //    </tr>
      //    `
         

         // tableBody.innerHTML = table

            
      }
   } catch (error) {
      console.error(error)
   }
   
}

displayData();

