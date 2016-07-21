import React from "react";
import gourmet from "gourmet-runtime";
import VarietalList from "./components/VarietalList";
import WineList from "./components/WineList";
import WineDetail from "./components/WineDetail";

export default class MainView extends React.Component {
  static contextTypes = {
    gmctx: React.PropTypes.object
  };

  _updateTitle(props, context) {
    var gmctx = context.gmctx;
    var data = gmctx.data;
    var title = props.params.wineId && data.getWine(props.params.wineId).name;
    title = title || "React Router Example";
    if (gourmet.isServer) {
      gmctx.setTitle(title);
    } else {
      document.title = title;
    }
  }

  componentWillMount() {
    this._updateTitle(this.props, this.context);
  }

  componentWillReceiveProps(props, context) {
    this._updateTitle(props, context);
  }

  render() {
    var gmctx = this.context.gmctx;   // gourmet context
    var data = gmctx.data;            // custom data
    var params = this.props.params;   // router parameters
    var selectedVarietal;             // currently selected varietal if any
    var selectedWine;                 // currently selected wine if any

    if (params.wineId) {
      selectedWine = params.wineId;
      selectedVarietal = data.getWine(selectedWine).varietalId;
    } else if (params.varietalId) {
      selectedVarietal = params.varietalId;
    }

    return (
      <div className="row">
        <div className="col-md-3">
          <VarietalList varietals={data.varietals} selectedVarietal={selectedVarietal}/>
        </div>
        <div className="col-md-4">
          {selectedVarietal ? (<WineList wines={data.findWines(selectedVarietal)} selectedWine={selectedWine}/>) : null}
        </div>
        <div className="col-md-5">
          {selectedWine ? (<WineDetail wine={data.getWine(selectedWine)}/>) : null}
        </div>
      </div>
    );
  }
}
