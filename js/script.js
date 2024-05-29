document.addEventListener("DOMContentLoaded", function () {
  // Countdown Timer
  const countdown = document.getElementById("countdown");
  const eventDate = new Date("2024-06-16T00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `
          <div>
              ${days}<span>Days</span>
          </div>
          <div>
              ${hours}<span>Hours</span>
          </div>
          <div>
              ${minutes}<span>Minutes</span>
          </div>
          <div>
              ${seconds}<span>Seconds</span>
          </div>
      `;

    if (distance < 0) {
      clearInterval(interval);
      countdown.innerHTML = "Event Started!";
    }
  }

  const interval = setInterval(updateCountdown, 1000);
  updateCountdown();
});
