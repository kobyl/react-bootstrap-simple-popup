import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import { SimplePopup, DisplayProps } from "./lib/SimplePopup";
import { Container } from "react-bootstrap";

let simpleOpen = () => {};
let simpleClose = () => {};
let openWithProps = (display: DisplayProps) => {};

let childrenOpen = () => {};
let childrenClose = () => {};

ReactDOM.render(
  [
    <button
      onClick={() => {
        childrenOpen();
      }}
    >
      Open Popup With children
    </button>,
    <button
      onClick={() => {
        simpleOpen();
      }}
    >
      Open Simple Popup
    </button>,
    <button
      onClick={() => {
        openWithProps({
          title: "Title is set during click",
          message:
            "We modified the title, message, buttons and callbacks!",
          buttons: [
            {
              id: "new1",
              label: "Choice 1"
            },
            {
              id: "new2",
              label: "Choice 2"
            }
          ],
          on: id => {
            alert(id + "was clicked");
            simpleClose();
          }
        });
      }}
    >
      Modify the popup
    </button>,
    <Container>
      <SimplePopup
        title="Test Simple Popup"
        message="This one just displays this message"
        buttons={[
          {
            label: "Ok!",
            id: "okButton"
          }
        ]}
        controls={(c, o, setProps) => {
          simpleOpen = o;
          simpleClose = c;
          openWithProps = setProps;
        }}
        on={() => simpleClose()}
      />
      <SimplePopup
        title="Popup with children"
        controls={(c, o) => {
          childrenOpen = o;
          childrenClose = c;
        }}
      >
        <p>This one has embedded content</p>
        <input
          type="text"
          style={{ width: "100%" }}
          value="...with some form elements."
        />
        <br />
        <button onClick={() => childrenClose()}>Close</button>
      </SimplePopup>
    </Container>
  ],
  document.getElementById("root")
);
