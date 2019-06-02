export default {
  '.Header': {
    zIndex: 1,
    position: 'relative',
    width: '90%',
    display: 'block',
    margin: '0 auto',
  },

  '.Wrapper': {
    maxWidth: '100vw',
    width: 'auto',
    margin: 0,
  },

  '.Hero': {
    position: 'inherit',
    fontSize: '2em',

    img: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
    h1: {
      fontSize: '2em',
      margin: '3em 0 1em',
    },
  },

  a: {
    textDecoration: 'none',
    color: 'blue',

    '&:hover': {
      color: 'orange',
    },
  },

  button: {
    padding: '.3em',
    margin: '.3em',
    fontSize: '1.2em',
  },
}
