import React from 'react';
import { ToggleButton, Button } from '@contentful/f36-components';
import { Modal } from '@contentful/f36-components';
import { TextInput } from '@contentful/f36-components';
import { Form, FormControl } from '@contentful/f36-components';

import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';
import { RichTextEditor } from '@contentful/field-editor-rich-text';

const HeaderModal = () => {
  const [sectionHeader, setSectionHeader] = React.useState("");
  const [isShown, setShown] = React.useState(false);
  return (
    <>
      <ToggleButton variant="secondary" onClick={() => setShown(true)}>Add Section Heading</ToggleButton>
      <br/>
      <Modal onClose={() => setShown(false)} isShown={isShown}>
          {() => (
            <>
              <Modal.Header
                title="Section Heading"
                onClose={() => setShown(false)}
              />
              <Modal.Content>
                <Form>
                  <FormControl>
                    <FormControl.Label isRequired>Section Header</FormControl.Label>
                    <TextInput
                      maxLength={20}
                      value={sectionHeader}
                      placeholder="For example Product, Blog Post, Author"
                      onChange={(e) => setSectionHeader(e.target.value)}
                    />
                  </FormControl>
                </Form>
              </Modal.Content>
              <Modal.Controls>
                <Button
                  size="small"
                  variant="transparent"
                  onClick={() => setShown(false)}
                >
                  Close
                </Button>
                <Button
                  size="small"
                  variant="positive"
                  isDisabled={sectionHeader.length === 0}
                >
                  Save
                </Button>
              </Modal.Controls>
            </>
          )}
        </Modal>
    </>
  )
}

const LongFormSection = () => {
  let sdk = useSDK();
  return (
    <>
      <HeaderModal/>
      <br/>
      <RichTextEditor sdk={sdk} isInitiallyDisabled={false} minHeight={900}/>
    </>
  )
}

const Field = () => {
  let sectionsCreated = [<LongFormSection/>];

  const toggleNumOfSections = (op) => {
    if(op === 'add'){
      sectionsCreated.push(<LongFormSection/>)
    }
    else if(op === 'remove'){
      sectionsCreated.pop();
    }
  }

  return (
        <>
            {sectionsCreated}
            <br/>
            <Button variant='primary' 
                  onClick={() => toggleNumOfSections('add')}>Add Section</Button>
        </>
  );
};

export default Field;
