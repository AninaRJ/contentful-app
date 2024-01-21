import React from 'react';

import {  useSDK } from '@contentful/react-apps-toolkit';
import { Button, ButtonGroup, Flex, FormControl, IconButton, Stack, Textarea, Tooltip } from '@contentful/f36-components';
import { ExternalLinkIcon, FormatBoldIcon, FormatItalicIcon, FormatUnderlinedIcon, HorizontalRuleIcon, LinkIcon, ListBulletedIcon, ListNumberedIcon, QuoteIcon } from '@contentful/f36-icons';

import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

const styles = {
  editorToolbarContainer: css({
    backgroundColor: tokens.gray200,
    borderRadius: tokens.borderRadiusMedium,
    borderBottom: 'none'
  }),
  richText: css({
    height: 500,
    width: 700,
    borderRadius: tokens.borderRadiusMedium,
    borderTop: 'none'
  })
};

function getSelectedText() // JavaScript
{
    // Obtain the object reference for the <textarea>
    var txtarea = document.getElementById("targetContent");

    // Obtain the index of the first selected character
    var start = txtarea.selectionStart;

    // Obtain the index of the last selected character
    var finish = txtarea.selectionEnd;

    // Obtain the selected text
    return txtarea.value.substring(start, finish);
}



function formatText(style){
 if(style === 'bold'){
  console.log(getSelectedText())
 }
}

function IconButtonToolbarExample() {
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
            onChange={formatText('bold')}
          />
        </Tooltip>
        <Tooltip content="Italic">
          <IconButton
            aria-label="Toggle italic"
            icon={<FormatItalicIcon />}
            variant="transparent"
            size="small"
            onChange={formatText('italic')}
          />
        </Tooltip>
        <Tooltip content="Underline">
          <IconButton
            aria-label="Toggle underline"
            icon={<FormatUnderlinedIcon />}
            variant="transparent"
            size="small"
            onChange={formatText('underline')}
          />
        </Tooltip>
        <Tooltip content="External Link">
          <IconButton
              aria-label="Toggle External Link"
              icon={<ExternalLinkIcon />}
              variant="transparent"
              size="small"
            />
        </Tooltip>

        <Tooltip content="Link">
          <IconButton
              aria-label="Toggle Link"
              icon={<LinkIcon />}
              variant="transparent"
              size="small"
            />
        </Tooltip>

        <Tooltip content="Unordered List">
          <IconButton
              aria-label="Toggle Unordered List"
              icon={<ListBulletedIcon />}
              variant="transparent"
              size="small"
            />
        </Tooltip>

        <Tooltip content="Ordered List">
          <IconButton
              aria-label="Toggle Ordered List"
              icon={<ListNumberedIcon />}
              variant="transparent"
              size="small"
            />
        </Tooltip>

        <Tooltip content="Quote">
          <IconButton
              aria-label="Toggle Quote"
              icon={<QuoteIcon />}
              variant="transparent"
              size="small"
            />
        </Tooltip>

        <Tooltip content="Horizontal Rule">
          <IconButton
              aria-label="Toggle Horizontal Rule Icon"
              icon={<HorizontalRuleIcon />}
              variant="transparent"
              size="small"
            />
        </Tooltip>
        
      </Stack>
        <Stack flexDirection="column">
        <ButtonGroup>
          <Button variant="secondary" size="small">
            Align Left
          </Button>
          <Button variant="secondary" size="small">
            Align Right
          </Button>
          <Button variant="secondary" size="small">
            Align Center
          </Button>
        </ButtonGroup>
      </Stack>
    </Flex>
  );
}

const Field = () => {
  let sdk = useSDK();

  return (
    <Flex>
    <FormControl sdk={sdk}>
      <FormControl.Label>Custom Rich Text Text</FormControl.Label>
      {IconButtonToolbarExample()}
      <Textarea id='targetContent' className={styles.richText}>
      </Textarea>
    </FormControl>
    </Flex>
  );
};

export default Field;
