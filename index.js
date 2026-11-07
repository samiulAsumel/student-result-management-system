'use strict';

const studentName = 'Samiul';

const marks = [85, 78, 92, 67, 88, 90, 100, 56, 70, 100];

function calculateResult(scores) {
  if (scores.length !== 10) {
    console.log('Exactly 10 subjects required');
    return;
  }

  let total = 0;
  let passed = true;

  for (let i = 0; i < scores.length; i++) {
    const mark = scores[i];

    if (!Number.isFinite(mark) || mark < 0 || mark > 100) {
      console.log('Invalid marks');
      return;
    }

    total += mark;

    if (mark < 33) {
      passed = false;
    }
  }

  const average = total / scores.length;
  let grade;

  if (!passed || average < 33) {
    grade = 'F';
  } else if (average >= 80) {
    grade = 'A+';
  } else if (average >= 70) {
    grade = 'A';
  } else if (average >= 60) {
    grade = 'A-';
  } else if (average >= 50) {
    grade = 'B';
  } else if (average >= 40) {
    grade = 'C';
  } else {
    grade = 'D';
  }

  console.log('Student:', studentName);
  console.log('Total:', total);
  console.log('Average:', average.toFixed(2));
  console.log('Grade:', grade);
  console.log('Result:', passed ? 'PASS' : 'FAIL');
}

calculateResult(marks);
