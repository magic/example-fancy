export const View = ({ page, state }) => [
  Header(state),
  div({ class: 'Page' }, page),
  Footer(state,
    div({ class: 'FooterMenuWrapper' }, [
      div({ class: 'FooterMenu'}, [
        h2('Magic github organizations'),
        Menu({
          items: [
            { text: '@magic', to: 'https://magic.github.io/'},
            { text: '@magic-modules', to: 'https://magic-modules.github.io/'},
            { text: '@magic-themes', to: 'https://magic-themes.github.io/'},
            { text: '@magic-libraries', to: 'https://magic-libraries.github.io/'},
          ],
        }),
      ]),
      div({ class: 'FooterMenu' }, [
        h2('Magic npm organizations'),
        Menu({
          items: [
            { text: '@magic', to: 'https://www.npmjs.com/org/magic' },
            { text: '@magic-modules', to: 'https://www.npmjs.com/org/magic-modules' },
            { text: '@magic-themes', to: 'https://www.npmjs.com/org/magic-themes' },
            { text: '@magic-libraries', to: 'https://www.npmjs.com/org/magic-libraries' },
          ],
        }),
      ]),
    ]),
  ),
]

export const style = {
  '.Route': {},
  '.FooterMenuWrapper': {
    margin: '0 auto',
    width: '80%',
    display: 'inline-block',
  },
  '.FooterMenu': {
    float: 'left',
    width: '45%',
    margin: '0 2.5%',

    '.Menu': {
      float: 'none',
    },

    ul: {
      li: {
        float: 'none',
      },
    },
  },
}