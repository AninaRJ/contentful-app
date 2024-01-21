import React, { useState } from 'react';

import {  useSDK } from '@contentful/react-apps-toolkit';
import { Button, Flex, FormControl, IconButton, Stack, Textarea, Tooltip } from '@contentful/f36-components';
import { FormatBoldIcon, FormatItalicIcon } from '@contentful/f36-icons';

import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

function IconButtonToolbarExample() {
  const styles = {
    editorToolbarContainer: css({
      backgroundColor: tokens.gray200,
      borderRadius: tokens.borderRadiusMedium,
    }),
  };
  return (
    <Flex
      justifyContent="space-between"
      className={styles.editorToolbarContainer}
      padding="spacingXs"
    >
      <Stack spacing="spacingXs">
        <Tooltip content="Bold">
          <IconButton
            aria-label="Toggle bold"
            icon={<FormatBoldIcon />}
            variant="transparent"
            size="small"
          />
        </Tooltip>
        <Tooltip content="Italic">
          <IconButton
            aria-label="Toggle italic"
            icon={<FormatItalicIcon />}
            variant="transparent"
            size="small"
          />
        </Tooltip>
      </Stack>
      <Button>Example button</Button>
    </Flex>
  );
}

const Field = () => {
  let sdk = useSDK();

  const [value, setValue] = useState('');
  return (
    <FormControl isRequired isInvalid={!value} sdk={sdk}>
      <FormControl.Label>Custom Rich Text Text</FormControl.Label>
      {IconButtonToolbarExample()}
      <Textarea onChange={setValue}>
      </Textarea>
      {!value && (
        <FormControl.ValidationMessage>
          Please enter some text
        </FormControl.ValidationMessage>
      )}
    </FormControl>
  );
};

export default Field;
