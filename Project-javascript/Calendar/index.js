const day = new Date();

const renderCalendar = () => {
  // The default start date is 0 so reset it to 1
  day.setDate(1);

  // Total number of days in the previous month
  const prevLastDays = new Date(day.getFullYear(), day.getMonth(), 0).getDate();

  // Total number of days in the month
  const getLastDays = new Date(
    day.getFullYear(),
    day.getMonth() + 1,
    0
  ).getDate();

  // Position of the first day of the month
  const firstDayIndex = day.getDay();

  // Position of the last day of the month
  const lastDayIndex = new Date(
    day.getFullYear(),
    day.getMonth() + 1,
    0
  ).getDay();
  // Empty cell of the future day of the month
  const nextDays = 7 - (lastDayIndex + 1);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //   The Days
  const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weeks = document.querySelector("#weeks");
  let theDay = "";
  for (let i = 0; i < daysInWeek.length; i++) {
    theDay += `<div class="font-medium w-[calc(360px/7)] h-12  flex justify-center text-sm items-center">${daysInWeek[i]}</div>`;
  }
  weeks.innerHTML = theDay;

  //   Current date, month, year information
  document.querySelector("#month-present").innerHTML = months[day.getMonth()];
  document.querySelector("#calender-present").innerHTML = day.toDateString();
  const monthDays = document.querySelector("#monthDays");

  let days = " ";

  // Past
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date opacity-50 font-medium w-[calc(360px/7)] h-12 flex justify-center items-center text-sm">${
      prevLastDays - x + 1
    }</div>`;
  }

  // Prisent
  for (let i = 1; i <= getLastDays; i++) {
    if (
      i === new Date().getDate() &&
      day.getMonth() === new Date().getMonth() &&
      day.getFullYear() === new Date().getFullYear()
    ) {
      days += `<div class="bg-blue-300 rounded-sm shadow-lg font-medium w-[calc(360px/7)] h-12 flex justify-center text-sm items-center">${i}</div>`;
    } else {
      days += `<div class="font-medium w-[calc(360px/7)] h-12  flex justify-center text-sm items-center">${i}</div>`;
    }

    monthDays.innerHTML = days;
  }

  // Future
  for (let i = 1; i <= nextDays; i++) {
    days += `<div class="next-date opacity-50 drop-shadow-md font-medium w-[calc(360px/7)] text-sm h-12 flex justify-center items-center">${i}</div>`;
    monthDays.innerHTML = days;
  }
};

// Previous Month Button
const prev = document.querySelector(".fa-angle-left");
prev.addEventListener("click", () => {
  day.setMonth(day.getMonth() - 1);

  renderCalendar();
});

// Next Month Button
const next = document.querySelector(".fa-angle-right");
next.addEventListener("click", () => {
  day.setMonth(day.getMonth() + 1);

  renderCalendar();
});

renderCalendar();
