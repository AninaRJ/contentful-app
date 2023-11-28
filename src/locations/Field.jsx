import React from 'react';
import { BooleanEditor } from '@contentful/field-editor-boolean';
import { DisplayText } from '@contentful/f36-components';

import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';

const Field = () => {
  const sdk = useSDK();

  if(sdk.field.id === 'longFormBody'){
    return <>
      <DisplayText>Are sections anchored?</DisplayText>
      <BooleanEditor  
        field={sdk.field}>
      </BooleanEditor>

    </>;
  }
  else{
    return <></>;
  }
};

export default Field;
