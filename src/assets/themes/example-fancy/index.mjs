export default {
  '.Header': {
    display: 'block',
    left: '5%',
    position: 'absolute',
    top: 0,
    width: '90%',
    zIndex: 1,
  },

  '.Wrapper': {
    margin: 0,
    maxWidth: '100vw',
    width: 'auto',
  },

  '.Hero': {
    fontSize: '2em',
    position: 'inherit',

    img: {
      left: 0,
      position: 'absolute',
      top: 0,
    },
    h1: {
      fontSize: '2em',
      margin: '3em 0 1em',
    },
  },

  a: {
    color: 'blue',
    textDecoration: 'none',

    '&:hover': {
      color: 'orange',
    },
  },

  button: {
    fontSize: '1.2em',
    margin: '.3em',
    padding: '.3em',
  },
}
