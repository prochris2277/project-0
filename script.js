 function displayTime() {
    const now = new Date();

    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear() % 100;

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let ampm = "AM";
    if (hours >= 12) {
      ampm = "PM";
    }

    if (hours > 12) {
      hours = hours - 12;
    }

    if (hours === 0) {
      hours = 12;
    }

    const date =
      day + "/" + month + "/" + year;

    const time =
      hours + ":" + minutes + ":" + seconds + " " + ampm;

    document.getElementById("date-time").innerText =
      date + "  " + time;
  }

  displayTime();
  setInterval(displayTime, 1000);