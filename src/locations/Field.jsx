import React, { useState } from 'react';

import {  useSDK } from '@contentful/react-apps-toolkit';
import { FormControl, TextInput } from '@contentful/f36-components';

const Field = () => {
  let sdk = useSDK();

  const [value, setValue] = useState('your-email@domain.com');
  return (
    <FormControl isRequired isInvalid={!value} sdk={sdk}>
      <FormControl.Label>Email</FormControl.Label>
      <TextInput
        value={value}
        type="email"
        name="email"
        placeholder="your-email@domain.com"
        onChange={(e) => setValue(e.target.value)}
      />
      <FormControl.HelpText>Provide your email address</FormControl.HelpText>
      {!value && (
        <FormControl.ValidationMessage>
          Please, provide your email
        </FormControl.ValidationMessage>
      )}
    </FormControl>
  );
};

export default Field;
