// Create interface so that you can use it as the "template" for tabel
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

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

interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {

    workFromHome() {
        return "Working from home";
    }

    getCoffeeBreak() {
        return "Getting a coffee break";
    }

    workDirectorTasks() {
        return "Getting to director tasks";
    }

}

class Teacher implements TeacherInterface {

    workFromHome() {
        return "Cannot work from home";
    }

    getCoffeeBreak() {
        return "Cannot have break";
    }

    workTeacherTasks() {
        return "Getting to work";
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) return new Teacher();

    return new Director();
}

function isDirector(employee: DirectorInterface | TeacherInterface): boolean {
  return (employee instanceof Director)
}

function executeWork(employee: DirectorInterface | TeacherInterface): string {
  if (employee instanceof Director) return employee.workDirectorTasks();
  else if (employee instanceof Teacher) return employee.workTeacherTasks();
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
	if (todayClass === "Math") {
		return `Teaching Math`;
	} else if (todayClass === "History") {
		return `Teaching History`;
	}
}

