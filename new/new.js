var list = document.getElementById('buttons');

var b1 = document.getElementsByClassName('blue');


function blueFunction(){
    console.log(list);
}


b1.addEventListener('click', blueFunction);
