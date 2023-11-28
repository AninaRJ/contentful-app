import React from 'react';
import { Card } from '@contentful/f36-components';
import { TextInput } from '@contentful/f36-components';

import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';
import { RichTextEditor } from '@contentful/field-editor-rich-text';

const Field = () => {
  const sdk = useSDK();
  const [sectionHeader, setSectionHeader] = React.useState("");

  return (<>
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
