const baseURL = 'https://pokeapi.co/api/v2/pokemon/';

let getData = async () => {
    await fetch(baseURL)
  .then(response => response.json())
  .then(data => {
      console.log(data.id);
    })
    .catch(err => console.log(err))
  };

  getData()

  let fetchApi = async (i) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(response => response.json())
    .then(data => console.log(`${data.name}:`, data.types[0].type.name))
    .catch(err => console.log(err));
  }
  
  
  
  for (let i = 1; i <= 151; i++){
    fetchApi(i);
  }