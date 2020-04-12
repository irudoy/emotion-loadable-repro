import React from 'react'
import loadable from '@loadable/component'

const Styled = loadable(() => import('./Styled'))

const App = () => (
  <Styled>Hi</Styled>
)

export default App
