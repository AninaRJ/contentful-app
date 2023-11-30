import React from 'react';
import "codemirror/lib/codemirror.css";

import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';
import { renderRichTextDialog } from '@contentful/field-editor-rich-text'; 
import { render } from 'react-dom';

/* 
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
*/

const LongFormSection = () => {
  let sdk = useSDK();
  let richTextContent = () => render(renderRichTextDialog(sdk), document.getElementById('root'));
  return (
    <>
      {richTextContent}
    </>
  )
}

const Field = () => {
  return (
        <>
            <LongFormSection/>
        </>
  );
};

export default Field;
