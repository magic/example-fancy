export const View = state => [
  Hero({ ...state, src: '/img/hero.jpg' }),
  div({ class: 'About' }, [
    h2('About Page on front page'),
  ]),
]

export const state = {
  title: 'h1 indexpage',
  description: 'custom description',
}
