let dogStatus = '';
let dog = {};
let unlikeClasses = ['fas', 'fa-times', 'unlike'];
let likeClasses = ['fas', 'fa-heart', 'like'];
let superlikeClasses = ['fas', 'fa-star', 'super-like'];

//Selectors
const dogImage = document.querySelector('.dog-image');
const dogName = document.querySelector('.dog-name');
const dogAge = document.querySelector('.dog-age');
const dogDistance = document.querySelector('.dog-distance');
const unlikeButton = document.querySelector('.unlike-button');
const superLikeButton = document.querySelector('.super-like-button');
const likeButton = document.querySelector('.like-button');
const dogList = document.querySelector('.dog-list');

//Event Listeners
document.addEventListener('DOMContentLoaded', getDogImages);
unlikeButton.addEventListener('click', addUnlike);
likeButton.addEventListener('click', addLike);
superLikeButton.addEventListener('click', addSuperlike);
document.addEventListener('DOMContentLoaded', getLocalStorage);

//Functions
function getDogImages() {
    console.log('hello');
    fetch('https://dog.ceo/api/breed/retriever/golden/images/random')
    .then(response => response.json())
    .then(data => {
		dog = {
			age: Math.floor(Math.random() * 16) + 1,
			name: dogNames[Math.floor(Math.random() * dogNames.length)],
			distance: Math.floor(Math.random() * 48) + 1,
			image: data.message,
			status: dogStatus
		}
		assignDog(dog);
    })
}

function assignDog(dog) {
	dogImage.src = dog.image;
	dogName.innerText = dog.name;
	dogAge.innerText = ' - ' + dog.age + ' Years';
	dogDistance.innerText = dog.distance + ' Kilometres';
	//dogs.push(dog);
	
}

function addUnlike() {
    dog.status = 'unliked';
    //create list element
    const dogLi = document.createElement('li');
    dogLi.classList.add('list');

    //create img element
    const listImage = document.createElement('img');
    listImage.classList.add('list-image');
    listImage.src = dog.image;
    dogLi.appendChild(listImage);

    //create wrapper div
    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('wrapper-div');

    //create inner div
    const midDiv = document.createElement('div');
    midDiv.classList.add('mid-div');
    wrapperDiv.appendChild(midDiv);

    //create bottom div
    const bottomDiv = document.createElement('div');
    bottomDiv.classList.add('bottom-div');
    midDiv.appendChild(bottomDiv);

    //create name span
    const listName = document.createElement('span');
    listName.classList.add('list-name');
    listName.innerText = dog.name;
    bottomDiv.appendChild(listName);

    //create svg
    const statusIcon = document.createElement('i');
    statusIcon.classList.add(...unlikeClasses);
    bottomDiv.appendChild(statusIcon);

    //create match span
    const dogMatch = document.createElement('span');
    dogMatch.classList.add('dog-match');
    dogMatch.innerText = `You have unmatched ${dog.name}. 😢`;
    midDiv.appendChild(dogMatch);

    dogLi.appendChild(wrapperDiv);
    dogList.appendChild(dogLi);
    saveToLocal(dog);
    getDogImages();
}

function addLike() {
    dog.status = 'liked';
    //create list element
    const dogLi = document.createElement('li');
    dogLi.classList.add('list');

    //create img element
    const listImage = document.createElement('img');
    listImage.classList.add('list-image');
    listImage.src = dog.image;
    dogLi.appendChild(listImage);

    //create wrapper div
    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('wrapper-div');

    //create inner div
    const midDiv = document.createElement('div');
    midDiv.classList.add('mid-div');
    wrapperDiv.appendChild(midDiv);

    //create bottom div
    const bottomDiv = document.createElement('div');
    bottomDiv.classList.add('bottom-div');
    midDiv.appendChild(bottomDiv);

    //create name span
    const listName = document.createElement('span');
    listName.classList.add('list-name');
    console.log(dog.name);
    listName.innerText = dog.name;
    bottomDiv.appendChild(listName);

    //create svg
    const statusIcon = document.createElement('i');
    statusIcon.classList.add(...likeClasses);
    bottomDiv.appendChild(statusIcon);

    //create match span
    const dogMatch = document.createElement('span');
    dogMatch.classList.add('dog-match');
    dogMatch.innerText = `You matched with ${dog.name}. 😄`;
    midDiv.appendChild(dogMatch);

    dogLi.appendChild(wrapperDiv);
    dogList.appendChild(dogLi);
    saveToLocal(dog);
    getDogImages();
}

