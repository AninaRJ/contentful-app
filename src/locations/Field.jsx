import React from 'react';
import { BooleanEditor } from '@contentful/field-editor-boolean';

import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';

const Field = () => {
  const sdk = useSDK();

  if(sdk.field.id === 'longFormBody'){
    return <><BooleanEditor field={sdk.field}></BooleanEditor></>;
  }
  else{
    return <></>;
  }
};

export default Field;
