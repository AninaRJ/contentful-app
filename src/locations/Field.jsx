import React from 'react';

import {  useSDK } from '@contentful/react-apps-toolkit';

import { RichTextEditor } from '@contentful/field-editor-rich-text';

const Field = () => {
  let sdk = useSDK();

  return (
    <RichTextEditor sdk={sdk}/>
  );
};

export default Field;
