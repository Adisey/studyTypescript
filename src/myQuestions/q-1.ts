type IVariants = 'VARIANT_1' | 'VARIANT_2' | 'VARIANT_3' | 'VARIANT_4' | 'VARIANT_5' | 'VARIANT_6';

// Увидел такую реализаци проверки обязательно перебора всех вариантов.
// Есть ли другая возможность не пропестить варианта?

const generateError = (x: never): never => {
    throw new Error('Variant is not never' + x);
};

const checkVariant = (variant: IVariants, val: number): number => {
    switch (variant) {
        case 'VARIANT_1':
            return 1;
        case 'VARIANT_2':
            return 2;
        case 'VARIANT_3':
            return val;
        default:
            // generateError(variant);
            return 19;
    }
};
