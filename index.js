function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', addingEventListener);
    alert('I was clicked!');

}
addingEventListener();

/*const input = document.getElementById('input');

function addingEventListener() {
    alert('I was clicked!');
}

input.addEventListener('click', addingEventListener);*/

