var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.nasa.gov/planetary/apod?api_key=lfgYSAttcNLMTq4Z04eeVldbx3PK83pSrufWlYFA", requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .then(data => {

      data.forEach(object => {
        const card = document.createElement('div')
        card.classList.add('card')
      
        const template = `
        <img class='image'> ${object.url} </img>
        <p class='title'> ${object.title} </p>
        <p class='date'> ${object.date} </p>
        `
      
        card.innerHTML = template
        document.querySelector('#container').appendChild(card)

      });
    })