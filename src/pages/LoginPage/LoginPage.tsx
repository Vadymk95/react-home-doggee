import React, { FC, useState } from 'react';
import { Button, Input } from '@components';
import styles from './LoginPage.module.css';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from '@router';

interface IFormErrors {
  username: string | null;
  password: string | null;
}

export const LoginPage: FC = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ username: '', password: '' });
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

  return (
    <div className={styles.login_page}>
      <div className={styles.container}>
        <div className={styles.header_container}>doggee</div>
        <div className={styles.form_container}>
          <div className={styles.input}>
            <Input
              isError={!!formErrors.username}
              type="text"
              placeholder="username"
              helperText={formErrors.username}
              value={formValues.username}
              onChange={(e) => {
                const username = (e.target as HTMLInputElement).value;
                setFormValues({ ...formValues, username });
                validateHandler(username, 'username');
              }}
            />
          </div>
          <div className={styles.input}>
            <Input
              isError={!!formErrors.password}
              helperText={formErrors.password}
              type="password"
              placeholder="password"
              value={formValues.password}
              onChange={(e) => {
                const password = (e.target as HTMLInputElement).value;
                setFormValues({ ...formValues, password });
                validateHandler(password, 'password');
              }}
            />
          </div>
          <div>
            <Button>Sign In</Button>
          </div>
        </div>
        <div onClick={createAccount} className={styles.sign_up_container}>Create new account</div>
      </div>
    </div>
  );
};
