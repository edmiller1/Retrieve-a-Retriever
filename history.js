let dogStatus = '';
let dog = {};
let unlikeClasses = ['fas', 'fa-times', 'unlike'];
let likeClasses = ['fas', 'fa-heart', 'like'];
let superlikeClasses = ['fas', 'fa-star', 'super-like'];

const dogList = document.querySelector('.dog-list');

document.addEventListener('DOMContentLoaded', getLocalStorage);

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