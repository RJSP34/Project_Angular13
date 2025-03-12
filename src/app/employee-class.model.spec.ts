import { EmployeeClass } from './employee-class.model';

describe('EmployeeClass', () => {
  it('should create an instance', () => {
    expect(new EmployeeClass(0,' ',0,0)).toBeTruthy();
  });
});
