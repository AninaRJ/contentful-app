import React from 'react';
import { Header, Textarea } from '@contentful/f36-components';
import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';

const Field = () => {
  const sdk = useSDK();
 
  return <><Header></Header><Textarea></Textarea></>;
};

export default Field;
