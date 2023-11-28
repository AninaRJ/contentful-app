import React, { useState } from 'react';
import { BooleanEditor } from '@contentful/field-editor-boolean';
import { DisplayText } from '@contentful/f36-components';

import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';

const Field = () => {
  const sdk = useSDK();

  const [anchorSections, setAnchorSections] = useState(false);

  if(sdk.field.id === 'longFormBody'){
    return <>
      <DisplayText>Are sections anchored?</DisplayText>
      <BooleanEditor field={sdk.field} onValueChanged={setAnchorSections}></BooleanEditor>

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
