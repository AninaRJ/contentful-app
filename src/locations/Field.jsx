import React from 'react';
import { Button } from '@contentful/f36-components';
import { Heading } from '@contentful/f36-components';
import { TextInput } from '@contentful/f36-components';

import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';
import { RichTextEditor } from '@contentful/field-editor-rich-text';

const Field = () => {
  const sdk = useSDK();
  const [sectionHeader, setSectionHeader] = React.useState("");
  const [showHeader, setShowHeader] = React.useState(false);

  return (<>
        {!showHeader && <Button variant='secondary' onClick={() => setShowHeader(true)}>Add Section Heading</Button>}
        {
          showHeader && 
          <>
            <Heading as="span" marginBottom='none'>
              Section Heading
            </Heading>
            <TextInput 
              value={sectionHeader} 
              placeholder="Insert the section header here"
              name="section-header" 
              onBlur={() => setShowHeader(false)}
              onChange={(e) => setSectionHeader(e.target.value)}>
            </TextInput>
          </>
        }
      
      <br/><br/>

      <RichTextEditor sdk={sdk} isInitiallyDisabled={true} />
  </>);
};

export default Field;
