class Department {
  // private readonly id: string;
  // name: string;
  private employees: Array<string> = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = 'd2'; readonlyなので再代入できない。
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: Array<string>;
  constructor(id: string, admins: Array<string>) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: Array<string>) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = 'Anna';
// it.name = 'New Name';

it.describe();
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);
accounting.addReport('something');
accounting.printReports();

// const accountingCopy = { name: 'Dummy', describe: accounting.describe };

// accountingCopy.describe();
