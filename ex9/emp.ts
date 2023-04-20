class Employee {
    name: string;
    basicPay: number;
  
    constructor(name: string, basicPay: number) {
      this.name = name;
      this.basicPay = basicPay;
    }
  
    calculatePay(): number {
      const tax = 0.1;
      const medicalAllowance = 500;
      const grossSalary = this.basicPay + medicalAllowance;
      const netSalary = grossSalary - (grossSalary * tax);
      return netSalary;
    }
  }
  
  const employee1 = new Employee("JAVID", 1000000);
  console.log(`Employee Name: ${employee1.name}`);
  console.log(`Basic Salary: ${employee1.basicPay}`);
  console.log(`Net Salary: ${employee1.calculatePay()}`);
  