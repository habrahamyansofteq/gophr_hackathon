type Align = 'right' | 'left' | 'center' | 'justify';

type Variant = 'text' | 'heading' | 'button' | 'label' | 'link';

type TypoType = 'small' | 'large' | 'extra' | 'medium' | 'semibold' | 'regular';

export type TypographyProps = Partial<{
  align: Align;
  type: TypoType;
  variant: Variant;
  children: string;
  className: string;
  color?: string;
  capitalize: boolean;
  tagName: keyof JSX.IntrinsicElements;
}>;
