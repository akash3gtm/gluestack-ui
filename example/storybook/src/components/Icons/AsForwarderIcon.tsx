import React from 'react';
import Wrapper from '../Wrapper';
import { Camera } from 'lucide-react-native';
import { Icon } from './Icon';

export const AsForwarderIcon = ({ ...props }: any) => {
  return (
    <Wrapper>
      <Icon as={Camera} {...props} ssize1="sm" />
    </Wrapper>
  );
};
