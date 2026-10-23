// ==== Интерфейсы ====
// №6
interface IUser {
  firstName: string;
  lastName: string;
  age: number;
  profession: string;
  hometown?: string;
}

// №7
interface IAdmin extends IUser {
  permissions: string[];
  accessLevel: 'moderator' | 'admin' | 'superadmin';
  isActive: boolean;
}

// ==== Переменные ====
// №4
let uploadStatus: 'loading' | 'success' | 'error' = 'loading';

// №5
let textFormat: 'uppercase' | 'lowercase' | 'capitalize' = 'uppercase';

// №10
const users: IUser[] = [
  {
    firstName: 'Mansur',
    lastName: 'Aliyev',
    age: 40,
    profession: 'Developer',
    hometown: 'Tashkent'
  },
  {
    firstName: 'Ali',
    lastName: 'Karimov',
    age: 25,
    profession: 'Designer',
    hometown: 'Samarkand'
  },
  {
    firstName: 'Omar',
    lastName: 'Saidov',
    age: 30,
    profession: 'Developer'
  }
];

// ==== Функции ====
// №3
function calculateSum(a: number, b: number): number {
  return a + b;
}

// №8
function formatText(text: string, format: 'uppercase' | 'lowercase' | 'capitalize'): string {
  if (format === 'uppercase') {
    return text.toUpperCase();
  } else if (format === 'lowercase') {
    return text.toLowerCase();
  } else {
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
  }
}

// №9
function removeChar(str: string, char: string): string {
  return str.replaceAll(char, '');
}

// ==== Проверка ====
// №3
console.log(calculateSum(10, 20));

// №8
console.log(formatText('mANSUR', 'uppercase'));
console.log(formatText('mANSUR', 'lowercase'));
console.log(formatText('mANSUR', 'capitalize'));

// №9
console.log(removeChar('calculate', 'a'));

// №10
const developers: IUser[] = users.filter(user => user.profession === 'Developer');
console.log(developers);