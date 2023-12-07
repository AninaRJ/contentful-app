import React from 'react';

import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';
import { RichTextEditor } from '@contentful/field-editor-rich-text';

const Field = () => {
  let sdk = useSDK();
  return (
    <>
      <RichTextEditor sdk={sdk} isInitiallyDisabled={false} minHeight={900}/>
    </>
  )
};

export default Field;
