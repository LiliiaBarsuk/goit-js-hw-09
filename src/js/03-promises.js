import Notiflix from 'notiflix';


const form = document.querySelector('form')

form.addEventListener('submit', onSubmit)
let amount
let delay
let delayStep 

let position

function onSubmit() {
  event.preventDefault()
  
     delay = Number(event.target[0].value)
     delayStep = Number(event.target[1].value)
     amount = Number(event.target[2].value)
 
  for (let i= 1; i <= amount; i +=1) {
      position = i
      
      createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      }); 
      delay += delayStep
  }
}


function createPromise(position, delay) {
 
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
  
   setTimeout(() => { 
    if (shouldResolve) {
    resolve({ position, delay });
  } else {
    reject({ position, delay });
  }
     }, delay)
  })
return promise
};


// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });