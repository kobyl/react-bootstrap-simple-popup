import * as React from "react";
import { Modal, Button } from "react-bootstrap";

export interface ButtonInfo {
  label: string;
  class?: string;
  id?: string;
}

export interface DisplayProps {
  title: string;
  buttons?: ButtonInfo[];
  message?: string;
  on?: (buttonId: string) => void;
}

export interface Props extends DisplayProps {
  controls: (
    close: () => void,
    open: () => void,
    openWithProps: (display: DisplayProps) => void
  ) => void;
}

interface State extends DisplayProps {
  opened: boolean;
}

export class SimplePopup extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      title: ""
    };
  }

  componentDidMount() {
    console.log("popup mounted");
    let { controls, ...rest} = this.props;
    controls(
      () => this.setState({ opened: false }),
      () => this.setState({ opened: true }),
      (displayProps: DisplayProps) => {
        this.setState({
          ...displayProps,
          opened: true
        });
      }
    );
    this.setState(rest as DisplayProps);
  }

  render() {
    let on = this.state.on || (() => {});
    let buttons = this.state.buttons || [];
    let buttonNum = 0;
    return (
      <Modal show={this.state.opened} onHide={() => {}}>
        <Modal.Header>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {this.state.message && <p>{this.state.message}</p>}
          {this.props.children && this.props.children}
        </Modal.Body>

        <Modal.Footer>
          {buttons.map(info => {
            return (
              <Button
                className={info.class}
                onClick={() => {
                  on(info.id);
                }}
                key={`button${buttonNum++}`}
              >
                {info.label}
              </Button>
            );
          })}
        </Modal.Footer>
      </Modal>
    );
  }
}
