export class DateTime {
  static date = new Date();
  static time = new Date(Date.now());

  static getTime() {
    return `The Time is ${this.time.toLocaleString("default", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    })}`;
  }

  static getMonthName() {
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

  static getDate() {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const date = `Today is ${
      dayNames[this.date.getDay()]
    }, ${this.getMonthName()} ${this.date.getDate()}, ${this.date.getFullYear()}`;

    return date;
  }
}
