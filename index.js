// let str = 'salom bolalar';
// let resArray = str.split(' ');
// let res = resArray.map(function(value) {
//     return value[0].toUpperCase() + value.slice(1);
// })
// console.log(res.join(' '));

// let user = [
//  {name: 'Alex',age: 40,},
//  {name: 'John',age: 5,},
//  {name: 'John',age: 45,},
//  {name: 'John',age: 45,},
// ]
// let res = user.find(function(user) {
//     return user.name == 'Alex'
// })
// console.log(res);

// UYGA VAZIFA
// 1. **Berilgan so‘zda a harfi nechta borligini aniqlovchi funksiya yozing.**
// let str = prompt('soz');
// function test(arg) {
//     let res = 0;
//     for (const i of arg) {
//         if (i === 'a') {
//             res ++;
//         }
//     }
//     return res;
// }
// let res = test(str);
// console.log(res);

// 2. **Berilgan so‘zning oxirgi 3 harfini qaytaruvchi funksiya yozing.**
// let str = prompt('soz');
// function test(arg) {
//     let res = arg.slice(-3);
//     return res
// }
// let res = test(str);
// console.log(res);

// 5. **Berilgan so‘zni teskari qilib qaytaruvchi funksiya yozing.**
// let str = prompt('soz');
// function test(arg) {
//     return arg.split('').reverse().join(''); 
// }
// let res = test(str);
// console.log(res);

// 6. **Berilgan so‘zda nechta belgi borligini aniqlovchi funksiya yozing.**
// let str = prompt('soz');
// function test(str) {
//    let res = 0;
//    for (const i of str) {
//     res ++
//    }
//    return res
// }
// let res = test(str);
// console.log(res);

// 7. **Berilgan so‘zni 3 marta takrorlab qaytaruvchi funksiya yozing.**
// let str = prompt('soz');
// function test(str) {
//    let res = '';
//    let sikl = '123';
//    for (const i of sikl) {
//     res += str
//    }
//    return res
// }
// let res = test(str);
// console.log(res);

// 8. **Berilgan so‘zdan faqat sonlarni olib qaytaruvchi funksiya yozing.**
// let str = prompt('soz');
// function test(str) {
//     return str.replace(/\D/g, '');
// }
// let res = test(str);
// console.log(res);

// 10. **Berilgan so‘zda ‘js’ so‘z birikmasi borligini tekshiruvchi funksiya yozing.**
// let str = prompt('soz');
// function test(str) {
//     return str.includes('js')
// }
// let res = test(str);
// console.log(res);

// massiv

// 1. **Berilgan massivdagi eng katta elementni qaytaruvchi funksiya yozing.**
// let arr = [1,2,3,4,5];
// function test(arg) {
//     let max = [0];
//     for (const i of arg) {
//         if (i>max) {
//             max = i
//         }
//     }
//     return max
// }
// let res = test(arr);
// console.log(res);

// 2. **Berilgan massivdagi barcha juft sonlarni qaytaruvchi funksiya yozing.**
// let arr = [1,2,3,4,5];
// function test(arg) {
//     let max = '';
//     for (const i of arg) {
//         if (i%2==0) {
//             max += i
//         }
        
//     }
//     return max
// }
// let res = test(arr);
// console.log(res);

// 3. **Berilgan massivdagi elementlarning yig‘indisini hisoblaydigan funksiya yozing.**
// let arr = [1,2,3,4,5];
// function test(arg) {
//     let max = 0;
//     for (const i of arg) {
//             max += i   
//     }
//     return max
// }
// let res = test(arr);
// console.log(res);

// 4. **Berilgan massivdagi har bir elementni 2 baravar oshiradigan va yangi massiv qaytaradigan funksiya yozing.**
// let arr = [1,2,3,4,5];
// function test(arg) {
    // let res = arg.map(function(value) {
    //     return value * 2
    // })
    // return res
// }
// let res = test(arr);
// console.log(res);

// 5. **Berilgan massivdagi barcha manfiy sonlarni olib tashlaydigan va yangi massiv qaytaradigan funksiya yozing.**
// let arr = [1,2,3,4,-5];
// function test(arg) {
//     let res = arg.filter(function(value) {
//         return value > 0
//     })
//     return res
// }
// let res = test(arr);
// console.log(res);

// 7. **Ikki massivni birlashtiradigan va yangi massiv qaytaradigan funksiya yozing.**
// let arr = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];
// function test(arg,arg2) {
//     return arg.concat(arg2)
// }
// let res = test(arr,arr2);
// console.log(res);

// 8. **Berilgan massivni teskari tartibda qaytaruvchi funksiya yozing.**
// let arr = [1,2,3,4,5];
// function test(arg) {
//     return arg.reverse()
// }
// let res = test(arr,);
// console.log(res);

// 9. **Berilgan massivdan faqat toq indeksli elementlarni qaytaruvchi funksiya yozing.**
// let arr = [1,2,3,4,5];
// function test(arg) {
//     let res = arg.filter(function(value,i) {
//         return i % 2 == 1
//     })
//     return res
// }
// let res = test(arr);
// console.log(res);

// 10. **Berilgan massivdagi elementlarning o‘rtacha qiymatini hisoblaydigan funksiya yozing.**
// let arr = [1,2,3,4,5];
// function test(arg) {
//     let sum = 0
//     let count = 0
//     let res = 0
//     for (const i of arg) {
//         sum +=i;
//         count++;
//         res = sum/count
//     }
//     return res
// }
// let res = test(arr);
// console.log(res);

// obyect

// 1. **Berilgan massivdan eng katta yoshi bor odamning ismini qaytaruvchi funksiya yozing.**
let arr = [
{name: 'Bob' , age : 8},
{name: 'john' , age : 88},
{name: 'Bobbb' , age : 800},
];
function test(arg) {
    let max = arg[0].age;
    let res = ''
    for (const i of arg) {
        if (i.age > max) {
            max = i.age
            res = max.name
        }
    }
    
    return res
}
let res = test(arr);
console.log(res);