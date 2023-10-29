function updateTime() {
    const time = document.querySelectorAll(".timer span");
    const now = new Date();
    const lunchDate = new Date(2025, 11, 5, 24, 0, 0); 
  
    const timeRem = lunchDate - now;
    const days = Math.floor(timeRem / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRem % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((timeRem % (1000 * 60 * 60) / (1000 * 60)));
    const secs = Math.floor((timeRem % (1000 * 60) / 1000));
  
    time[0].textContent = days.toString().padStart(3, '0');
    time[1].textContent = hours.toString().padStart(2, '0');
    time[2].textContent = mins.toString().padStart(2, '0');
    time[3].textContent = secs.toString().padStart(2, '0');
  }
  
  updateTime();
  
  const timeInt = setInterval(updateTime, 1000);
  