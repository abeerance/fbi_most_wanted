var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.nasa.gov/planetary/apod?api_key=lfgYSAttcNLMTq4Z04eeVldbx3PK83pSrufWlYFA", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


    const card = document.createElement('div')
    card.classList.add('card')
  
    const template = `
    <img class='image'> ${result.url} </img>
    <p class='title'> ${result.title} </p>
    <p class='date'> ${result.date} </p>
    `
  
    card.innerHTML = template
    document.querySelector('.container').appendChild(card)