const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  timerId: null,

  startTimer() {

    if (this.timerId === null) {
      this.timerId = setInterval(() => {
        this.secondsPassed += 1;
        if (this.secondsPassed === 60) {
          this.minsPassed += 1;
          this.secondsPassed = 0;
        }
      }, 1000);
    }
  },

  stopTimer() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }

  },

  getTime() {
    const minutes = String(this.minsPassed);
    const seconds = String(this.secondsPassed).padStart(2, "0");
    return `${minutes}:${seconds}`
  },

  resetTimer() {
    this.stopTimer();
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
}

timer.startTimer();


setTimeout(() => {
  timer.stopTimer();
  console.log('Timer stopped');
  console.log('Current time:', timer.getTime());

  // Запускаемо таймер знову через 5 секунд
  setTimeout(() => {
    timer.startTimer();
    console.log('Timer restarted');

    // зупиняємо таймер знову через 5 секунд після перезапуска
    setTimeout(() => {
      timer.stopTimer();
      console.log('Timer stopped again');
      console.log('Current time:', timer.getTime());
    }, 5000);
  }, 5000);

}, 3000); // зупиняємо таймер через 3 секунд