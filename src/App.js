import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AceEditor from 'react-ace';
import brace from 'brace';

import 'brace/mode/python';
import 'brace/theme/monokai';

class App extends Component {
  render() {
    return (
      <div>
        <div className="columns is-centered" id="editor">
          <div className="column">
            <AceEditor mode="python" theme="github" fontSize={16} width="100%" height="400px" showPrintMargin={false} editorProps={{$blockScrolling: true}}/>
          </div>
        </div>
        <div className="columns is-centered" id="terminal">
          <div className="column">
            <textarea class="textarea" placeholder="python cli" rows="5" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
