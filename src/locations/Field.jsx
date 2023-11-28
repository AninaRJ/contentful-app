import React from 'react';
import { Card } from '@contentful/f36-components';
import { TextInput } from '@contentful/f36-components';

import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';
import { RichTextEditor } from '@contentful/field-editor-rich-text';

const Field = () => {
  const sdk = useSDK();
  const [show, setShow] = React.useState(false);
  const [sectionHeader, setSectionHeader] = React.useState("");

  return (<>
    <Card onClick={() => setShow(true)} margin="none" badge={true}>
          {
            !show && 
            <>
              Click to insert the section header here
              <br />
            </>
          }
          {show && (
              <TextInput 
                value={sectionHeader} 
                name="section-header" 
                onChange={(e) => setSectionHeader(e.target.value)}>
              </TextInput>
          )}
        </Card>
      <br/>
      <RichTextEditor sdk={sdk} isInitiallyDisabled={false} minHeight={300} maxHeight={900}>
      </RichTextEditor>
  </>);
};

export default Field;
