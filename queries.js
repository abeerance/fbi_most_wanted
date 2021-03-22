$(document).ready(function () {

    let button = $("#counter-button");
    let countPictures = undefined;
    let getURL = undefined;
  
    document.querySelector('button').addEventListener('click', imageToGenerate)

    function imageToGenerate(e){
        const summImg = document.querySelector('#counter').value

        if (summImg.length > 0){
            if (!isNaN(summImg)){
                document.querySelector('#container').innerHTML=''
            getURL = "https://api.nasa.gov/planetary/apod?api_key=lfgYSAttcNLMTq4Z04eeVldbx3PK83pSrufWlYFA&count=" + summImg
            fetch(getURL, requestOptions)
            .then(response => response.json())
            .then(data => {
                data.forEach(element => {
                    // create cards
                    const card = document.createElement('div')
                    card.classList.add('card')

                    const template = `
                    <img class='image' src="${element.url}">
                    <p class='title'> ${element.title} </p>
                    <p class='date'> ${element.date} </p>
                    `
                    // append the template
                    card.innerHTML = template
                    document.querySelector('#container').appendChild(card)
                });
            })
            console.log(getURL)
            }
            else{
                console.log('Input is not a number')
            }
        }
        else{
            console.log('you must write a number in the box')
        }
    }

    button.click(function(e) {

        countPictures = document.querySelector('#counter').value
        if(countPictures === NaN){
            console.log('not a number')
        }
        else{
            
        }
    })
})