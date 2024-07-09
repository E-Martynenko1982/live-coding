import { User } from "./user.js";
import { Student } from "./student.js";

const user = new User(1, 'John', 'Doe');
console.log(user.getFullName());


const student = new Student(1, "Jane", 'Doe', 'FE', 100)
console.log(student.getFullName())

const getTopStudent = students => {

  const { id, firstName, lastName } = students
    .filter(student => student.getIsActive)
    .reduce((topStudent, curstudent) => {
      if (curstudent.points > topStudent.points) {
        return curstudent
      }
      return topStudent
    }, students[0])
  return { id, firstName, lastName, }
};

const student1 = new Student(1, 'Alice', 'Johnson', 'Math', 85)
const student2 = new Student(2, 'Bob', 'Smith', 'Physicscons', 92);
const student3 = new Student(3, 'Carol', 'Williams', 'Chemistry', 78);



const students = [student1, student2, student3];
const students1 = [student1, student2];
const students2 = [student1, student3];

console.log(getTopStudent(students));
console.log(getTopStudent(students1));
console.log(getTopStudent(students2));