const yellowVersion = document.querySelector('#yellow-version');
const greenVersion = document.querySelector('#green-version');
const YellowAndWhiteVersion = document.querySelector('#yellow-and-white-version');
const menu = document.querySelector('#menu');
const h2 = document.querySelector("#text-content h2");

menu.addEventListener('click', ()=>{
    const nav = document.querySelector('#menu-bar-mobile nav');
    const menuBg = document.querySelector('#menu-bg');
    menu.classList.toggle('change');
    nav.classList.toggle('change');
    menuBg.classList.toggle('change-bg');
})

yellowVersion.addEventListener('click', ()=>{
    changeColor('#BF9004');
    changeImage("assets/img/refri_1g.png");
    scale(yellowVersion, greenVersion, YellowAndWhiteVersion);
    changText("Schweppes Original Tonic")
})

greenVersion.addEventListener('click', ()=>{
    changeColor('#0AA605');
    changeImage("assets/img/refri_2g.png");
    scale(greenVersion, yellowVersion, YellowAndWhiteVersion);
    changText("Schweppes Citrus Original")
})

YellowAndWhiteVersion.addEventListener('click', ()=>{
    changeColor('#736029');
    changeImage("assets/img/refri_3g.png");
    scale(YellowAndWhiteVersion, greenVersion, yellowVersion, );
    changText("Schweppes Sugar Free Tonic")
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

function changText(txt){
    h2.innerHTML = txt
}