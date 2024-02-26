let age: number;
let userName: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback: (a: number) =>  number 

let anything: any;

let some: unknown;
some = 'Text';
let str: string;
if (typeof(some) === 'string') {
  str = some;
}

let person: [string, number];

enum Load{ "LOADING", "READY" }

const page = {
  load: Load.READY
}

if (page.load === Load.LOADING) {
  console.log("Сторінка завантажується");
}

if (page.load === Load.READY) { 
  console.log("Сторінка завантажилась");
}

let variableWithUnionType: string | number;

let variableWithLiteralType: 'enable' | 'disable';

function showMessage(message: string): void {
  console.log(message);
}


function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

type Page = {
  title: string,
  likes: Number,
  accounts: string[],
  status: 'open' | 'close',
  details?: {
    createAt: Date,
    updateAt: Date,
  }
}
