export const View = state => [
  Hero({ state, src: '/img/hero.jpg' }),
  section({ id: 'about', class: 'About' }, [
    h2('About Page on front page'),
    Accordion({
      state,
      key: 'About',
      title: 'About',
      class: 'left',
      items: [
        { title: 'h2 one', text: 'content one' },
        { title: 'h2 two', text: 'content two' },
        {
          title: 'h2 three',
          text: [
            p('Content field three.'),
            p('Lets add some paragraphs.'),
            p('Lets add some paragraphs.'),
            p('Lets add some paragraphs.'),
          ],
        },
      ],
    }),

    Accordion({
      state,
      key: 'About2',
      title: 'FAQ',
      class: 'right',
      items: [
        { title: 'h2 one', text: 'content one' },
        { title: 'h2 two', text: 'content two' },
        {
          title: 'h2 three',
          text: [
            p('Content field three.'),
            p('Lets add some paragraphs.'),
            p('Lets add some paragraphs.'),
            p('Lets add some paragraphs.'),
          ],
        },
      ],
    }),
  ]),
]

export const state = {
  title: 'h1 indexpage',
  description: 'custom description',
  accordions: {
    About: -1,
    About2: 0,
  },
}

export const style = {
  'section': {
    minHeight: '100vh',
    width: '100%',
    padding: '5%',

    '&.About': {
      backgroundColor: 'purple',
      color: '#CCCCCC',

      '.left': {
        float: 'left',
        width: '49%',
      },
      '.right': {
        float: 'right',
        width: '49%',
      },

      a: {
        color: '#EEEEEE',
        '&:hover': {
          color: '#EFEFEF',
        },
      },
    },
  },
}

export const global = {
  state: {
    accordions: true,
  },
}
