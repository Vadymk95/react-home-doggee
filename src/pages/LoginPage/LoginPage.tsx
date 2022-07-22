import React, { FC, useState } from 'react';
import { Button, Checkbox, Input, PasswordInput } from '@components';
import styles from './LoginPage.module.css';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from '@router';
import { ChangeEventType } from '@models';

interface IFormErrors {
  username: string | null;
  password: string | null;
}

export const LoginPage: FC = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
    remoteAccess: false,
  });
  const [formErrors, setFormErrors] = useState<IFormErrors>({
    username: null,
    password: null,
  });

  const validateField = (value: string) => (value ? null : 'field required');

  const validateUserName = (value: string) => validateField(value);
  const validatePassword = (value: string) => validateField(value);

  const loginFormaValidateSchema = {
    username: validateUserName,
    password: validatePassword,
  };

  const validateHandler = (
    value: string,
    key: keyof typeof loginFormaValidateSchema
  ) => {
    const error = validateField(value);
    setFormErrors({ ...formErrors, [key]: error });
  };

  const createAccount = () => navigate(RoutesEnum.REGISTRATION);

  const changeLoginHandler: ChangeEventType = (e) => {
    const username = (e.target as HTMLInputElement).value;
    setFormValues({ ...formValues, username });
    validateHandler(username, 'username');
  };

  const changePasswordHandler: ChangeEventType = (e) => {
    const password = e.target.value;
    setFormValues({ ...formValues, password });
    validateHandler(password, 'password');
  };

  const checkboxHandler: ChangeEventType = (e) => {
    const remoteAccess = e.target.checked;
    setFormValues({ ...formValues, remoteAccess });
  };

  return (
    <div className={styles.login_page}>
      <div className={styles.container}>
        <div className={styles.header_container}>doggee</div>
        <div className={styles.form_container}>
          <div className={styles.input}>
            <Input
              isError={!!formErrors.username}
              type="text"
              label="username"
              helperText={formErrors.username}
              value={formValues.username}
              onChange={changeLoginHandler}
            />
          </div>
          <div className={styles.input}>
            <PasswordInput
              isError={!!formErrors.password}
              helperText={formErrors.password}
              value={formValues.password}
              onChange={changePasswordHandler}
            />
          </div>
          <div className={styles.input}>
            <Checkbox
              label="This is not my device"
              onChange={checkboxHandler}
            />
          </div>
          <div>
            <Button>Sign In</Button>
          </div>
        </div>
        <div onClick={createAccount} className={styles.sign_up_container}>
          Create new account
        </div>
      </div>
    </div>
  );
};
