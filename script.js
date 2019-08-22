let button = document.getElementById('button');
let text = document.getElementById('text');

//document.getElementById("button").addEventListener("click", function(){
//  document.getElementById("text").innerHTML = "ey";
//});

button.addEventListener('click', onButtonClicked);

function onButtonClicked() {
    if (text.style.display == 'none') {
        text.style.display = '';
        document.getElementById('button').innerHTML = "Hide"
    } else {
        text.style.display = 'none';
        document.getElementById('button').innerHTML = "Show"
    }
}