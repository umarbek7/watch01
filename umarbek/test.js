
function timeShower() {
    let timNow = new Date();
  
    let hour  = timNow.getHours();
    hour.toString().length < 2 ? hour = "0" + hour : hour;
    document.querySelector(".soat").textContent = hour
  
  
    let min = timNow.getMinutes();
    min.toString().length < 2 ? min = "0" + min : min;
    document.querySelector(".minut").textContent = min;
  
    let sec = timNow.getSeconds();
    sec.toString().length < 2 ? sec = "0" + sec : sec;
    document.querySelector(".sekund").textContent = sec;
    
  }
  
  timeShower();
  
  setInterval(timeShower, 1000);