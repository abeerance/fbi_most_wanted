var myHeaders = new Headers();
myHeaders.append("Cookie", "__cfduid=d408c4edd901f9b56462f21746d6e1a3a1616428691");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.fbi.gov/wanted/v1/list", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));