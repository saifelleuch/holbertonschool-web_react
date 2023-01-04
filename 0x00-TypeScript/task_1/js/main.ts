interface Teacher {
	readonly firstName: string,
	readonly lastName: string,
	fullTimeEmployee: boolean,
	yearsOfExperience?: number,
	location: string,
	[possName: string]: any;
};

interface Directors extends Teacher {
	numberOfReports: number;
};

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
};

export const printTeacher: printTeacherFunction = function(
	firstName: string,
	lastName: string
	): string {
	let firstLetter: string = firstName.charAt(0);
	return `${firstLetter}. ${lastName}`
};

interface StudentClassConstructor {
	new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
	firstName: string;
	lastName: string;
}

class StudentClass implements StudentClassInterface {
	firstName: string;
	lastName: string;
	constructor(firstName: string, lastName: string) {
			this.firstName = firstName;
			this.lastName = lastName;
	}
	workOnHomework() {
			return 'Currently working';
	}
	displayName() {
			return (`${this.firstName}`);
	}
}
