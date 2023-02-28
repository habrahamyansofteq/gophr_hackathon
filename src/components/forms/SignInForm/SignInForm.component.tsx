import React, {useState} from 'react';
import {SubmitHandler} from 'react-hook-form';
import {useToggle} from 'react-use';

import {Button, FormErrorBox, FormWrapper, Input, Link} from '~/components';
import {Routes} from '~/constants';
import {useForm} from '~/hooks';

import {signInFormFields, signInSchemaKeys} from './fields';
import styles from './SignInForm.module.scss';
import {SignInFormShape} from './types';

const SignInForm: React.FC = () => {
  const [loading, toggleLoading] = useToggle(false);
  const [errors, setErrors] = useState<string[]>([]);

  const {formMethods, isValid, handleSubmit} = useForm<keyof SignInFormShape, SignInFormShape>({
    schemaKeys: signInSchemaKeys,
  });

  const handleSignIn: SubmitHandler<SignInFormShape> = (payload) => {
    setErrors([]);
    toggleLoading();
    // const response = await your action here;
    // TODO: the comment is a simple example of the payload which will be returned when user submits this form
    // eslint-disable-next-line no-console
    console.log(payload, 'Log in payload');
    toggleLoading();
  };

  return (
    <FormWrapper {...{formMethods}} onSubmit={handleSubmit(handleSignIn)}>
      <div className={styles.wrapper}>
        {!!errors.length && <FormErrorBox errors={errors} />}
        <Input {...signInFormFields.email} className={styles.wrapper__input} />
        <Input {...signInFormFields.password} className={styles.wrapper__input} />
        <Link to={Routes.Home} className={styles.wrapper__forgot_password}>
          Forgot password?
        </Link>
        <Button disabled={!isValid}>{loading ? 'loading' : 'Sign in'}</Button>
      </div>
    </FormWrapper>
  );
};

export default SignInForm;
