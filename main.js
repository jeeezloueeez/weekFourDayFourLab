let getResidents = document.getElementById('residentsButton');

let clickButton = (req, res) => {
  axios
    .get(`https://swapi.dev/api/planets/?search=Alderaan`)
    .then(res => {
      let residents = res.data.results[0].residents
      for (let i = 0; i < residents.length; i++) {
        axios
          .get(residents[i])
          .then(res => {
          console.log(res.data)
          let person = document.createElement('h2')
          person.textContent = res.data.name
          document.body.appendChild(person)
        }) 
      }
    })
    .catch(err => {console.log(err)})
  
}

getResidents.addEventListener('click', clickButton)