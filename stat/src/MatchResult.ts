//enum => enumeration , list of closesly related values
export enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

interface Employee {
  name: String;
  designation: String;
}

let employee = <Employee>{}; //Type Assertion

employee.name = 'Rohan';
employee.designation = 'SDEII';

interface Student {
  name: String;
  id: number;
}

let student = {} as Student; //Type Assertion

student.id = 1;
student.name = 'Rohan';

