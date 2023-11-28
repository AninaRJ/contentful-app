import React from 'react';
import { BooleanEditor } from '@contentful/field-editor-boolean';
import { DisplayText } from '@contentful/f36-components';
import { SingleLineEditor } from '@contentful/field-editor-single-line';

import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';

const Field = () => {
  const sdk = useSDK();

  if(sdk.field.id === 'longFormBody'){
    return <>
      <DisplayText>Are sections anchored?</DisplayText>
      <BooleanEditor 
        field={sdk.field}>
      </BooleanEditor>

      <SingleLineEditor></SingleLineEditor>
    </>;
  }
  else{
    return <></>;
  }
};

export default Field;
