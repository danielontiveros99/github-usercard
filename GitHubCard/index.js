// import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// axios.get('https://api.github.com/users/danielontiveros99')
// .then(res=>{
//   let i= res.data;
//   console.log(i)
// }).catch(err=>{
//   console.log('Error');
// }).finally(()=>{
//   console.log('Done!')
// });


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

let cards = document.querySelector('.cards')
function getCard(getName){
  axios.get(`https://api.github.com/users/${getName}`).then(res=>{
    let i = res.data;
    cards.appendChild(cardMaker(i));
  });
}

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['charisearter', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach( item =>{
  axios.get(`https://api.github.com/users/${item}`).then(res=>{
    let x = res.data;
    cards.appendChild(cardMaker(x));
  })
});
//cardMaker
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const cardMaker = (person) => {
  const card = document.createElement('div');
  const img = document.createElement('img');
  const info = document.createElement('div');
  const name = document.createElement('h3');
  const user = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const link = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p')

  card.appendChild(img);
  card.appendChild(info);
  info.appendChild(name);
  info.appendChild(user);
  info.appendChild(location);
  info.appendChild(profile);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);

  card.classList.add('card');
  info.classList.add('card-info');
  name.classList.add('name');
  user.classList.add('username');

  img.src = person['avatar_url'];
  name.textContent = person['name'];
  user.textContent = person['login'];
  location.textContent = `Location: ${person.location}`;
  link.href = person['html_url'];
  profile.textContent = `Profile: ${link}`;
  followers.textContent = `Followers: ${person.followers}`;
  following.textContent = `Following: ${person.following}`;
  bio.textContent = `Bio: ${person['bio']}`;

  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
