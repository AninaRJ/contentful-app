import React from 'react';
import { EntryCard } from '@contentful/f36-components';

import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';
import { RichTextEditor } from '@contentful/field-editor-rich-text';

const Field = () => {
  const sdk = useSDK();

    return (<>
      <RichTextEditor sdk={sdk} isInitiallyDisabled={false} minHeight={300}>
        <EntryCard contentType="inputField"></EntryCard>
      </RichTextEditor>
    </>);
};

export default Field;
