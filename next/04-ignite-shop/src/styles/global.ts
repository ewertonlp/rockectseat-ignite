import { globalCss } from '.'

export const GlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  media: {
    bp1: '(min-width: 360px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
})
