/*

You volunteered to help out teaching a preschool in your area! You were given an array of all students and some important data about them, grouped by their teacher. Create a function that will ungroup every student so you can look at their details individually.

PROBLEM
  given an array of 'teacher' objects that contain 'student' objects, return an array of objects representing each student. each student object should contain the teacher's name and the student's details


INPUT
  -array
    -objects

OUTPUT
  -array
    -objects

DATA STRUCTURES
  -array as the main container
  -objects as array elements
  -arrays as properties
  -primitive values as properties

RULES
  1. will always receive an argument
  2. argument will always be an array of objects
    -array will never be empty or sparse
  3. objects can contain array or primitive data type as a property
    -objects will never be empty
  4. student details are not consistent - each student can have different key/val pairs
  5. a student will never have duplicate details


STEPS
  iterate over teacher objects to get student data
  iterate over student data to get student details
  add student details and teacher name into student objects
  return an array of student objects


ALGO
  given an array of teacher objects
    create an output array, named studentDetails, set to []
    iterate through teacher array, teacher as variable
    
    iterate through teacher data, student as variable
      create a student object with teacher name

        iterate through student keys, detail as variable 
          add each key/val pair to student object
            could use reduce??
          
      push student object into studentDetails arr

  return studentDetails
*/
function ungroupStudents(teachers) {
  // top solution on edabit
  let mapped = teachers.flatMap(({teacher, data}) => {
    return data.map(student => ({teacher, ...student}))
  })

  console.log(mapped)
  return mapped

  // my solution
  // const studentDetails = [];

  // teachers.forEach(teacher => {
  //   let teacherName = teacher.teacher;
  //   teacher.data.forEach(student => {
  //     let studentObj = {teacher: teacherName}
  //     Object.keys(student).reduce((obj, detail) => {
  //       obj[detail] = student[detail]
  //       return obj
  //     }, studentObj);

  //     studentDetails.push(studentObj);
  //   });
  // });

  // return studentDetails;
}

ungroupStudents([{
  teacher: "Ms. Car",
  data: [{
     name: "James",
     emergenceNumber: "617-771-1082",
  }],
}, {
  teacher: "Mr. Lamb",
  data: [{
    name: "Aaron",
    age: 3
  }]
}]) 
// [{
//   teacher: "Ms. Car",
//   name: "James",
//   emergencyNumber: "617-771-1082",
// }, {
//   teacher: "Ms. Car",
//   name: "Alice",
//   allergies: ["nuts", "carrots"],
// }, {
//   teacher: "Mr. Lamb",
//   name: "Aaron",
//   age: 3,
// }]



//   ungroupStudents([
//     {
//       teacher: 'Ms. Car',
//       data: [
//         {
//           name: 'James',
//           emergencyNumber: '617-771-1082',
//         },
//         {
//           name: 'Alice',
//           alergies: ['nuts', 'carrots'],
//         },
//       ],
//     },
//     {
//       teacher: 'Mr. Lamb',
//       data: [
//         {
//           name: 'Aaron',
//           age: 3,
//         },
//       ],
//     },
//   ])
//   // [
//   //   {
//   //     teacher: 'Ms. Car',
//   //     name: 'James',
//   //     emergencyNumber: '617-771-1082',
//   //   },
//   //   {
//   //     teacher: 'Ms. Car',
//   //     name: 'Alice',
//   //     alergies: ['nuts', 'carrots'],
//   //   },
//   //   {
//   //     teacher: 'Mr. Lamb',
//   //     name: 'Aaron',
//   //     age: 3,
//   //   },
//   // ];


//   ungroupStudents([
//     {
//       teacher: 'Ms. Sherman',
//       data: [
//         {
//           name: 'Carmen',
//           feildTripConsentSlipSigned: false,
//         },
//       ],
//     },
//     {
//       teacher: 'Mr. Shoe',
//       data: [
//         {
//           name: 'Braden',
//           favoriteBook: 'Where the Wild Things Are',
//         },
//         {
//           name: 'Angelo',
//           playsSports: true,
//         },
//       ],
//     },
//   ])

// //   [
// //     {
// //       teacher: 'Ms. Sherman',
// //       name: 'Carmen',
// //       feildTripConsentSlipSigned: false,
// //     },
// //     {
// //       teacher: 'Mr. Shoe',
// //       name: 'Braden',
// //       favoriteBook: 'Where the Wild Things Are',
// //     },
// //     {
// //       teacher: 'Mr. Shoe',
// //       name: 'Angelo',
// //       playsSports: true,
// //     },
// //   ]
// // );