import React from "react";
import { Route, Switch } from "react-router";
import "./content.css";
import { Me } from "./me";
import { Projects } from "./projects";
import { Work } from "./work";

export const Content = () => {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={Me} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </div>
  );
};
