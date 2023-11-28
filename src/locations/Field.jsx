import React from 'react';
import { DisplayText } from '@contentful/f36-components';

import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';
import { RichTextEditor } from '@contentful/field-editor-rich-text';

const Field = () => {
  const sdk = useSDK();

    return (<>
      <DisplayText>Are sections anchored?</DisplayText>
      <RichTextEditor field={sdk.field}></RichTextEditor>
    </>);
};

export default Field;
