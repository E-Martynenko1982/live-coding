
import { Student } from "./student.js";
import { User } from "./user.js";


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

const user1 = new User(1, 'John', 'Doe');
const user2 = new User(2, 'Jane', 'Doe');
const user3 = new User(3, 'Jim', 'Beam');
console.log(user1.getFullName());
console.log(user2.getFullName());
console.log(user3.getFullName());


const student1 = new Student(1, 'Alice', 'Johnson', 'Math', 85);
const student2 = new Student(2, 'Bob', 'Smith', 'Physics', 92);
const student3 = new Student(3, 'Carol', 'Williams', 'Chemistry', 178);




const students = [student1, student2, student3];
const students1 = [student1, student2];
const students2 = [student1, student3];

console.log(getTopStudent(students));
console.log(getTopStudent(students1));
console.log(getTopStudent(students2));