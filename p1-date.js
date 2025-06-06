/* 
CIT 281 Project 1
Name: Ulys Chauncey Drumrongthai
*/

/* ------------------------------- INITIALIZE ------------------------------- */
const date = new Date(); // <- Gets the current date.
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; // <- Array containing all days of the week.
const dayOfWeek = days[date.getDay()]; // <- Indexs the array for the current day using the date variable.

console.log(dayOfWeek); // <- Outputs into the console.

