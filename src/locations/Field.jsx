import React, { useState } from 'react';
import { BooleanEditor } from '@contentful/field-editor-boolean';
import { DisplayText } from '@contentful/f36-components';

import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';

const Field = () => {
  const sdk = useSDK();

  const [anchorSections, setAnchorSections] = useState("False");
  const changeSelection = () => {
    console.log(this.value)
    setAnchorSections(this.value);
  }

  if(sdk.field.id === 'longFormBody'){
    return <>
      <DisplayText>Are sections anchored?</DisplayText>
      <BooleanEditor 
        field={sdk.field} 
        parameters={{trueLabel: 'True', falseLabel: 'False'}} 
        onValueChanged={changeSelection}>
      </BooleanEditor>

      {anchorSections && <>
        <DisplayText>Yep</DisplayText>
      </>}
    </>;
  }
  else{
    return <></>;
  }
};

export default Field;
