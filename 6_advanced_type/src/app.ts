type Admin = {
  name: string;
  privileges: Array<string>;
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Admin, Employee {}
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};

type Combinalbe = string | number;
type Numeric = number | boolean;
type Universal = Combinalbe & Numeric;
