const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
teachers.forEach(function (currentTeacher) {
  reversedTeachers.unshift(currentTeacher);
});
console.table(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
teachers.forEach(function (currentTeacher) {
  if (currentTeacher.length >= 5) {
    longNames.push(currentTeacher);
  }
});
console.table(longNames);
// CON FILTER
const longNames2 = teachers.filter(function (currentTeacher) {
  return currentTeacher.length >= 5;
});
console.table(longNames2);

// 3. Rimuovi 'Ed' dall'array teachers
const deletedTeachers = teachers.splice(1, 1);
console.log(deletedTeachers);

console.table(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
teachers.forEach(function (currentTeacher) {
  const isFabioPresent = currentTeacher === "Fabio" ? true : false;
  console.log(isFabioPresent);
});
// CON INCLUDES
const isFabioPresent = teachers.includes("Fabio");
console.log(isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join();
console.log(teachersString);
