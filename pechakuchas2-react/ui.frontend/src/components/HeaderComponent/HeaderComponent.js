import React, { Component } from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import './HeaderComponent.css'

const HeaderComponentConfig = {
  emptyLabel: "Header Component",
  isEmpty: function (props) {
    return !props;
  },
};
 
class HeaderComponent extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    const { buttonsList, linksList,  fileReference} = this.props;
 
    return (
      <>
        <div className="cmp-header">
          <img className="cmp-header__img" src={fileReference}></img>
          <nav className="cmp-header__navbar">
            <ul className="cmp-header__navbar-list">
              {linksList && linksList.map((link) => (
                <li className="cmp-header__navbar-list-item">
                  <a href={link.linkUrl} className="cmp-header__navbar-list-item-link">{link.linkTitle}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="cmp-header__buttons">
            <ul className="cmp-header__buttons-list">
              {buttonsList && buttonsList.map((link) => (
                <li className="cmp-header__buttons-list-item">
                  <button href={link.linkUrl} className="cmp-header__buttons-list-item-link">{link.linkTitle}</button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="cmp-header-2">
        </div>
      </>
    );
  }
}
 
export default MapTo("pechakuchas2-react/components/header")(
  HeaderComponent,
  HeaderComponentConfig
);
 