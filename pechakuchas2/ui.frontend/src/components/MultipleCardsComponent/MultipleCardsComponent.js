import React, { Component } from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import './MultipleCardsComponent.css'

const MultipleCardsComponentEditConfig = {
  emptyLabel: 'Multiple Cards Component',
  isEmpty: function (props) {
    return !props 
  },
};

class MultipleCardsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainContent: ''
    };
  }

  render() {
    return (
      <>
        {console.log("This are the props for this thing")}
        {console.log(this.props)}
        {this.props.cardsList && console.log(this.props.cardsList)}
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={this.props.fileReference} alt="Avatar"></img>
            </div>
            <div class="flip-card-back">
              <p>{this.state.mainContent}</p>
            </div>
          </div>
        </div>

        <div className='cards-group'>
          {this.props.cardsList && this.props.cardsList.map((item, index) => (
            <div key={index} class="flip-card" onMouseOver={() => { this.setState({ mainContent: item.description }) }}>
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  {item.coverText}
                </div>
                <div class="flip-card-back">
                  {item.backdropText}
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default MapTo('pechakucha2-react/components/multiple-cards-component')(
  MultipleCardsComponent,
  MultipleCardsComponentEditConfig
);
