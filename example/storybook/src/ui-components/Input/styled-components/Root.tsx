import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    'borderWidth': 1,
    'borderColor': '$backgroundLight300',
    'borderRadius': '$sm',
    'minWidth': 200,
    'flexDirection': 'row',
    'overflow': 'hidden',
    'alignContent': 'center',
    '_input': {
      py: 'auto',
      px: '$3',
    },
    ':hover': {
      borderColor: '$borderLight400',
    },

    ':focus': {
      borderColor: '$primary700',
    },

    ':disabled': {
      'opacity': 0.4,
      ':hover': {
        borderColor: '$backgroundLight300',
      },
    },

    '_dark': {
      'borderColor': '$borderDark700',
      ':hover': {
        borderColor: '$borderDark400',
      },
      ':focus': {
        borderColor: '$primary400',
      },
      ':disabled': {
        ':hover': {
          borderColor: '$borderDark700',
        },
      },
    },

    'variants': {
      size: {
        xl: {
          _input: {
            height: '$12',
            fontSize: '$xl',
            lineHeight: '$xl',
          },
          _icon: {
            color: '$textLight400',
            h: '$4.5',
            w: '$4.5',
          },
        },
        lg: {
          _input: {
            height: '$11',
            fontSize: '$lg',
            lineHeight: '$xl',
          },
          _icon: {
            color: '$textLight400',
            h: '$4',
            w: '$4',
          },
        },

        md: {
          _input: {
            height: '$10',
            fontSize: '$md',
            lineHeight: '$md',
          },
          _icon: {
            color: '$textLight400',
            h: '$3.5',
            w: '$3.5',
          },
        },

        sm: {
          _input: {
            height: '$9',
            fontSize: '$sm',
            lineHeight: '$sm',
          },
          _icon: {
            color: '$textLight400',
            h: '$3',
            w: '$3',
          },
        },
      },
      variant: {
        underlined: {
          '_input': {
            _web: {
              outlineWidth: 0,
              outline: 'none',
            },
            px: '$0',
          },
          'borderWidth': 0,
          'borderRadius': 0,
          'borderBottomWidth': '$1',
          ':hover': {
            borderBottomColor: '$primary700',
          },
          ':focus': {
            borderColor: '$primary700',
            _web: {
              boxShadow: 'inset 0 -1px 0 0 $primary700',
            },
          },
          ':invalid': {
            'borderBottomWidth': 2,
            'borderBottomColor': '$error600',
            ':focus': {
              ':hover': {
                borderBottomColor: '$primary700',
              },
            },
            ':hover': {
              borderBottomColor: '$error600',
            },
            ':disabled': {
              ':hover': {
                borderBottomColor: '$error600',
              },
            },
            'borderColor': '$error600',
            '_web': {
              boxShadow: 'inset 0 -1px 0 0 $error600',
            },
          },
          '_dark': {
            ':hover': {
              borderBottomColor: '$primary400',
            },
            ':focus': {
              borderColor: '$primary400',
              _web: {
                boxShadow: 'inset 0 -1px 0 0 $primary400',
              },
            },
            ':invalid': {
              ':focus': {
                ':hover': {
                  borderBottomColor: '$primary400',
                },
              },
              ':hover': {
                borderBottomColor: '$error400',
              },
              ':disabled': {
                ':hover': {
                  borderBottomColor: '$error400',
                },
              },
              'borderColor': '$error400',
              '_web': {
                boxShadow: 'inset 0 -1px 0 0 $error400',
              },
            },
          },
        },
        outline: {
          '_input': {
            _web: {
              outlineWidth: 0,
              outline: 'none',
            },
          },
          ':invalid': {
            ':disabled': {
              ':hover': {
                borderColor: '$error600',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $error600',
                },
              },
            },
            ':focus': {
              ':hover': {
                borderColor: '$primary600',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $primary600',
                },
              },
            },
            ':hover': {
              borderColor: '$error600',
            },
            'borderColor': '$error600',
            '_web': {
              boxShadow: 'inset 0 0 0 1px $error600',
            },
          },
          ':focus': {
            _web: {
              boxShadow: 'inset 0 0 0 1px $primary700',
            },
          },
          '_dark': {
            ':invalid': {
              ':disabled': {
                ':hover': {
                  borderColor: '$error400',
                  _web: {
                    boxShadow: 'inset 0 0 0 1px $error400',
                  },
                },
              },
              ':focus': {
                ':hover': {
                  borderColor: '$primary400',
                  _web: {
                    boxShadow: 'inset 0 0 0 1px $primary400',
                  },
                },
              },
              ':hover': {
                borderColor: '$error400',
              },
              'borderColor': '$error400',
              '_web': {
                boxShadow: 'inset 0 0 0 1px $error400',
              },
            },
            ':focus': {
              _web: {
                boxShadow: 'inset 0 0 0 1px $primary400',
              },
            },
          },
        },
        rounded: {
          'borderRadius': 999,
          '_input': {
            px: '$4',
            _web: {
              outlineWidth: 0,
              outline: 'none',
            },
          },
          ':invalid': {
            ':disabled': {
              ':hover': {
                borderColor: '$error600',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $error600',
                },
              },
            },
            ':focus': {
              ':hover': {
                borderColor: '$primary600',
                _web: {
                  boxShadow: 'inset 0 0 0 1px $primary600',
                },
              },
            },
            ':hover': {
              borderColor: '$error600',
            },
            'borderColor': '$error600',
            '_web': {
              boxShadow: 'inset 0 0 0 1px $error600',
            },
          },
          ':focus': {
            _web: {
              boxShadow: 'inset 0 0 0 1px $primary700',
            },
          },
          '_dark': {
            ':invalid': {
              ':disabled': {
                ':hover': {
                  borderColor: '$error400',
                  _web: {
                    boxShadow: 'inset 0 0 0 1px $error400',
                  },
                },
              },
              ':focus': {
                ':hover': {
                  borderColor: '$primary400',
                  _web: {
                    boxShadow: 'inset 0 0 0 1px $primary400',
                  },
                },
              },
              ':hover': {
                borderColor: '$error400',
              },
              'borderColor': '$error400',
              '_web': {
                boxShadow: 'inset 0 0 0 1px $error400',
              },
            },
            ':focus': {
              _web: {
                boxShadow: 'inset 0 0 0 1px $primary400',
              },
            },
          },
        },
      },
    },

    'defaultProps': {
      size: 'md',
      variant: 'outline',
    },
  },

  { descendantStyle: ['_input', '_icon'] }
);
