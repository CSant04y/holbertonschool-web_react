// Create interface so that you can use it as the "template" for tabel
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number;
} 
  
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);

interface printTeacherFunction {
    (firsName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function(firstName: string, lastName: string): string  {
    return `${firstName[0]}. ${lastName}`;
}

interface classConstructor {
    new (firstName: string, lastName: string): studentClassInterface;
}

interface studentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}
const StudentClass: classConstructor = class StudentClass implements studentClassInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework () {
        return "Currently working";
    }
    displayName () {
        return `${this.firstName}`;
    }
}

