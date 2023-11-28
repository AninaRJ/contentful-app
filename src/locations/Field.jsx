import React from 'react';
import { Card } from '@contentful/f36-components';
import { DisplayText } from '@contentful/f36-components';
import { TextInput } from '@contentful/f36-components';

import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';
import { RichTextEditor } from '@contentful/field-editor-rich-text';

const Field = () => {
  const sdk = useSDK();
  const [show, setShow] = React.useState(false);

  return (<>
      {!show && (<Card onClick={() => setShow(true)}>
          Insert section header here
      </Card>)}
      <br />
      {show && (
          <>
              <DisplayText>Section Header</DisplayText>
              <TextInput></TextInput>
          </>
        )}
      <br/>
      <RichTextEditor sdk={sdk} isInitiallyDisabled={false} minHeight={300} maxHeight={900}>
      </RichTextEditor>
  </>);
};

export default Field;
