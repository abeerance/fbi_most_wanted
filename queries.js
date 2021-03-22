$(document).ready(function () {

    let button = $("#counter-button");
    let countPictures = undefined;
    let getURL = undefined;
  
    button.click(function(e) {

        countPictures = document.querySelector('#counter').value
        if(countPictures === NaN){
            console.log('not a number')
        }
        else{
            getURL = "https://api.nasa.gov/planetary/apod?count=" + countPictures + "&api_key=4A0czHEIXr9B9SP73MUqDgAnne4PjzKWAj1k7NeZ"
            fetch(getURL, requestOptions)
            console.log(getURL)
        }
    })
})