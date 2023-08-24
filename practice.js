// 1
// template String

// const number = 24;
// const arrayNumbers = [34, 55,87]
// const objectPerson = {
//     name: 'Sirajul Islam'
// }
// const message = `Hello, I am ${objectPerson.name}.My age ${number}.I have total money now ${arrayNumbers[2]}`
// console.log(message);


// // 2
// // arrow function
// const totalNumberGun = (a, b) => a * b;
// const myNumber = totalNumberGun(3, 7);
// // console.log(myNumber);


// // 3
// // destructuring and Spread operator
// const {age , z, ...others} = {x: 2, y: 6, z: 9, name: 'Siraj', age: 24}
// const [first, second, ...remaining] = ['rasel', 'babu', 'sorif']


// 4
// Object.keys, Object.values, Object.entries

// const myProfile = {
//     name: 'Sirajul Islam',
//     roll: 3838,
//     email: 'sakil@gmail.com'
// }
// // just keys
// const property = Object.keys(myProfile);
// console.log(property);

// // just values
// const propertyValue = Object.values(myProfile);
// console.log(propertyValue);

// // keys and values one Array
// const propertyPlusValue = Object.entries(myProfile);
// console.log(propertyPlusValue);


// 5
// 5.1 for of loop do not use Object just use array and string
// for (const obj of object) {
    
// }
// // 5.2 for in loop do use Object
// for (const obj in object) {
    
// }

// 6
// chain
// 6.1
// const obj = {
//     id: 3838,
//     name: 'Sirajul',
//     address: {
//         id: 4466,
//         street: {
//             home: 'Brahmanbaria',
//             village: 'Bidyakut',
//             code: 3400
//         }
//     }
// }
// console.log(obj.address.street.village);

// 6.2
// const address = [{
//     id: 3838,
//     address: {
//         street: {
//             village: 'Bidyakut',
//             thana: {
//                 name: 'Nabinagor'
//             },
//             town: 'Brahmanbaria'
//         }
//     }
// }]
// console.log(address[0].address.street.thana.name)

// 6.3
// const user = {
//     id: 5001,
//     name: 'Shoriful Raj',
//     address: {
//         street: {
//             first: '54/1 uttor side',
//             second: 'poribag er goli',
//             third: 'no dorai'
//         },
//         city: 'Dhaka'
//     }
// }
// console.log(user.address.street?.second)


// 7
// Map sob gular upore loop chole calculation hoye return korbe result ke 
// 7.1
// const numbers = [3, 6, 8, 3, 7];

// const doubles = [];
// for(const num of numbers){
//     const double = num * 2;
//     doubles.push(double);
// }
// console.log(doubles);

// 7.2
// const numbers = [3, 6, 8, 3, 7];

// function doubles (num) {
//     return num *2;
// }

// const result = numbers.map(doubles);
// console.log(result);

7.3
// const numbers = [3, 6, 8, 3, 7];
// const result = n => n * 2;
// const final = numbers.map(result);
// console.log(final);

// const plus = n => n + 2;
// const finalPlus = numbers.map(plus);
// console.log(finalPlus);

// // 7.4 shortcut
// const finalResult = numbers.map(n => n * 2);
// console.log(finalResult);
// const resultFinal = numbers.map(n => n + 2);
// console.log(resultFinal);


// 7.5
// const friends = ['Sofiq', 'Jakir', 'Alamin', 'Soriful'];

// const friendsLength = friends.map(frnd => frnd.length);
// console.log(friendsLength);

// const friendsFirstletter = friends.map(frnd => frnd[0]);
// console.log(friendsFirstletter);

// const friendsBigName = friends.map(frnd => frnd.length >5);
// console.log(friendsBigName);


// 8 
// foreach calculation hobe tobe kono result return korbe na
// const numbers = [1, 5, 6, 4, 15];
// // const result = numbers.forEach(n => console.log(n))
// const result = numbers.forEach(n => {
    
// })
// console.log(result)


// 9
// filter mane condition jara manbe tara array hisabe asbe and jodi kono ta na mile to khali [] dibe
// const numbers = [1, 5, 6, 4, 15];
// const player = [65, 59, 54, 67, 58, 81, 80];
// // const select = player.filter(n => n > 70);
// const select = player.filter(n => n % 2 == 0)
// console.log(select);

// const friends = ['Sofiq', 'Jakir', 'Alamin', 'Soriful'];
// const oddFrind = friends.filter(n => n.length % 2 == 1);
// const evenFrind = friends.filter(n => n.length % 2 == 0);
// console.log(oddFrind);
// console.log(evenFrind);


// 10
// find mane sudu first jeta milbe setai dibe porer gulai jabe na and jodi kono ta na mile to undefined dibe
// const friends = ['Sofiq', 'Jakir', 'Alamin', 'hailur', 'Soriful'];
// const oneOddFrind = friends.find(n => n.length % 2 == 0);
// console.log(oneOddFrind);

// // 11
// // reduce
// const numbers = [4, 5, 7, 1, 2, 66];
// // const sum = numbers.reduce((p, c) => p + c, 0)
// const sum = numbers.reduce((p, c) => p * c, 1)
// console.log(sum)


// 11
// const products = [
//     {id: 1, name: 'lenovo', price: 65000},
//     {id: 2, name: 'dell', price: 45000},
//     {id: 3, name: 'hp', price: 40000},
//     {id: 4, name: 'mac', price: 150000},
// ]
// map
// const price = products.map(p => p.price);
// console.log(price);

