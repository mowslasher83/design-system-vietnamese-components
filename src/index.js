import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './components/Button';

const App = () => (
  <div>
    <h1>Thư viện Thành phần Giao diện Người dùng</h1>
    <Button text="Nhấn vào đây" />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));