import React, { Component } from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import './CustomnavComponent.css'

const CustomnavComponentConfig = {
  emptyLabel: "Customnav Component",
  isEmpty: function (props) {
    return !props;
  },
};
 
class CustomnavComponent extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    const {  navList } = this.props;
 
    return (
      <div className="cmp-custommav">
        <nav className="cmp-customnav__navbar">
          <ul className="cmp-customnav__navbar-list">   
              {navList && navList.map((link) => (
                <li className="cmp-customnav__navbar-list-item">
                  <a href={link.linkUrl} className="cmp-customnav__navbar-list-item-link">{link.linkTitle}</a>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    );
  }
}
 
export default MapTo("pechakuchas2-react/components/navigationcustom")(
  CustomnavComponent,
  CustomnavComponentConfig
);
 