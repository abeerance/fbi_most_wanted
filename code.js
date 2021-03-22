async function fetchData() {
  var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
  const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=lfgYSAttcNLMTq4Z04eeVldbx3PK83pSrufWlYFA", requestOptions)
  const data = await response.json()
  data.forEach(obj => {
    const card = document.createElement('div')
    card.classList.add('card')

    const template = `
    <img class='image'> ${element.url} </img>
    <p class='title'> ${element.title} </p>
    <p class='date'> ${element.date} </p>
    `

    card.innerHTML = template
    document.querySelector('#container').appendChild(card)
  })
}


    
