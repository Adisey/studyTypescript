type defaults = {
    symbol?: string;
    separator?: string;
    decimal?: string;
    formatWithSymbol?: boolean;
    errorOnInvalid?: boolean;
    precision?: number;
    pattern?: string;
    negativePattern?: string;
};

type ICurrencyValue = number | string | currency;
type ICurrencyMath = (a: number) => currency;

export class currency {
    constructor(value: ICurrencyValue, opts?: defaults);

    // ------------ prototype ------------
    add(number: number): currency; // or ICurrencyMath ;)
    subtract: ICurrencyMath;
    multiply: ICurrencyMath;
    divide: ICurrencyMath;
    distribute(number: number): currency[];
    dollars(): number;
    cents(): number;
    format(useSymbol?: boolean): string;
    toString(): string;
    toJSON(): number;
}

// ------------ Advanced ------------
type round = (a: number) => number;
type pow = (a: number) => number;
type IFunction2 = (a: number, b: number) => number;

type IRegex = RegExp;
type groupRegex = IRegex;
type vedicRegex = IRegex;
type parse = (value: number, opts: defaults, useRounding?: boolean) => number;
