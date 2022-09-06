// ZNAJDZ KURWA DEBILU ZEBY TE ARRAYE NIE BYLY
// WYPISYWANE MANUALNIE ;D
// *WYŚWIETL OD DANEJ KOMÓRKI - CZY COS TAKIEGO
//
//   PEACE !

let arrayC = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

/*
const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

i = 0;
const wypisywanie = function() {
 for (i = 0, i )
}


const firstString = prompt("First string is tuned to?");
if (firstString == 'c' && 'C') {
    console.log(notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11]);
} else if (firstString == 'c#') {
    console.log(notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0]);
} else if (firstString == 'd') {
    console.log(notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1]);
} else if (firstString == 'd#') {
    console.log(notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2]);
} else if (firstString == 'e') {
    console.log(notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3]);
} else if (firstString == 'f') {
    console.log(notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4]);
} else if (firstString == 'f#') {
    console.log(notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5]);
} else if (firstString == 'g') {
    console.log(notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6]);
} else if (firstString == 'g#') {
    console.log(notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7]);
} else if (firstString == 'a') {
    console.log(notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8]);
} else if (firstString == 'a#') {
    console.log(notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9]);
} else if (firstString == 'b') {
    console.log(notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10]);
} else {
    console.log(' wpisz dobry dzwiek kurwa debilu jebany');
    return firstString;
}


const secondString = prompt("Second string is tuned to?");
if (secondString == 'c') {
    console.log(notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11]);
} else if (secondString == 'c#') {
    console.log(notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0]);
} else if (secondString == 'd') {
    console.log(notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1]);
} else if (secondString == 'd#') {
    console.log(notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2]);
} else if (secondString == 'e') {
    console.log(notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3]);
} else if (secondString == 'f') {
    console.log(notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4]);
} else if (secondString == 'f#') {
    console.log(notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5]);
} else if (secondString == 'g') {
    console.log(notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6]);
} else if (secondString == 'g#') {
    console.log(notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7]);
} else if (secondString == 'a') {
    console.log(notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8]);
} else if (secondString == 'a#') {
    console.log(notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9]);
} else if (secondString == 'b') {
    console.log(notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10]);
} else {
    console.log(' wpisz dobry dzwiek kurwa debilu jebany');
}

const thirdString = prompt("Third string is tuned to?");
if (thirdString == 'c') {
    console.log(notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11]);
} else if (thirdString == 'c#') {
    console.log(notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0]);
} else if (thirdString == 'd') {
    console.log(notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1]);
} else if (thirdString == 'd#') {
    console.log(notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2]);
} else if (thirdString == 'e') {
    console.log(notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3]);
} else if (thirdString == 'f') {
    console.log(notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4]);
} else if (thirdString == 'f#') {
    console.log(notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5]);
} else if (thirdString == 'g') {
    console.log(notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6]);
} else if (thirdString == 'g#') {
    console.log(notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7]);
} else if (thirdString == 'a') {
    console.log(notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8]);
} else if (thirdString == 'a#') {
    console.log(notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9]);
} else if (thirdString == 'b') {
    console.log(notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10]);
} else {
    console.log(' wpisz dobry dzwiek kurwa debilu jebany');
}

const fourthString = prompt("Fourth string is tuned to?");
if (fourthString == 'c') {
    console.log(notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11]);
} else if (fourthString == 'c#') {
    console.log(notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0]);
} else if (fourthString == 'd') {
    console.log(notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1]);
} else if (fourthString == 'd#') {
    console.log(notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2]);
} else if (fourthString == 'e') {
    console.log(notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3]);
} else if (fourthString == 'f') {
    console.log(notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4]);
} else if (fourthString == 'f#') {
    console.log(notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5]);
} else if (fourthString == 'g') {
    console.log(notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6]);
} else if (fourthString == 'g#') {
    console.log(notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7]);
} else if (fourthString == 'a') {
    console.log(notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8]);
} else if (fourthString == 'a#') {
    console.log(notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9]);
} else if (fourthString == 'b') {
    console.log(notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10]);
} else {
    console.log(' wpisz dobry dzwiek kurwa debilu jebany');
}

const fifthString = prompt("Fifth string is tuned to?");
if (fifthString == 'c') {
    console.log(notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11]);
} else if (fifthString == 'c#') {
    console.log(notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0]);
} else if (fifthString == 'd') {
    console.log(notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1]);
} else if (fifthString == 'd#') {
    console.log(notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2]);
} else if (fifthString == 'e') {
    console.log(notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3]);
} else if (fifthString == 'f') {
    console.log(notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4]);
} else if (fifthString == 'f#') {
    console.log(notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5]);
} else if (fifthString == 'g') {
    console.log(notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6]);
} else if (fifthString == 'g#') {
    console.log(notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7]);
} else if (fifthString == 'a') {
    console.log(notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8]);
} else if (fifthString == 'a#') {
    console.log(notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9]);
} else if (fifthString == 'b') {
    console.log(notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10]);
} else {
    console.log(' wpisz dobry dzwiek kurwa debilu jebany');
}

const sixthString = prompt("Sixth string is tuned to?");
if (sixthString == 'c') {
    console.log(notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11]);
} else if (sixthString == 'c#') {
    console.log(notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0]);
} else if (sixthString == 'd') {
    console.log(notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1]);
} else if (sixthString == 'd#') {
    console.log(notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2]);
} else if (sixthString == 'e') {
    console.log(notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3]);
} else if (sixthString == 'f') {
    console.log(notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4]);
} else if (sixthString == 'f#') {
    console.log(notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5]);
} else if (sixthString == 'g') {
    console.log(notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6]);
} else if (sixthString == 'g#') {
    console.log(notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7]);
} else if (sixthString == 'a') {
    console.log(notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8]);
} else if (sixthString == 'a#') {
    console.log(notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9]);
} else if (sixthString == 'b') {
    console.log(notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10]);
} else {
    console.log(' wpisz dobry dzwiek kurwa debilu jebany');
}

const seventhString = prompt("Seventh string is tuned to?");
if (seventhString == 'c') {
    console.log(notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11]);
} else if (seventhString == 'c#') {
    console.log(notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0]);
} else if (seventhString == 'd') {
    console.log(notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1]);
} else if (seventhString == 'd#') {
    console.log(notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2]);
} else if (seventhString == 'e') {
    console.log(notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3]);
} else if (seventhString == 'f') {
    console.log(notes[5], notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4]);
} else if (seventhString == 'f#') {
    console.log(notes[6], notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5]);
} else if (seventhString == 'g') {
    console.log(notes[7], notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6]);
} else if (seventhString == 'g#') {
    console.log(notes[8], notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7]);
} else if (seventhString == 'a') {
    console.log(notes[9], notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8]);
} else if (seventhString == 'a#') {
    console.log(notes[10], notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9]);
} else if (seventhString == 'b') {
    console.log(notes[11], notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], notes[6], notes[7], notes[8], notes[9], notes[10]);
} else {
    console.log(' wpisz dobry dzwiek kurwa debilu jebany');
}


*/
