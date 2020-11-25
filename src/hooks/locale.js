import { inject, provide, ref } from "@vue/composition-api";

export function useLocale() {
    return { locale: inject('locale', ref('en')) }
}

export function provideLocale() {
    const locale = ref('en');
    provide('locale', locale)
}