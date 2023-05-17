const birthYear = 1990;
const age = calculateAge(birthYear);


function calculateAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  return age;
}


console.log(age);
