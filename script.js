//retorne no console todas as imagens do site:
const img = document.querySelectorAll("img")
console.log(img);

//retorne no console apenas as imagens que começaram com a palavra animal
const imgAnimais = document.querySelectorAll("img[src^='img/animal']")
console.log(imgAnimais);

//selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll("[href^='#']")
console.log(linksInterno);

//selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector(".animais-descricao h2")
console.log(h2Animais);

//selecione o último p do site
const todosOsP = document.querySelectorAll("p")
console.log(todosOsP);
console.log(todosOsP[23]);
console.log(todosOsP.length);
