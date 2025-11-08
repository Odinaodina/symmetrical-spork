const secArrow = document.querySelector('.s'),
    minArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),
    hourNum = document.querySelector('.hours'),
    minuteNum = document.querySelector('.minutes');

// new Date() - bu object komputerimizdagi vaqtni olib beradi
function clock() {
    let time = new Date(),
        second = time.getSeconds(),
        minute = time.getMinutes(),
        hour = time.getHours()

    secArrow.style.transform = `rotate(${second * 6}deg)`
    minArrow.style.transform = `rotate(${minute * 6}deg)`
    hourArrow.style.transform = `rotate(${hour * 30}deg)`

    setTimeout(() => {
        clock()
    }, 1000);

    hourNum.innerHTML = hour < 10 ? "0" + hour : hour
    minuteNum.innerHTML = minute < 10 ? "0" + minute : minute

}

clock()


const tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContentItem = document.querySelectorAll('.tabsContentItem');

// tabsItem.forEach((item, i) => {
//     item.addEventListener("click", (e) => {
//         e.preventDefault()
//         tabsItem.forEach((el, j) => {
//             el.classList.remove('active')
//             tabsContentItem[j].classList.remove('active')
//         })
//         item.classList.add('active')
//         tabsContentItem[i].classList.add('active')
//     })
// })

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', (e) => {
        e.preventDefault()
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove('active')
            tabsContentItem[j].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
}


const timerBtn = document.querySelector(".stopwatch__btn");
const timerSeconds = document.querySelector(".stopwatch__seconds");

function timer() {
  let timeout;
  let seconds = 0;

  function sec() {
    seconds++;
    if (seconds < 10) {
      timerSeconds.innerHTML = "0" + seconds;
    } else {
      timerSeconds.innerHTML = seconds;
    }
    timeout = setTimeout(sec, 1000);
  }

  timerBtn.addEventListener("click", () => {
    if (timerBtn.innerHTML === "start") {
      timerBtn.innerHTML = "stop";
      sec();
    } else if (timerBtn.innerHTML === "stop") {
      clearTimeout(timeout);
      timerBtn.innerHTML = "clear";
    } else if (timerBtn.innerHTML === "clear") {
      clearTimeout(timeout);
      seconds = 0;
      timerSeconds.innerHTML = "00";
      timerBtn.innerHTML = "start";
    }
  });
}

timer();
