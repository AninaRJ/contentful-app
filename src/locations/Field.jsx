import React from 'react';
import { Navbar, Textarea } from '@contentful/f36-components';
import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';

const Field = () => {
  const sdk = useSDK();
 
  return <><Navbar></Navbar><Textarea></Textarea></>;
};

export default Field;