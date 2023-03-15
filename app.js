let user = "williambaele";
getUser(user);
// let btnchange = document.querySelector("#change");
// btnchange.addEventListener('click', () => {
//   city = prompt('Which city ?');
//   getTemperature(city);
// })

function getUser(user) {
  const url = 'https://api.github.com/users/' + user;
  let request = new XMLHttpRequest();
  let labelcity = document.querySelector('#city')
  let labeltemperature = document.querySelector('#temperature')
  request.open('GET', url);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    if (request.readyState === XMLHttpRequest.DONE){
      if (request.status === 200){
        let answer = request.response
        let username = answer.name;
        let location = answer.location;
        // document.querySelector("#username").textContent = username;
        // labelcity.textContent = city;
        console.log(username);
        console.log(location);
      }
      else {
        console.log('Issue with the API');
      }
    }
  }
}
