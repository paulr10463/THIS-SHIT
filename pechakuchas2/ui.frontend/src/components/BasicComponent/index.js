import React, { Component } from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import './BasicComponent.css'
const BasicComponentEditConfig = {
  emptyLabel: 'Basic Component',
  isEmpty: function (props) {
    return !props || props.text || props.file || props.url || props.number;
  },
};

class BasicComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: props.text || '',
      values: props.number || 0,
      apiData: null,
    };
  }

  componentDidMount() {
    fetch('https://v2.jokeapi.dev/joke/Any') 
      .then((response) => response.json())
      .then((data) => this.setState({ apiData: data }))
      .catch((error) => console.error('Error fetching data:', error));
  }

  addNumber(step) {
    this.setState({ values: this.state.values + step });
  }

  render() {
    const { checkbox, fileReference, url } = this.props;
    const { names, values, apiData } = this.state;

    return (
      <div className='card'>
        {this.props.customnav && this.props.customnav.map((item, index) => (
            <div key={index}>
                <a href={item.link}>{item.label}</a>
            </div>
        ))}

        
        <div>My Text property value: {names}</div>
        <div>My number value: {values}</div>
        <div>Checkbox is: {checkbox ? 'checked' : 'unchecked'}</div>
        
        <img src={url} alt="Selected file" />
        <img src={fileReference} alt="Selected file" />
        
        <div>File name: {fileReference}</div>
        
        <button onClick={() => this.setState({ names: this.state.names + '22' })}>
          Append 22 to Text
        </button>
        <button onClick={() => this.addNumber(2)}>Add 2 to Number</button>
        
        {/* Display API data */}
        {apiData ? (
          <div>
            <h3>API Data:</h3>
            <pre>{JSON.stringify(apiData, null, 2)}</pre>
          </div>
        ) : (
          <div>Loading API data...</div>
        )}
      </div>
    );
  }
}

export default MapTo('pechakucha2-react/components/basic-component')(
  BasicComponent,
  BasicComponentEditConfig
);
