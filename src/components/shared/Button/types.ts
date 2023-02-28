import {VoidCallback} from '~/types';

export enum ButtonVariants {
  Text = 'text',
  Outlined = 'outlined',
  Contained = 'contained',
}

export type ButtonProps = Partial<{
  color: string;
  href: string;
  disabled: boolean;
  paddingString: string;
  marginString: string;
  onClick: VoidCallback;
  variant: 'text' | 'outlined' | 'contained';
}>;

export type Coordinates = {
  x: number;
  y: number;
};
