import {FormField} from '../types';
import {SignInFormShape} from './types';

export const signInFormFields: FormField<keyof SignInFormShape> = {
  email: {
    id: 'signIn.email',
    name: 'email',
    label: 'Email Address',
    placeholder: 'Email',
  },
  password: {
    id: 'signIn.password',
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Password',
  },
};

export const signInSchemaKeys = Object.keys(signInFormFields) as (keyof SignInFormShape)[];
