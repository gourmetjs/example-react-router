import React from "react";
import {Link} from "react-router";

export default class WineList extends React.Component {
  static propTypes = {
    wines: React.PropTypes.array.isRequired,
    selectedWine: React.PropTypes.string
  };

  render() {
    return (
      <div className="list-group">
        {this.props.wines.map(wine => {
          var isActive = (wine.id === this.props.selectedWine);
          return (
            <Link to={"/wine/" + wine.id} className={"list-group-item" + (isActive ? " active" : "")} key={wine.id}>
              {wine.name}
              &nbsp;
              <span className="label label-info">${wine.price}</span>
            </Link>
          );
        })}
      </div>
    );
  }
}
