const title = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px;')        //Sobrescreve totalmente o que estava no 'style' antes

console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';        //add margin
title.style.color = 'white';      //add color
title.style.fontSize = '60px';      //add font-size
title.style.margin = '';            //remove margin