import { styled } from '../../styles'

export const NavHeader = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const NavIcon = styled('button', {
  padding: '0.75rem',
  backgroundColor: '$gray800',
  borderRadius: 8,
  cursor: 'pointer',
  color: '$gray300',
  border: 0,
  outline: 'none',
  position: 'relative',

  div: {
    width: '2rem',
    height: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50px',
    border: '4px solid rgb(18,18,20)',
    backgroundColor: '$green500',
    fontWeight: 'bold',
    position: 'absolute',
    top: '-0.5rem',
    right: '-0.5rem',
  },
})
