// fetch Javascript (EMPFOHLEN)
fetch('https://api.fbi.gov/wanted/v1/list')
.then(response => response.json())
.then(data => {
    // for each user in data
    data.forEach(user => {

    });
})