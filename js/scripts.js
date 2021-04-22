var counter = 0;
var colors = {};
function createBlock() {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    counter ++;
    var section = document.createElement("section");
    section.className = "image";
    section.id = "section" + counter;
    section.style.backgroundColor = randomColor;
    
    var newBlock = document.createElement("section");
    newBlock.className = "backImg";

    if (counter == 1) {
        newBlock.style.backgroundImage = 'url(images/plus.png)';
        newBlock.classList.add('pointer');
        newBlock.onclick = createBlock;
    }
    else
    {
        newBlock.style.backgroundImage = 'url(images/joey.png)';
        newBlock.style.display = 'none';
        newBlock.id = 'img' + counter;
        section.setAttribute("onClick", 'clickToChange(\'' + counter + '\')');
        colors[counter] = section.style.backgroundColor;
    }

    if (counter % 3 == 0)
    {
    var star = document.createElement('section');
    star.className = "star";
    section.appendChild(star);
    }
    section.appendChild(newBlock);
    document.getElementsByClassName('mainSquare')[0].appendChild(section);
}

var lastName = 'Ezra'.length*2;
function mainBlocks() {
    for (var i = 0; i <lastName; i++) {
        createBlock(); 
    }
}

function clickToChange(image) {

    var id = image;
    var section = "section" + image;
    console.log(image);
    image = 'img' + image;
    console.log(image);
    if (document.getElementById(image).style.display == 'block') {
        document.getElementById(image).style.display = 'none';
        document.getElementById(section).style.backgroundColor = colors[id];
       
    }
    else {
        document.getElementById(image).style.display = 'block';
        document.getElementById(section).style.backgroundColor = "#ffffff";
    }
}