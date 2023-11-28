import React from 'react';
import { ToggleButton } from '@contentful/f36-components';
import { Modal } from '@contentful/f36-components';
import { TextInput } from '@contentful/f36-components';

import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';
import { RichTextEditor } from '@contentful/field-editor-rich-text';

const Field = () => {
  const sdk = useSDK();
  const [sectionHeader, setSectionHeader] = React.useState("");
  const [isShown, setShown] = React.useState(false);

  return (<>
        <ToggleButton variant="primary" onClick={() => setShown(true)}>Add Section Heading</ToggleButton>
        <br/>
        {
          <Modal onClose={() => setShown(false)} isShown={isShown}>
              {() => (
                <>
                  <Modal.Header
                    title="Section Heading"
                    subtitle="subtitle"
                    onClose={() => setShown(false)}
                  />
                  <Modal.Content>
                      <TextInput 
                        value={sectionHeader} 
                        placeholder="Insert the section header here"
                        name="section-header" 
                        onChange={(e) => setSectionHeader(e.target.value)}>
                      </TextInput>
                  </Modal.Content>
                </>
              )}
            </Modal>
        }
      
      <br/><br/>

      <RichTextEditor sdk={sdk} isInitiallyDisabled={true} />
  </>);
};

export default Field;
