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
      mainContent: '',
      cardSelected: false
    };
  }

  onMouseEnterCard(description){
    this.setState({ mainContent: description, cardSelected:true });
  }

  onMouseLeaveCard(){
    this.setState({ cardSelected:false });
  }

  render() {
    return (
      <div className='multi-cards'>
        <div class="main-card">
          <div class="flip-card" >
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={this.props.fileReference} alt="Avatar"></img>
              </div>
              <div 
                className="flip-card-back" 
                style={{ background: this.state.cardSelected ? 'rgba(24, 24, 24, 0.678)' : 'transparent' , 
                  color: this.state.cardSelected ? 'white' : 'transparent'
                }}>
                <p>{this.state.mainContent}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='cards-group'>
          {this.props.multipleCardsList && this.props.multipleCardsList.map((item, index) => (
            <div 
              key={index} 
              class="flip-card" 
              onMouseEnter={()=>this.onMouseEnterCard(item.description)}
              onMouseLeave={()=>this.onMouseLeaveCard()}>
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
      </div>
    );
  }
}

export default MapTo('pechakuchas2-react/components/multiplecardscomponent')(
  MultipleCardsComponent,
  MultipleCardsComponentEditConfig
);
