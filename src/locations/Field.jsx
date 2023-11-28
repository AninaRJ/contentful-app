import React from 'react';
import { Card } from '@contentful/f36-components';

import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';
import { RichTextEditor } from '@contentful/field-editor-rich-text';

const Field = () => {
  const sdk = useSDK();
  const [show, setShow] = React.useState(false);

  return (<>
    <RichTextEditor sdk={sdk} isInitiallyDisabled={false} minHeight={900}>
      <Card onClick={() => setShow(!show)}>
        Click on this card
        <br />
        {show && (
          <span role="img" aria-label="sparkles">
          </span>
        )}
      </Card>
    </RichTextEditor>
  </>);
};

export default Field;
