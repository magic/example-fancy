export default {
  '.Header': {
    display: 'block',
    left: '0',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1,
    padding: '0 5%',
    backgroundColor: 'rgba(0,0,0,0.4)',

    '.Logo': {
      span: {
        margin: '0 .2em',
      },
    },
  },

  '.Menu': {
    margin: '0.5em 0 0',
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
    color: '#fefefe',
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
