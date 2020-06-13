const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liList = document.querySelectorAll('li');

const findCar = (e) => {
   const findCar = e.target.value.toUpperCase()
   let car = [...liList]
   car = car.filter(li => li.textContent.toLocaleUpperCase().includes(findCar))
   ul.textContent = '';
   car.forEach(li => ul.appendChild(li))

}

input.addEventListener('input', findCar);