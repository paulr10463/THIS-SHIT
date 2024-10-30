import React, { Component } from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import './ConsoleComponent.css'
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

const ConsoleComponentEditConfig = {
  emptyLabel: 'Multiple Cards Component',
  isEmpty: function (props) {
    return !props
  },
};

class ConsoleComponent extends Component {
  state = {
    isCopied: false
  };

  componentDidMount(){
    Prism.highlightAll();
  }

  copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(this.props.code);
      this.setState({ isCopied: true });
      
      // Reset the "Copied!" message after 2 seconds
      setTimeout(() => {
        this.setState({ isCopied: false });
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  render() {
    return (
      <div className="cmp-console">
        <div className="cmp-console__content">
          <h4 className="cmp-console__content__title">
            {this.props.title}
          </h4>
          <p className="cmp-console__content__description">
            {this.props.description}
          </p>
        </div>
        <div className="cmp-console__code">
          <button 
            className="cmp-console__copy-button"
            onClick={this.copyToClipboard}
          >
            {this.state.isCopied ? 'Copied!' : 'Copy Code'}
          </button>
          <pre>
            <code className="language-js">
              {this.props.code}
            </code>
          </pre>
        </div>
      </div>
    );
  }
}

export default MapTo('pechakuchas2-react/components/console')(
  ConsoleComponent,
  ConsoleComponentEditConfig
);
