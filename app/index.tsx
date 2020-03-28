import React, { Fragment } from "react";
import { render } from "react-dom";
import { AppContainer as ReactHotAppContainer } from "react-hot-loader";
import { Pages } from "./Pages";

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

declare const Root: HTMLDivElement;

document.addEventListener("DOMContentLoaded", () =>
  render(
    <AppContainer>
      <Pages />
    </AppContainer>,
    Root
  )
);
