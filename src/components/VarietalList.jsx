import React from "react";
import {Link} from "react-router";

export default class VarietalList extends React.Component {
  static propTypes =  {
    varietals: React.PropTypes.array.isRequired,
    selectedVarietal: React.PropTypes.string
  };

  render() {
    return (
      <div className="list-group">
        {this.props.varietals.map(varietal => {
          var isActive = (varietal.id === this.props.selectedVarietal);
          return (
            <Link to={"/varietal/" + varietal.id} className={"list-group-item" + (isActive ? " active" : "")} key={varietal.id}>
              <span className="badge">{varietal.count}</span>
              {varietal.name}
            </Link>
          );
        })}
      </div>
    );
  }
}
