const yellowVersion = document.querySelector('#yellow-version');
const greenVersion = document.querySelector('#green-version');
const YellowAndWhiteVersion = document.querySelector('#yellow-and-white-version');

yellowVersion.addEventListener('click', ()=>{
    changeColor('#BF9004');
    changeImage("assets/img/refri_1m.png");
    scale(yellowVersion, greenVersion, YellowAndWhiteVersion);
    
})

greenVersion.addEventListener('click', ()=>{
    changeColor('#0AA605');
    changeImage("assets/img/refri_2m.png");
    scale(greenVersion, yellowVersion, YellowAndWhiteVersion);
})

YellowAndWhiteVersion.addEventListener('click', ()=>{
    changeColor('#736029');
    changeImage("assets/img/refri_3m.png");
    scale(YellowAndWhiteVersion, greenVersion, yellowVersion, );
})

function changeColor(color){
    document.querySelector('body').style.backgroundColor = color;
}

function changeImage(link){
    document.getElementById('main-image').src = link;
}

function scale(chosen, other1, other2){
    chosen.classList.add('chosen');
    other1.classList.remove('chosen');
    other2.classList.remove('chosen');
}