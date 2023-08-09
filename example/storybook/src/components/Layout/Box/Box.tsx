import { Text, Box } from '../../../ui-components';
import React from 'react';

const BoxStory: any = ({
  bg = 'red500',
  w = '100',
  h = '80',
  ...props
}: any) => {
  return (
    <Box
      {...props}
      bg={`$${bg}`}
      h={h}
      w={w}
      borderRadius="$full"
      borderColor="$amber500"
      justifyContent="center"
      alignItems="center"
    >
      <Text color="white" fontWeight="$bold">
        BOX
      </Text>
    </Box>
  );
};

export default BoxStory;

export { Text, Box };
