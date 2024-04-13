const Name = prompt('Qual seu nome?');
const Age = prompt('Quantos anos você tem?');
const School = prompt('Qual escola você estuda?');
const Subject = prompt('Qual sua matéria favorita?');

const name = document.querySelector('#first');
const age = document.querySelector('#second');
const school = document.querySelector('#third');
const subject = document.querySelector('#fourth');

name.innerText += ` ${Name}.`;
age.innerText += ` ${Age} anos.`;
school.innerText += ` ${School}.`;
subject.innerText += ` ${Subject}.`;