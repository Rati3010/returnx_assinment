import { Form } from '@shopify/polaris';
import {useState, useCallback} from 'react';

 function FormOnSubmit() {
  const [email, setEmail] = useState('ratikanta@returnx.com');

  const handleSubmit = useCallback(() => {
    setEmail('');
  }, []);

  return (
    <Page>Happy life</Page>
  );
}

export default FormOnSubmit;