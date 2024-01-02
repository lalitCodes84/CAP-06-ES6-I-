
class Counter {
    constructor() {
      this.value = 0;
      this.intervalId = null;
      this.manualMode = false;

      document.getElementById('toggleButton').addEventListener('click', () => this.toggleCounter());
      document.getElementById('incrementButton').addEventListener('click', () => this.increment());
      document.getElementById('decrementButton').addEventListener('click', () => this.decrement());
    }

    toggleCounter() {
      if (this.manualMode) {
        // If in manual mode, stop the counter
        clearInterval(this.intervalId);
      } else {
        // If in automatic mode, start the counter
        this.intervalId = setInterval(() => this.increment(), 1000);
      }

      // Toggle between manual and automatic modes
      this.manualMode = !this.manualMode;
      document.getElementById('toggleButton').textContent = this.manualMode ? 'Start' : 'Stop';
    }

    increment() {
      this.value++;
      this.updateCounterValue();
    }

    decrement() {
      this.value--;
      this.updateCounterValue();
    }

    updateCounterValue() {
      document.getElementById('counterValue').textContent = this.value;
    }
  }

  // Create an instance of the Counter class
  const counter = new Counter();
