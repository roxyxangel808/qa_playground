class Feedback {
  subject: string;
  feedback: string;
  name: string;
  phone: string;
  email: string;
  constructor(
    subject: string,
    feedback: string,
    name: string,
    phone: string,
    email: string
  ) {
    this.subject = subject;
    this.feedback = feedback;
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
}

const testData: Array<Feedback> = [
  new Feedback(
    "I liked it ok",
    "It was good enough, but could use some work",
    "Jim",
    "1234567890",
    "jim@bo.com"
  ),
  new Feedback("Great", "Good job", "Jane", "0987654321", "jane@test.com"),
];


