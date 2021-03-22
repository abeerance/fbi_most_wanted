var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.nasa.gov/planetary/apod?api_key=lfgYSAttcNLMTq4Z04eeVldbx3PK83pSrufWlYFA&count=50", requestOptions)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => {

      data.forEach(element => {
        const card = document.createElement('div')
        card.classList.add('card')
      
        const template = `
        <img class='image' src="${element.url}">
        <p class='title'> ${element.title} </p>
        <p class='date'> ${element.date} </p>
        `
      
        card.innerHTML = template
        document.querySelector('#container').appendChild(card)
      });
    })
  .catch(error => console.log('error', error));
