import { aaa } from './calc';
import { currency as Currency } from './lib/source';

const qq = new Currency();

qq.add(3);
const aa = qq.toString();

console.log(+new Date(), '-()->', typeof aaa, `-aaa->`, aaa);
console.log(+new Date(), '-()->', typeof qq, `-qq->`, qq);
console.log(+new Date(), '-()->', typeof aa, `-aa->`, aa);
