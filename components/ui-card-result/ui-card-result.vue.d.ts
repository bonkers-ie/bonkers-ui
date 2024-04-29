import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, PropType } from '../../../vue/dist/vue.esm-bundler.js';
declare const _default: __VLS_WithTemplateSlots< DefineComponent<__VLS_TypePropsToRuntimeProps<{
    header?: string | undefined;
    exclusiveText?: string | undefined;
    exclusiveTextBottom?: string | undefined;
    exclusiveClickAction?: (() => void) | undefined;
    exclusiveBottomClickAction?: (() => void) | undefined;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    header?: string | undefined;
    exclusiveText?: string | undefined;
    exclusiveTextBottom?: string | undefined;
    exclusiveClickAction?: (() => void) | undefined;
    exclusiveBottomClickAction?: (() => void) | undefined;
}>>>, {}, {}>, {
    sidebar?(_: {}): any;
    default?(_: {}): any;
}>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ui-card-result.vue.d.ts.map