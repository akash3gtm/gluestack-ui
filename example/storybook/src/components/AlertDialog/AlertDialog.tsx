import React, { useState } from 'react';

import Wrapper from '../Wrapper';
// import { CloseIcon } from '../../components/Icons/Icons';
import { Button } from '@components';
import { Text } from '@components';
import { CloseIcon, AlertDialog } from '@components';

export const AlertDialogStory = ({ ...props }) => {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const handleClose = () => setShowAlertDialog(!showAlertDialog);
  return (
    <Wrapper>
      <Button onPress={handleClose}>
        <Button.Text>Click me</Button.Text>
      </Button>

      <AlertDialog isOpen={showAlertDialog} onClose={handleClose} {...props}>
        <AlertDialog.Backdrop />
        <AlertDialog.Content>
          <AlertDialog.Header>
            {/* @ts-ignore */}
            <Text variant="AlertDialogHeader">Return Policy</Text>
            <AlertDialog.CloseButton>
              <CloseIcon sx={{ w: 16, h: 16 }} />
            </AlertDialog.CloseButton>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <Text>
              Whoa, slow down there! This modal is like a red light at an
              intersection, reminding you to stop and think before you proceed.
              Is deleting this folder the right choice?
            </Text>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button variant="outline" onPress={handleClose} mr="$3">
              <Button.Text>Cancel</Button.Text>
            </Button>
            <Button action="negative" onPress={handleClose}>
              <Button.Text>Delete</Button.Text>
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Wrapper>
  );
};
