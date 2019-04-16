import { History } from "history"
import React from "react"
import { Route, Switch } from "react-router-dom"

import { CalendarBoard } from "../CalendarBoard"
import { EventList } from "../Event"
import { Header } from "../Header"
import { TaskList } from "../Task"
import "./App.css"

export interface Props {
  history: History
}
export default ({ history: { push } }: Props) => (
  <div className="App">
    <Header />
    <div onClick={() => push("/calendar-board")}>Calendar Board</div>
    <div onClick={() => push("/task-list")}>Task List</div>
    <div onClick={() => push("/event-list")}>Event List</div>
    <Switch>
      <Route exact path="/calendar-board" render={CalendarBoard} />
      <Route exact path="/task-list" component={TaskList} />
      <Route exact path="/event-list" component={EventList} />
    </Switch>
  </div>
)
