import * as React from "react";
export interface ButtonInfo {
    label: string;
    class: string;
    id: string;
}
export interface Props {
    message: string;
    title: string;
    buttons?: ButtonInfo[];
    on?: (buttonId: string) => void;
    controls: (close: () => void, open: () => void) => void;
}
interface State {
    opened: boolean;
}
export declare class SimplePopup extends React.Component<Props, State> {
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
