import "./WineDetail.less";
import React from "react";

function _replaceLineBreaks(text) {
  return {__html: text.replace("\n", "<br>")};
}

export default class WineDetail extends React.Component {
  static propTypes = {
    wine: React.PropTypes.object.isRequired
  };

  render() {
    var wine = this.props.wine;
    return (
      <div className="row wine-detail">
        <div className="col-xs-7">
          <h3>{wine.name}</h3>
          <p>
            <span className="label label-info">${wine.price}</span>
            {Object.keys(wine.acclaim).map(name => {
              var points = wine.acclaim[name];
              return (
                <span className="label label-default acclaim-points" key={name}>
                  {name + " " + points}
                </span>
              );
            })}
          </p>
          <p dangerouslySetInnerHTML={_replaceLineBreaks(wine.note)}/>
        </div>
        <div className="col-xs-5">
          <img className="img-responsive" src={wine.photo} alt={wine.name}/>
        </div>
      </div>
    );
  }
}
