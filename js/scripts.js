
//when alert "x" is clicked, hide alert and decrease alert area height
let x = document.querySelector('.alert-x');
x.addEventListener('click', () => {
    let alertBar = document.querySelector('.alert-bar');
    let alertArea = document.querySelector('.alert');
    alertBar.style.display = "none";
    alertArea.style.height = "10px";
});