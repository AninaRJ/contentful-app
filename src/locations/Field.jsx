import React from 'react';
import { Heading } from '@contentful/f36-components';
import { TextInput } from '@contentful/f36-components';

import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';
import { RichTextEditor } from '@contentful/field-editor-rich-text';

const Field = () => {
  const sdk = useSDK();
  const [sectionHeader, setSectionHeader] = React.useState("");

  return (<>
      <Heading as="h6">
        Section Heading
      </Heading>
      <TextInput 
        value={sectionHeader} 
        placeholder="Insert the section header here"
        name="section-header" 
        onChange={(e) => setSectionHeader(e.target.value)}>
      </TextInput>
      <br/>
      render( <RichTextEditor sdk={sdk} isInitiallyDisabled={true} />, document.getElementById('root') ); 
  </>);
};

export default Field;
