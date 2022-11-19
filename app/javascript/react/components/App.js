import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import ToolsIndexContainer from './ToolsIndexContainer.js'
import ToolShowContainer from './ToolShowContainer.js'
import UserShow from './UserShow.js'


export const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ToolsIndexContainer} />
          <Route exact path="/tools" component={ToolsIndexContainer} />
          <Route exact path="/tools/:toolId" component={ToolShowContainer} />
          <Route exact path="/users/:userId" component={UserShow} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
