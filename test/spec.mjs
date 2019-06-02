import { is } from '@magic/test'

import { state } from '../src/app.mjs'

export default [{ fn: () => state, expect: is.object, info: 'app.state is an object' }]