function addSuperlike() {
    dog.status = 'superliked';
    //create list element
    const dogLi = document.createElement('li');
    dogLi.classList.add('list');

    //create img element
    const listImage = document.createElement('img');
    listImage.classList.add('list-image');
    listImage.src = dog.image;
    dogLi.appendChild(listImage);

    //create wrapper div
    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('wrapper-div');

    //create inner div
    const midDiv = document.createElement('div');
    midDiv.classList.add('mid-div');
    wrapperDiv.appendChild(midDiv);

    //create bottom div
    const bottomDiv = document.createElement('div');
    bottomDiv.classList.add('bottom-div');
    midDiv.appendChild(bottomDiv);

    //create name span
    const listName = document.createElement('span');
    listName.classList.add('list-name');
    console.log(dog.name);
    listName.innerText = dog.name;
    bottomDiv.appendChild(listName);

    //create svg
    const statusIcon = document.createElement('i');
    statusIcon.classList.add(...superlikeClasses);
    bottomDiv.appendChild(statusIcon);

        
    //create match span
    const dogMatch = document.createElement('span');
    dogMatch.classList.add('dog-match');
    dogMatch.innerText = `You really like ${dog.name}. 😍`;
    midDiv.appendChild(dogMatch);

    dogLi.appendChild(wrapperDiv);
    dogList.appendChild(dogLi);
    saveToLocal(dog);
    getDogImages();
}

function saveToLocal(dog) {
    let dogs;
    if(localStorage.getItem('dogs') === null) {
        dogs = [];
    }
    else {
        dogs = JSON.parse(localStorage.getItem('dogs'));
    }
    dogs.push(dog);
    localStorage.setItem('dogs', JSON.stringify(dogs));
}

function getLocalStorage() {
    let dogs;
    if(localStorage.getItem('dogs') === null) {
        dogs = [];
    }
    else {
        dogs = JSON.parse(localStorage.getItem('dogs'));
    }
    dogs.forEach(function(dog) {
            //create list element
    const dogLi = document.createElement('li');
    dogLi.classList.add('list');

    //create img element
    const listImage = document.createElement('img');
    listImage.classList.add('list-image');
    listImage.src = dog.image;
    dogLi.appendChild(listImage);

    //create wrapper div
    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('wrapper-div');

    //create inner div
    const midDiv = document.createElement('div');
    midDiv.classList.add('mid-div');
    wrapperDiv.appendChild(midDiv);

    //create bottom div
    const bottomDiv = document.createElement('div');
    bottomDiv.classList.add('bottom-div');
    midDiv.appendChild(bottomDiv);

    //create name span
    const listName = document.createElement('span');
    listName.classList.add('list-name');
    console.log(dog.name);
    listName.innerText = dog.name;
    bottomDiv.appendChild(listName);

    //create svg
    const statusIcon = document.createElement('i');
    if(dog.status === 'unliked') {
        statusIcon.classList.add(...unlikeClasses);
        bottomDiv.appendChild(statusIcon);
    }
    else if(dog.status === 'liked') {
        statusIcon.classList.add(...likeClasses);
        bottomDiv.appendChild(statusIcon);
    }
    else if(dog.status === 'superliked') {
        statusIcon.classList.add(...superlikeClasses);
        bottomDiv.appendChild(statusIcon);
    }


        
    //create match span
    const dogMatch = document.createElement('span');
    dogMatch.classList.add('dog-match');
    dogMatch.innerText = `You really like ${dog.name}. 😍`;
    midDiv.appendChild(dogMatch);

    dogLi.appendChild(wrapperDiv);
    dogList.appendChild(dogLi);
    })
}