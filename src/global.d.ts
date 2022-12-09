
declare module 'quasar/wrappers';
declare module 'swiper/vue';
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}