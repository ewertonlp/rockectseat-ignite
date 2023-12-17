import { styled } from '@/styles'

export const ShoppingCartContainer = styled('main', {
  position: 'fixed',
  top: 0,
  right: '-480px',
  width: '480px',
  height: '100%',
  padding: '4.5rem 3rem 3rem',
  backgroundColor: '$gray800',
  boxShadow: '1px 1px 20px rgba(0,0,0,0.7)',
  transition: 'right 0.3s ease-in-out',
  zIndex: 999,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
})

export const ShoppingCartContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  height: 'auto',
  width: '100%',
  marginBottom: '3.5rem',

  h2: {
    marginBottom: '2rem',
  },
})

export const ShoppingCartItems = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gap: '2rem',
  marginBottom: '1.5rem',
})

export const ShoppingCartItemDetail = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'start',
  padding: '0.15rem 0',

  p: {
    lineHeight: 1.6,
    fontSize: '$md',
    color: '$gray300',
  },

  strong: {
    lineHeight: 1.6,
    fontSize: '$md',
    color: '$gray100',
  },

  button: {
    backgroundColor: 'inherit',
    color: '$green500',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ShoppingCartTotalDetails = styled('div', {
  width: '100%',
  bottom: '3rem',
  right: '3rem',
 

  p: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    lineHeight: 1.6,

    span: {
      fontSize: '$md',
    },
  },
  'p:last-child span:last-child': {
    fontSize: '$xl',
    fontWeight: 'bold',
  },

  button: {
    width: '100%',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    fontWeight: 'bold',
    fontSize: '$md',
    cursor: 'pointer',

    marginTop: '3.56rem',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 101,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const EmptyCart = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  margin: '4rem auto',

  p: {
    fontSize: '1.25rem',
    color: '$gray300',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  a: {
    display: 'block',
    marginTop: '1rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
})
