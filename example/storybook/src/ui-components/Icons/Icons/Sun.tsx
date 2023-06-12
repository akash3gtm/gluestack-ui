import React from 'react';
import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../styled-components';

import { G, Path } from 'react-native-svg';

export const SunIcon = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <G>
      <Path
        d="M8.00001 10.6667C9.47277 10.6667 10.6667 9.47276 10.6667 8C10.6667 6.52724 9.47277 5.33334 8.00001 5.33334C6.52725 5.33334 5.33334 6.52724 5.33334 8C5.33334 9.47276 6.52725 10.6667 8.00001 10.6667Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 1.33334V2.66667"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 13.3333V14.6667"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.28665 3.28666L4.22665 4.22666"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.7733 11.7733L12.7133 12.7133"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.33334 8H2.66668"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.3333 8H14.6667"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.22665 11.7733L3.28665 12.7133"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.7133 3.28666L11.7733 4.22666"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  ),
});
