const searchText =()=>{
const searchText = document.getElementById('seach-field').value;
if(searchText === ''){
     alert("Search properly which you want to search")
}else{
     const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
fetch(url)
.then(response => response.json())
.then(data => displaySearchData(data.drinks))
}

document.getElementById('seach-field').value = '';
}
const displaySearchData = (drinks) =>{
     const searchResults = document.getElementById('searchResults');
     
     drinks.forEach((drink) =>{
     console.log(drink)
     
     const div = document.createElement('div');
     div.classList.add('col')
     div.innerHTML =`
     <div onclick="loadCocktailDetails('${drink.idDrink}')" class="card h-100">
     <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
     <div class="card-body">
          <h5 class="card-title">${drink.strDrink}</h5>
          <p class="card-text">${drink.strInstructions.slice(0,100)}</p>
     </div>
     </div>
     `
     searchResults.appendChild(div);
})
}

const loadCocktailDetails = (idDrink) => {
     const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
     if(idDrink === 0){
          alert('Not available Which you want')
     }else{
          fetch(url)
          .then(res => res.json())
          .then(data => singleDetailsDisplay(data.drinks))
     }
    
}


const singleDetailsDisplay =drinks=> {
     const detailsContainer = document.getElementById('detailsContainer');
     detailsContainer.textContent = '';
     // console.log(drinks);
     drinks.forEach((drink) => {
          console.log(drink)
          const div = document.createElement('div');
          div.innerHTML =`
          <div class="card" style="width: 18rem;">
          <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
          <h5 class="card-title">${drink.strDrink}</h5>
          <div class="card-body">
          <p class="card-text">${drink.strInstructionsIT.slice(0,100)}</p>
          <p class="card-text">Category : ${drink.strCategory}</p>
          <p class="card-text"><small class="text-muted">Glass : ${drink.strGlass}</small></p>

          </div>
          </div>
          `
          detailsContainer.appendChild(div);   
     })
}