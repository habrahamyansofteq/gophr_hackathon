import {VoidCallback} from '~/types/global';

export type OnThemeChangeArgs = (callback: VoidCallback) => (event?: MediaQueryListEvent) => void;
