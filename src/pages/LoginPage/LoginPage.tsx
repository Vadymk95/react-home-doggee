import React, { FC, useState } from 'react';
import { Button, Input } from '../../components';
import styles from './LoginPage.module.css';

export const LoginPage: FC = () => {
  const [formValues, setFormValues] = useState({ username: '', password: '' });

  return (
    <div className={styles.login_page}>
      <div className={styles.container}>
        <div className={styles.header_container}>doggee</div>
        <div className={styles.form_container}>
          <div className={styles.input}>
            <Input
              type="text"
              placeholder="username"
              helperText="validation"
              value={formValues.username}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  username: (e.target as HTMLInputElement).value,
                })
              }
            />
          </div>
          <div className={styles.input}>
            <Input
              type="password"
              placeholder="password"
              value={formValues.password}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  password: (e.target as HTMLInputElement).value,
                })
              }
            />
          </div>
          <div>
            <Button>Sign In</Button>
          </div>
        </div>
        <div className={styles.sign_up_container}>
          Create new account
        </div>
      </div>
    </div>
  );
};
