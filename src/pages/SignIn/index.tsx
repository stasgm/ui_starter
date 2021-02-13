import React, { useState, useEffect } from 'react';
// import 'antd/dist/antd.css';
import { Button, message, Input, Form } from 'antd';
// import { useAuth } from '../authContext';
import Page from '../../components/ui/Page';

function SignIn() {
  /*   const history = useHistory(); */
  /*   const location = useLocation(); */
  const [creds, setCreds] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const auth = useAuth();

  /*   useEffect(() => {
      if (auth.user) history.replace(location?.state?.from || '/');
    }, [auth.user]); */

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const el = e.target instanceof HTMLInputElement ? (e.target as HTMLInputElement) : null;
    if (el) {
      setCreds((prevCreds) => ({
        ...prevCreds,
        [el.name]: el.value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      // await auth.signIn(creds.email, creds.password);
    } catch (e) {
      console.error(e);
      setError(e.message);
      setLoading(false);
    }
  };

  return (
    <Page title="Welcome to Storelord">
      <Form onFinish={handleSubmit}>
        <Form.Item label="Email">
          <Input type="email" value={creds.email} onChange={onChange} name="email" id="email" />
        </Form.Item>
        <Form.Item label="Password">
          <Input type="password" value={creds.password} onChange={onChange} name="password" id="password" />
        </Form.Item>
        <Button type="default" loading={loading}>
          Sign in
        </Button>
        {/* <Message text={error} type="error" /> */}
      </Form>
    </Page>
  );
}

export default SignIn;
