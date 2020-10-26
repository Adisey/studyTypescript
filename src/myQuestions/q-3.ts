type IInfo = {
    id: string;
    name?: string;
};

const makeInfo = (): IInfo => {
    return { id: '001', name: 'Main' };
};

type IListItem = {
    id: string;
    name?: string;
};
type IList = {
    [id: string]: IListItem[];
};

const makeLists = (): IList => {
    const out: IList = {};

    out['list1'] = [
        { id: 'l01-01', name: 'l01-01' },
        { id: 'l01-02', name: 'l01-02' },
    ];
    out['list2'] = [
        { id: 'l02-01', name: 'l02-01' },
        { id: 'l02-02', name: 'l02-02' },
    ];

    return out;
};

// Как типизитроввть функцию "makeForm" ?

const makeForm = () => {
    return { ...makeInfo(), ...makeLists() };
};

const initForm = makeForm();

console.log(initForm);
