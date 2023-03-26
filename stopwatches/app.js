const app = Vue.createApp({
  data() {
    return {
      stopwatch: [
        {
          hours: 1,
          minutes: 0,
          seconds: 0,
          running: false,
          intervalId: 0,
        },
        {
          hours: 0,
          minutes: 2,
          seconds: 0,
          running: false,
          intervalId: 0,
        },
        {
          hours: 0,
          minutes: 0,
          seconds: 0,
          running: false,
          intervalId: 0,
        },
        {
          hours: 0,
          minutes: 0,
          seconds: 0,
          running: false,
          intervalId: 0,
        },
        {
          hours: 0,
          minutes: 0,
          seconds: 0,
          running: false,
          intervalId: 0,
        },
        {
          hours: 0,
          minutes: 0,
          seconds: 0,
          running: false,
          intervalId: 0,
        },
        {
          hours: 0,
          minutes: 0,
          seconds: 0,
          running: false,
          intervalId: 0,
        },
      ],
    };
  },
  methods: {
    addStopwatch() {
      let item = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        running: false,
        intervalId: 0,
      };
      this.stopwatch.push(item);
    },
    reset(x) {
      this.stopwatch[x].hours = 0;
      this.stopwatch[x].minutes = 0;
      this.stopwatch[x].seconds = 0;
    },
    run(x) {
      if (!this.stopwatch[x].running) {
        this.stopwatch[x].running = true;
        const interval = setInterval(() => {
          if (this.stopwatch[x].seconds == 59) {
            this.stopwatch[x].seconds = 0;
            if (this.stopwatch[x].minutes == 59) {
              this.stopwatch[x].minutes = 0;
              this.stopwatch[x].hours++;
            } else {
              this.stopwatch[x].minutes++;
            }
          } else {
            this.stopwatch[x].seconds++;
          }
        }, 1000);
        this.stopwatch[x].intervalId = interval;
      } else {
        clearInterval(this.stopwatch[x].intervalId);
        this.stopwatch[x].intervalId = 0;
        this.stopwatch[x].running = false;
      }
    },
  },
});

app.mount("#app");
