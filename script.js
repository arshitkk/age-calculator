let birthDateInput = document.querySelector(".birthDate");
let currDateInput = document.querySelector(".currDate");
let final = document.querySelector(".final");
let button = document.querySelector("button");

let year;
let month;
let day;

function calAge() {
  if (birthDateInput.value && currDateInput.value) {
    const birthDate = new Date(birthDateInput.value);
    const currDate = new Date(currDateInput.value);

    // const [bYear,bMonth,bDate] = birthDate.value.split('-');
    // const [cYear,cMonth,cDate] = currDate.value.split('-');

    if (birthDate <= currDate) {
      // Extract year, month, and day
      const bYear = birthDate.getFullYear();
      const bMonth = birthDate.getMonth(); // 0-indexed
      const bDay = birthDate.getDate();
      const cYear = currDate.getFullYear();
      const cMonth = currDate.getMonth();
      const cDay = currDate.getDate();

      year = cYear - bYear;
      month = cMonth - bMonth;
      day = cDay - bDay;
      if (day < 0) {
        month--;
        // Calculate days in the previous month
        day += new Date(cYear, cMonth - 1, 0).getDate();
      }

      // Adjust for negative months
      if (month < 0) {
        year--;
        month += 12;
      }

      const Age = ` <div class=" final result">You are <b>${year}</b> Years, <b>${month}</    b>  Month and <b>${day}</b> Days Old </div>`;
      final.innerHTML = Age;
      final.classList.remove("displayNone");
      console.log(year);
    }
  } else {
    Age = `<div class="final warning">THE BIRTH DATE SHOULD NOT BE GREATER THAN THE CURRENT DAY</div>`;
    final.innerHTML = `<div class="final warning">THE BIRTH DATE SHOULD NOT BE GREATER THAN THE CURRENT DAY</div>`;
    final.classList.remove("displayNone");
    console.log("oye galti hogyi bhai");
  }
}

button.addEventListener("click", calAge);
