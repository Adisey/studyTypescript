const obj1 = {
    a: 1,
    b: 2,
    c: 3,
};

const fun0 = (obj = {}, param2 = 2, param3 = 3, fun1, fun2, fun3) => {
    if (param2 === 2) {
        fun1 && fun1(obj);
    }
    if (param3 === 3) {
        fun2 && fun2({ ...obj, e: param3 });
    }

    const customObj = (fun3 && fun3(param3)) || {};

    return { ...obj, d: param2, e: param3, ...customObj };
};

const fun1 = (a) => console.log(+new Date(), '-()->', typeof a, `-a->`, a);
const fun2 = (a) => console.log(+new Date(), '-()->', typeof a, `-a->`, a);
const fun3 = (a) => {
    if (a === 1) {
        return { x: 3 };
    } else {
        return { y: 7 };
    }
};

const result = fun0(obj1, 2, 3, fun1, fun2, fun3);
console.log(+new Date(), '-()->', typeof result, `-result->`, result);

// 1. Смысл вопроса как на этппе типирования функции fun0 проверить чтобы переданная функция fun1 параметр по типу
// принимала такой же тип как приходит в fun0 ?

// 2. (1), fun2 дополненный ?

// 3. В фуркции fun0 проконтролировать чтобы предаваемая fun3 возващала значение, которое впишится в ответ fun0 ?
