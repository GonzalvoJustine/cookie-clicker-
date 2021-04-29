import React from "react";
import {BrowserRouter, Switch, Route, NavLink} from "react-router-dom";
import Options from '../templates/Options';
import Stats from '../templates/Stats';
import Info from '../templates/Info';
import Popup from "reactjs-popup";
import Legacy from "../templates/Legacy";

export default function Router() {

  let comments = "You feel like making cookies. But nobody wants to eat your cookies.";

  return (
    <BrowserRouter>
      <div className='Router'>
        <div className='Router__manager_nav'>
          <nav>
            <ul>
              <li>
                <NavLink to="/options" className='Router__nav options'>Options</NavLink>
              </li>
              <li>
                <NavLink to="/stats" className='Router__nav stats'>Stats</NavLink>
              </li>
            </ul>
          </nav>
          <p className='Router__comments'>{comments}</p>
          <nav>
            <ul>
              <li>
                <NavLink to="/info" className='Router__nav info'>Info</NavLink>
              </li>
              <li>
                <Popup trigger={<NavLink to="/legacy" className='Router__nav legacy'>Legacy</NavLink>} >
                  <Legacy />
                </Popup>
              </li>
            </ul>
          </nav>
          <div className="Router__separatorBottom"></div>
        </div>

        <Switch>
          <Route path="/options">
            <Options />
          </Route>
          <Route path="/stats">
            <Stats />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );

}
