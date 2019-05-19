import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SimplePopup } from './SimplePopup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SimplePopup message="test" title="Test Title" controls={(close, open) => {}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
