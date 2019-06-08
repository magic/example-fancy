export const View = ({ page, state }) => [
  Header(state),
  div({ class: 'Page' }, page),
  Footer(state,
    div({ class: 'Menus'}, [
      div({ class: 'Child Info' }, [
        h2('@magic'),
        p('isomorphic web app generator.'),
        p('faas based graphql api.'),
        p('static pages or ssr.'),
        p('deduplicates css selectors.'),
        p('works without javascript.'),
      ]),
      div({ class: 'Child'}, [
        h2('Magic github organizations'),
        Menu({
          items: [
            { text: '@magic', to: 'https://magic.github.io/'},
            { text: '@magic-modules', to: 'https://magic-modules.github.io/'},
            { text: '@magic-themes', to: 'https://magic-themes.github.io/'},
            { text: '@magic-libraries', to: 'https://magic-libraries.github.io/'},
          ],
          state,
        }),
      ]),
      div({ class: 'Child' }, [
        h2('Magic npm organizations'),
        Menu({
          items: [
            { text: '@magic', to: 'https://www.npmjs.com/org/magic' },
            { text: '@magic-modules', to: 'https://www.npmjs.com/org/magic-modules' },
            { text: '@magic-themes', to: 'https://www.npmjs.com/org/magic-themes' },
            { text: '@magic-libraries', to: 'https://www.npmjs.com/org/magic-libraries' },
          ],
          state,
        }),
      ]),
    ]),
  ),
]

export const style = (vars = {}) =>  ({
  '.Route': {},
  '.Footer': {
    backgroundColor: vars.colors.gray[900],
    color: vars.colors.gray[400],

    a: {
      color: vars.colors.gray[100],
      textDecoration: 'underline',

      '&:hover': {
        color: vars.colors.gray[300],
      },
    },

    '.Container': {
      margin: '0 auto',
      width: '80%',
      display: 'inline-block',
    },

    '.Info': {
      fontSize: '.9em',
    },

    '.Menus': {
      display: 'inline-block',
    },
    '.Child': {
      '.Menu': {
        float: 'none',
      },

      ul: {
        li: {
          float: 'none',
        },
      },
    },
    '.Credits': {
      margin: '2em 0 1em',
    },
  },

  '@media screen and (min-width: 800px)': {
    '.Child': {
      float: 'left',
      width: '30%',
      margin: '0 1.5%',
    },
  },
})