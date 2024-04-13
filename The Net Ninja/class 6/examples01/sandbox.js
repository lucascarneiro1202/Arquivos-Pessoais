const people = ['lucas', 'julia', 'roberto', 'leticia'];

let content = document.querySelector('.content');

people.forEach(person => {
    content.innerHTML += `<h4>${person}</h4>`
})

// let person = document.querySelector('');
// console.log(person)