// foreach
// price = products.forEach(p => console.log(p.id));

// filter
// const price = products.filter(p => p.price > 40000);
// console.log(price);

// find
// const price = products.find(p => p.price < 50000);
// console.log(price);

// reduce
// const price = products.reduce((p, c) => p + c.price, 0);
// console.log(price);




// 12
// class

// const products = [
//     {id: 1, name: 'lenovo', price: 65000},
//     {id: 2, name: 'dell', price: 45000},
//     {id: 3, name: 'hp', price: 40000},
//     {id: 4, name: 'mac', price: 150000},
// ]

// has some properties, method
// class Product{
//     country = 'Bangladesh';
//     constructor(name){
//         this.name = name;
//     }
//     speak(talk){
//         console.log(`talking about ${talk}`)
//     }
// }

// const lenovo = new Product('Le le lenovo')
// // console.log(lenovo)
// // lenovo.speak('oba kita kau')


// class Teacher{
//     constructor(name, subject){
//         this.name = name;
//         this.subject = subject;
//     }
//     lecture(){
//         console.log('Sir is teaching Math')
//     }
// }

// const tapan = new Teacher('Tapon sir', 'Physics')
// console.log(tapan);

// const rashid = new Teacher('Rashid', 'English')
// console.log(rashid);


// 13
// class Vehicle{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
//     move(){
//         console.log('gari chole na chole na chole na re')
//     }
// }

// class Bus extends Vehicle{
//     constructor(name, price, seat, ticketPrice){
//         super(name, price);
//         this.seat = seat;
//         this.ticketPrice = ticketPrice;
//     }

// }

// class Truck extends Vehicle{
//     constructor(name, price, load){
//         super(name, price);
//         this.load = load;
//     }
    
// }

// 14
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     sleep(){
//         console.log(`Sleeping now ${this.name}`)
//     }
//     activity(){
//         this.sleep();
//     }
// }

// const kodom = new Person('Kodom Ali', 21)
// console.log(kodom)
// kodom.sleep();
// const badam = new Person('Kacha badam', 23)
// badam.sleep();

// // bejal 
// const lazy = kodom.sleep;
// lazy()

// 15

// const person = {
//     name: 'kodom ali', 
//     job: 'badam khai',
//     3:'third',
//     'add-dress': 'kochu khet'
// }
// const prop = 'job'
// console.log(person.job)
// console.log(person['job'])
// console.log(person[prop])
// console.log(person['3'])
// confirm.log(person["add-dress"])




// task -1: console log the secondary school location of Sophia 
// let data = {
//     Sophia: {
//         id: 33,
//         study: [
//             {
//                 primary:
//                     [
//                         { school_name: "ABC primary school" },
//                         { location: "Peters burg" }
//                     ]
//             },
//             {
//                 secondary:
//                     [
//                         { school_name: "ABC secondary school" },
//                         { location: "St Lorence" }
//                     ]
//             },
//         ]
//     }
// }
// console.log(data.Sophia.study[1].secondary[1].location)

// // task-2: console .log  output: Petersburg, Herry

// let students = {
//     2222: {
//         name: "Jack",
//         section: "C",
//         class: "IX",
//         address: {
//             "building no": 12,
//             "street": "St. Jonson",
//             "city": "Petersburg",
//             "country": "UK"
//         }
//     },
//     3333: {
//         name: "Herry",
//         section: "D",
//         class: "X",
//         address: {
//             "building no": 85,
//             "street": "DC road",
//             "city": "Kachukhet",
//             "country": "Bangladesh"
//         }
//     }
// }
// console.log(students['2222'].address['city']);
// console.log(students['3333'].name);


// // task-3 : access and then show habluder adda
// // show output Beginner
// let data2 = {
//     data:
//         [
//             {
//                 bookId: 1,
//                 bookDetails: {
//                     name: "habluder adda",
//                     category: "XYZ",
//                     price: "20$",
//                 },
//                 bookCategory: "Basic",
//             },
//             {
//                 bookId: 2,
//                 bookDetails: {
//                     name: "gobluder adda",
//                     category: "ABC",
//                     price: "40$",
//                 },
//                 bookCategory: "Beginner",
//             }
//         ]
// }

// console.log(data2.data[0].bookDetails.name);
// console.log(data2.data[1].bookCategory);



// // more practice task

// const myNumber = [1, 3, 5, 7, 9];
// const normal = [];
// for (let i = 0; i < myNumber.length; i++) {
//     normal.push(myNumber[i]+1);    
// }
// console.log(normal);
// const final = myNumber.map(num => num + 1);
// console.log(final);

// const number =[33, 50, 79, 90, 101, 30];
// const result = number.filter(num => num % 10 == 0);
// console.log(result);

// const find = number.find(num => num % 10 == 0);
// console.log(find);

// const instractor = [

//     { name: 'junaiet', age: 28, position: 'senior' },
//     { name: 'alirag', age: 21, position: 'jonior' },
//     { name: 'faruk', age: 32, position: 'senior' },

// ]
// const fy = instractor.filter(n => n.position == 'senior');
// console.log(fy);

// const people =[
//     {name: 'Mena', age: 20},
//     {name: 'Rina', age: 15},
//     {name: 'Suchorita', age: 22},
// ]

// const price = people.reduce((p, c) => p + c.age, 0);
// console.log(price);
