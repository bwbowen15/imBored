function idea(){
    //remove();
    const h1 = document.createElement('h1');
    h1.textContent = ideas[random()];
    const ideaArea = document.querySelector('.ideaArea');
    ideaArea.appendChild(h1);
}

//generates a random number based on the length of the list
function random(){
    return Math.floor(Math.random() * ideas.length-1);
}

//removes last suggestion
function remove(){
    const ideaArea = document.querySelector('.ideaArea');
    let h1 = ideaArea.querySelector('h1');
    ideaArea.removeChild(h1);
}


let ideas = new Array('Take a walk', 'Make some art', 'Watch a movie', 'Read a book', 'Cook some food', 'play a board game');