import { currency as Currency } from './lib/source';
console.log('====================================================');

const myCurrency = new Currency(2);
const myJSON = myCurrency.toJSON();
console.log(+new Date(), '-(myCurrency)->', typeof myJSON, `-myJSON->`, myJSON);

const myString = myCurrency.toString();
console.log(+new Date(), '-(myCurrency)->', typeof myString, `-myString->`, myString);

let myCurrency2 = myCurrency.add(3);
const myString2 = myCurrency2.toString();
console.log(+new Date(), '-(myCurrency2 = myCurrency.add(3))->', typeof myString2, `-myString2->`, myString2);

const myCurrency3 = myCurrency2.add(5);
const myString3 = myCurrency3.toString();
console.log(+new Date(), '-(myCurrency3 = myCurrency2.add(5))->', typeof myString3, `-myString3->`, myString3);

const myString4 = myCurrency2.add(5).subtract(5).toString();
console.log(+new Date(), '-(myCurrency2.add(5).subtract(5))->', typeof myString4, `-myString4->`, myString4);

const myString5 = myCurrency.multiply(3).toString();
console.log(+new Date(), '-(myCurrency.multiply(3))->', typeof myString5, `-myString5->`, myString5);

const myString6 = myCurrency.divide(5).toString();
console.log(+new Date(), '-(myCurrency.divide(5))->', typeof myString6, `-myString6->`, myString6);

const myArr7 = myCurrency.distribute(6);
console.log(+new Date(), '-(myArr7.length)->', myArr7.length);
myArr7.forEach((item, index) => {
    console.log(+new Date(), `-(myArr7 [${index}])->`, typeof item.toString(), `-item.toString()->`, item.toString());
});

const myNumber8 = myCurrency3.divide(3).dollars();
console.log(+new Date(), '-(myCurrency3.divide(7).dollars())->', typeof myNumber8, `-myNumber8->`, myNumber8);

const myNumber9 = myCurrency3.divide(3).cents();
console.log(+new Date(), '-(myCurrency3.divide(3).cents())->', typeof myNumber9, `-myNumber9->`, myNumber9);

const myString10 = myCurrency3.divide(3).format();
console.log(+new Date(), '-(myCurrency3.divide(3).format())->', typeof myString10, `-myString10->`, myString10);

const myString11 = myCurrency3.divide(3).format(true);
console.log(+new Date(), '-(myCurrency3.divide(3).format(true))->', typeof myString11, `-myString11->`, myString11);

console.log('----------------------------------------------------');

const myString12 = new Currency(3, { symbol: 'Uah', pattern: '# !' }).divide(5).format(true);
console.log(
    +new Date(),
    "-(Currency(3, { symbol: 'Uah', pattern: '# !' }).divide(5).format(true))->",
    typeof myString12,
    `-myString12->`,
    myString12,
);
