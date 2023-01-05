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

export class Director implements DirectorInterface {
	workFromHome = () => 'Working from home';
	getCoffeeBreak = () => 'Getting a coffee break';
	workDirectorTasks = () => 'Getting to director tasks';
}

export class Teacher implements TeacherInterface {
	workFromHome = () => 'Cannot work from home';
	getCoffeeBreak = () => 'Cannot have a break';
	workTeacherTasks = () => 'Getting to work';
}

export const createEmployee = function(salary: number | string): Director | Teacher {
	if (typeof salary === "number" && salary < 500) {
	  return new Teacher;
	}
	return new Director;
}


export function isDirector(employee: Director | Teacher): boolean {
	return (employee instanceof Director);
};

export function executeWork(employee: Director | Teacher): string {
	if (employee instanceof Director) {
		return employee.workDirectorTasks();
	}
	if (employee instanceof Teacher) {
		return employee.workTeacherTasks();
	}
};
