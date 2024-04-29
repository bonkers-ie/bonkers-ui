import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, PropType } from '../../../vue/dist/vue.esm-bundler.js';
import { TBerPropNumber, TBerPropString, EBerSize } from './_types';

declare const _default: DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    rank: TBerPropNumber | TBerPropString | number;
    size?: EBerSize | undefined;
}>, {
    size: EBerSize;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    rank: TBerPropNumber | TBerPropString | number;
    size?: EBerSize | undefined;
}>, {
    size: EBerSize;
}>>>, {
    size: EBerSize;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
//# sourceMappingURL=ui-ber-rank.vue.d.ts.map