class CountDownTimer {
   constructor () {
      this.currentYear = new Date().getFullYear()
      this.nextNewYear = new Date(`Jan 1, ${this.currentYear + 1}, 00:00`).getTime();
      // this.nextNewYear = new Date(`Jan 1, 2027, 00:00`).getTime();
      this.days = document.getElementById('d');
      this.hours = document.getElementById('h');
      this.minutes = document.getElementById('m');
      this.seconds = document.getElementById('s');
      this.title = document.getElementById('title').innerHTML = `Until the new <span class="year">${new Date(this.nextNewYear).getFullYear()}</span>`
      this.times = [ this.days, this.hours, this.minutes, this.seconds ];
   }
   
   
   showTime() {
     let timeLeft = this.calculate();
     if (timeLeft) { 
      this.times.forEach( (e, i) => {
         e.innerText = timeLeft[i]
      });
         setTimeout ( () => {        
            this.showTime()
         }, 1000)
         
      } 
      else {
         this.times.forEach( e => e.innerText = 0 )
      }
   }

   calculate() {
      let days, hours, mins, secs, calcTimes, diff;
      this.now = Date.now()

      diff = Math.floor(this.nextNewYear - this.now);

      if ( diff <= 0 ) {
         return null
      } else {
         days = Math.floor(diff / 86400000);
         hours = Math.floor(diff / 3600 / 1000 % 24) ;
         mins = Math.floor(diff / 1000 / 60 % 60);
         secs  = Math.floor(diff / 1000 % 60);

         calcTimes = [days, hours, mins, secs]

         return calcTimes.map( (e, i) => { 
            return i === 0 ? e : e < 10 ? `0${e}` : e
         })

      }



   }
}

new CountDownTimer().showTime()