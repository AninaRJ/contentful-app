import React from 'react';
import { RichTextEditor } from '@contentful/field-editor-rich-text';

import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';

const Field = () => {
  const sdk = useSDK();

  if(sdk.field.id === 'longFormBody'){
    return <><RichTextEditor sdk={sdk} isInitiallyDisabled={true} /></>;
  }
  else{
    return <><RichTextEditor sdk={sdk} isInitiallyDisabled={false} /></>;
  }
};

export default Field;
