class Employee {
    id: number;
    name: string;
    phone: string;
    title: string;
    constructor(id: number, name: string, phone: string, title: string) {
      this.id = id;
      this.name = name;
      this.phone = phone;
      this.title = title;
    }
    // a method is added simply by adding the name of the method, then standard
    // function formatting.
    toString(): string {
      // here toString takes no parameters, and returns a string
      let output =
        `Employee Record --- ID: ${this.id} \n` +
        `\ Name: ${this.name}\n` +
         `\tPhone: ${this.phone}\n` +
        `\tTitle: ${this.title}\n`;
      return output;
    }
  }
  let firstEmployee = new Employee (
    1,
    "Bernice Ortiz",
    "4824931093",
    "CEO"
  );
  let secondEmployee = new Employee (
    2,
    "Bernice Ortiz",
    "4824931093",
    "CEO"
  );
  console.log(firstEmployee.toString());secondEmployee.toString();
