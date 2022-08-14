import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    datetimePicker: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    timer: document.querySelector('.timer'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes'),
    seconds: document.querySelector('[data-seconds]'),
}
refs.startBtn.disabled = true;  
let pickedDate 

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        pickedDate = selectedDates[0];
        let currentTime = Date.now();
      if (selectedDates[0] < currentTime) {
        alert("Please choose a date in the future");
        refs.startBtn.disabled = true;
        return
      }  
    refs.startBtn.disabled = false;
   
   }

  };

flatpickr("#datetime-picker", options);

refs.startBtn.addEventListener('click', startTimer)

let intervalid
let deltaTime

function startTimer() {
    intervalid = setInterval(() => {
    const startTime = pickedDate.getTime();
    deltaTime = startTime - Date.now();
    
    const milliseconds = convertMs(deltaTime);
    // console.log(milliseconds);
    const { days, hours, minutes, seconds } = milliseconds;
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${minutes}`;
    refs.seconds.textContent = `${seconds}`;
    onStopTimer();
   }, 1000);

}

function onStopTimer() {
    if (deltaTime <= 1000 || deltaTime === 0) {
      btnStart.disabled = true;
      clearInterval(intervalId);
    }
 }

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
     // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    return { days, hours, minutes, seconds };
  }

  function addLeadingZero(value) {
    return String(value).padStart(2, `0`);
  }
  