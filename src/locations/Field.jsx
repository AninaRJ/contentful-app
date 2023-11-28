import React from 'react';
import { ToggleButton } from '@contentful/f36-components';
import { Subheading } from '@contentful/f36-components';
import { TextInput } from '@contentful/f36-components';

import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';
import { RichTextEditor } from '@contentful/field-editor-rich-text';

const Field = () => {
  const sdk = useSDK();
  const [sectionHeader, setSectionHeader] = React.useState("");
  const [showHeader, setShowHeader] = React.useState(false);

  return (<>
        <ToggleButton variant="primary" onClick={() => setShowHeader(!showHeader)}>Add Section Heading</ToggleButton>
        <br/>
        {
          showHeader && 
          <>
            <Subheading as="span" marginBottom='none'>
              Section Heading
            </Subheading>
            <TextInput 
              value={sectionHeader} 
              placeholder="Insert the section header here"
              name="section-header" 
              onChange={(e) => setSectionHeader(e.target.value)}>
            </TextInput>
          </>
        }
      
      <br/><br/>

      <RichTextEditor sdk={sdk} isInitiallyDisabled={true} />
  </>);
};

export default Field;
