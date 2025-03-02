interface IAdress {
  city: string;
  street: string;
  zipcode: number;
}

interface IEducation {
  school: string;
  graduationYear: number;
}

interface IJob {
  company: string;
  startDate: Date;
  title: string;
}

interface IPerson {
  id: string;
  firstName: string;
  lastName: string;
  age: number;

  adress: IAdress;
  education: IEducation;
  job: IJob[];
}

const geLocation = (loc: IAdress) => {};
