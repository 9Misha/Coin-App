"use strict";

// const url = ("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=pyrin%2Cclore-ai%2Cnexellia%2Calephium%2Chypra%2Cradiant%2Cergo%2Ckarlsen%2Cravencoin%2Cabelian%2Cdynex%2Cai-power-grid%2Ckiirocoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d%2C30d%2C200d%2C1y&locale=en");

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

         // Creating tr section
         const row = document.createElement("tr");

         // Creating cells in the table
         const imageCell = document.createElement('img');
         const nameCell = document.createElement('td');
         const currentPriceCell = document.createElement('td');
         const high24Cell = document.createElement('td');
         const pers24hoursCell = document.createElement('td');
         const pers7dayCell = document.createElement('td');
         const pers30dayCell = document.createElement('td');
         const pers200dayCell = document.createElement('td');
         const pers1yearCell = document.createElement('td');


         // Filling the content in the table cells
         imageCell.setAttribute('src', el.image);
         imageCell.style.height = '50px';
         imageCell.style.width = '45px';

         // Coins and links
         const coinLink = document.createElement('a');
         coinLink.href = `https://www.coingecko.com/en/coins/${el.id}`;

         nameCell.addEventListener('click', function () {
            window.open(coinLink.href, '_blank');
         })
         nameCell.style.textDecoration = 'underline';
         nameCell.style.cursor = 'pointer';
         nameCell.style.backgroundColor = 'rgb(14, 174, 218)';
         nameCell.textContent = el.name;

         // Other table cells
         currentPriceCell.textContent = (el.current_price).toFixed(5);
         el.current_price > el.high_24h ? currentPriceCell.classList.add('green') : currentPriceCell.classList.add('red');

         high24Cell.textContent = Number(el.high_24h).toFixed(6);

         pers24hoursCell.textContent = Number(el.price_change_percentage_24h_in_currency).toFixed(2);
         Number(el.price_change_percentage_24h_in_currency) > 0 ? pers24hoursCell.classList.add('green') : pers24hoursCell.classList.add('red');
         // if (Number(el.price_change_percentage_24h_in_currency) > 0)
         // {
         // pers24hoursCell.classList.add("green");
         // } else {
         // pers24hoursCell.classList.add("red");
         // };

         pers7dayCell.textContent = Number(el.price_change_percentage_7d_in_currency).toFixed(2);
         Number(el.price_change_percentage_7d_in_currency) > 0 ? pers7dayCell.classList.add('green') : pers7dayCell.classList.add('red');


         pers30dayCell.textContent = Number(el.price_change_percentage_30d_in_currency).toFixed(2);
         Number(el.price_change_percentage_30d_in_currency) > 0 ? pers30dayCell.classList.add('green') : pers30dayCell.classList.add('red');

         pers200dayCell.textContent = Number(el.price_change_percentage_200d_in_currency).toFixed(2);
         Number(el.price_change_percentage_200d_in_currency) > 0 ? pers200dayCell.classList.add('green') : pers200dayCell.classList.add('red');


         pers1yearCell.textContent = Number(el.price_change_percentage_1y_in_currency).toFixed(2);
         Number(el.price_change_percentage_1y_in_currency) > 0 ?  pers1yearCell.classList.add('green') : pers1yearCell.classList.add('red');

         // Adding another one row in the end of the table
         row.appendChild(imageCell);
         row.appendChild(nameCell); 
         row.appendChild(currentPriceCell);
         row.appendChild(high24Cell);
         row.appendChild(pers24hoursCell);
         row.appendChild(pers7dayCell);
         row.appendChild(pers30dayCell);
         row.appendChild(pers200dayCell);
         row.appendChild(pers1yearCell); 

        
         /*appendChild - закидує елемент в кінець списку, далі йде по ієрархії. Тобто nameCell буде знаходитись в батьківському тезі <tr></tr>*/
         tableBody.appendChild(row);

         console.log(el);

         

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


// Implementation of theme changing

document.querySelector('.theme-toggle').addEventListener('click', function (event) {
   event.preventDefault();
   if (localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme')
   } else {
      localStorage.setItem('theme', 'dark')
   }
   addDarkClass();
});

const addDarkClass = function () {
try {
   if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('html').classList.add('dark');
      document.querySelector('.theme-toggle span').textContent = 'dark_mode';
   } else {
      document.querySelector('html').classList.remove('dark');
      document.querySelector('theme-toggle span').textContent = 'light_mode';
   }
} catch (error) {
   console.error(error)
};
};

addDarkClass();