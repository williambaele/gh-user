let user = "williambaele";
let form = document.querySelector('#form');
getUser(user);
let input = document.querySelector('#input');



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
        let website = answer.blog;
        let joineddate = answer.created_at;
        let description = answer.bio;
        let profilepicture = answer.avatar_url
        document.querySelector("#username").textContent = username;
        document.querySelector("#website").textContent = website;
        document.querySelector("#location").textContent = location;
        document.querySelector("#description").textContent = description;
        document.getElementById("profilepicture").src = profilepicture;

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


// Etape 5 - Agir à l'envoi du formulaire
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if(input.value == ''){
     // Mettre notre bordure de formulaire en rouge (red)
    input.style.borderColor = "red";
    console.log("error brrrrr");

  }
  else {
    // Mettre notre bordure de formulaire en gris (silver)
    let user = input.value;
    getUser(user);
  }
});
