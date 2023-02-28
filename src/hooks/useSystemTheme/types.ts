export enum Theme {
  Dark = 'dark',
  Light = 'light',
}

export type UseSystemThemeArgs = (initialTheme?: Theme) => Theme;
