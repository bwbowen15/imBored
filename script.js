//function to put an idea on the screen
function idea(){
    remove();
    const h1 = document.createElement('h1');
    h1.textContent = ideas[random()];
    const ideaArea = document.querySelector('.ideaArea');
    ideaArea.appendChild(h1);
    //console.log('add');
}

//generates a random number based on the length of the list
function random(){
    let num = Math.floor(Math.random() * ideas.length);
    //console.log(num);
    return num;
}

//removes last suggestion
function remove(){
    const ideaArea = document.querySelector('.ideaArea');
    let h1 = ideaArea.querySelector('h1');
    ideaArea.removeChild(h1);
    //console.log('remove');
}

//array of ideas to be randomly chosen from
let ideas = new Array('Take a walk', 'Make some art', 'Watch a movie', 'Read a book', 'Cook some food', 'play a board game', 'Discover some new music', 'Play video games', 'Take a nap', 'Clean your house', 'Go to the gym');