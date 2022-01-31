// Create interface so that you can use it as the "template" for tabel
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Carlos",
    lastName: "Esquivel",
    age: 22,
    location: "Oklahoma",
};
const student2: Student ={
    firstName: "Janet",
    lastName: "paul",
    age: 55,
    location: "Texas",
};

const studentList: Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

document.body.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);

const headers: string[] = ["firstName", "location"];


for (let i :number = 0; i < headers.length; i++) {
    const th: HTMLTableCellElement = document.createElement('th');
    th.appendChild(document.createTextNode(`${headers[i]}`));
    thead.appendChild(th);
}

for (let i :number = 0; i < studentList.length; i++) {
    const tr: HTMLTableRowElement = document.createElement("tr");
    tbody.appendChild(tr);

    const values: string[] = [studentList[i].firstName, studentList[i].location];

    for (let j :number = 0; j < values.length; j++) {
		const td: HTMLTableCellElement = document.createElement('td');
		td.appendChild(document.createTextNode(`${values[j]}`));
		tr.appendChild(td);
	}
}
