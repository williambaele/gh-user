let user = "williambaele";
let form = document.querySelector('#form');
getUser(user);
let input = document.querySelector('#input');
getRepositoriesUser(user);
getFollowerUser(user);

/* FOLLOWERS CALL */
function getFollowerUser(user){
  const url = 'https://api.github.com/users/' + user + '/followers'
  let request = new XMLHttpRequest();
  request.open('GET', url);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    if (request.readyState === XMLHttpRequest.DONE){
      if (request.status === 200){
        let answer = request.response
        console.log('Ok with the repo API');
        let nbFollowers = answer.length;
        document.querySelector("#nbfollowers").textContent = nbFollowers;
        let followerNames = '';
        for (let i = 0; i < answer.length; i++) {
          followerNames += '<h1 class="text-5xl">' + answer[i].login + '</h1>';
        }
        document.querySelector('#follower-name').innerHTML = followerNames;
      }
      else {
        console.log('Issue with the repo API');
      }
    }}
}

/* REPOS CALL */
function getRepositoriesUser(user){
  const url = 'https://api.github.com/users/' + user + '/repos'
  let request = new XMLHttpRequest();
  request.open('GET', url);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    if (request.readyState === XMLHttpRequest.DONE){
      if (request.status === 200){
        let answer = request.response
        console.log('Ok with the repo API');
        let nbRepos = answer.length;
        document.querySelector("#nbrepos").textContent = nbRepos;
      }
      else {
        console.log('Issue with the repo API');
      }
    }}
}
/* USER INFO CALL */
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
        if(location === null){
          location = "No given location";
        } else {
          let location = answer.location;
        }
        let website = answer.blog;
        if(website == ""){
           website = "No website";
        } else {
          let website = answer.blog;
        }
        let joineddate = answer.created_at;
        let date = new Date(joineddate);
        let  lastactivitydate= answer.updated_at;
        let lastactivity = new Date(lastactivitydate);
        let description = answer.bio;
        let profileurl = answer.html_url;
        let profilepicture = answer.avatar_url
        document.querySelector("#username").textContent = username;
        document.querySelector("#website").textContent = website;
        document.querySelector("#joineddate").textContent = date.toLocaleDateString();
        document.querySelector("#lastactivity").textContent = lastactivity.toLocaleDateString();
        document.querySelector("#location").textContent = location;
        document.getElementById("url").href= profileurl;
        document.querySelector("#website").href = 'https://www.'+ website;
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
    getRepositoriesUser(user);
    getFollowerUser(user);

  }
});
