import React from 'react';
import type { ComponentStory } from '@storybook/react-native';
import { Button, VStack, AddIcon } from '../../../ui-components';

type MyButtonStory = ComponentStory<typeof Button>;

const ButtonSizesExample: MyButtonStory = ({}) => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
  return (
    <VStack space="md" justifyContent="center" alignItems="center">
      {sizes.map((size: any) => {
        return (
          <Button mt="$4" size={size} key={size}>
            <Button.Text>Button</Button.Text>
            <Button.Icon as={AddIcon} ml="$2" />
          </Button>
        );
      })}
    </VStack>
  );
};

export default ButtonSizesExample;
