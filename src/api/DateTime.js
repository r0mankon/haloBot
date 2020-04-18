export default class DateTime {
  constructor() {
    this.date = new Date();
    this.time = new Date(Date.now());
  }

  getTime() {
    return `The Time is ${this.time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })}`;
  }

  getMonthName() {
    const monthNumber = this.date.getMonth();
    const monthNames = [
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

    const currentMonthName = monthNames[monthNumber];

    return currentMonthName;
  }

  getDate() {
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    this.date.setDate(this.date.getDate());
    let date =
      "Today is " +
      dayNames[this.date.getDay()] +
      ", " +
      this.date.getDate() +
      " " +
      this.getMonthName() +
      ", " +
      this.date.getFullYear();

    return date;
  }
}
