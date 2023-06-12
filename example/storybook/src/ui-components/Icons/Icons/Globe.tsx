import { createIcon } from '@gluestack-ui/icon';
import React from 'react';
import { Path, G } from 'react-native-svg';
import { Root } from '../styled-components';

const GlobeIcon: any = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <G>
        <Path
          d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8 1.33333C4.3181 1.33333 1.33333 4.3181 1.33333 8C1.33333 11.6819 4.3181 14.6667 8 14.6667Z"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M1.33333 8H14.6667"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8 1.33333C9.66752 3.1589 10.6152 5.52802 10.6667 8C10.6152 10.472 9.66752 12.8411 8 14.6667C6.33248 12.8411 5.38483 10.472 5.33333 8C5.38483 5.52802 6.33248 3.1589 8 1.33333V1.33333Z"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </>
  ),
});

GlobeIcon.displayName = 'GlobeIcon';

export { GlobeIcon };
