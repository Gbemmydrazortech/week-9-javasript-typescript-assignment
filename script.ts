/*-----Basic Types---------*/
let studentName: string = "Tunde";
let studentAge: number = 21;
let isEnrolled: boolean = true;

let courseName: string = "Frontend Development";

// Error correction:
// let courseName: number = "Frontend Development";
// This is incorrect because a string cannot be assigned to a number variable.

/*-------Function-------*/
function addNumbers(a: number, b: number): number {
  return a + b;
}

function isAdult(age: number): boolean {
  return age >= 18;
}

function getArea(width: number, height: number): number {
  return width * height;
}

console.log(addNumbers(10, 20));
console.log(isAdult(20));
console.log(getArea(8, 5));

/*------Objects and Interface-----*/
interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
  isActive: boolean;
}

const student1: Student = {
  id: 1,
  name: "Ada",
  age: 22,
  course: "Frontend Development",
  isActive: true
};

const student2: Student = {
  id: 2,
  name: "Bola",
  age: 24,
  course: "Backend Development",
  isActive: false
};

/*----Instructor Interface----*/
interface Instructor {
  name: string;
  cohort: number;
  subjects: string[];
}

function introduceInstructor(instructor: Instructor): string {
  return `${instructor.name} teaches Cohort ${instructor.cohort} and covers: ${instructor.subjects.join(", ")}`;
}

const instructor1: Instructor = {
  name: "Stanley",
  cohort: 8,
  subjects: ["HTML", "CSS", "JavaScript"]
};

console.log(introduceInstructor(instructor1));

/*----Arrays and Union Type------*/
let names: string[] = ["Ada", "Bola", "Chidi"];

let scores: number[] = [78, 90, 55, 88];

function formatId(id: string | number): string {
  return String(id);
}

console.log(names);
console.log(scores);
console.log(formatId(123));
console.log(formatId("STU001"));