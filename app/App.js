var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./components/Main');
var ToggleClass = require('./components/ToggleClass');
var Slider = require('./components/Slider');
var ReferenceClass = require('./components/ReferenceClass');
var ShowHide = require('./components/ShowHide');
var NumberIncrease = require('./components/NumberIncrease');
var SelfIncrement = require('./components/SelfIncrement');
var DynamicContent = require('./components/DynamicContent');
var MountComponent = require('./components/MountComponent');


var App = React.createClass({

  render: function(){
    return (
      <div className="row">
	        wqwqwe
      </div>
    )
  }
})

ReactDOM.render(<Main />, document.getElementById('main'));
ReactDOM.render(<ToggleClass />, document.getElementById('component-one'));
ReactDOM.render(<Slider />, document.getElementById('slider'));
ReactDOM.render(<ReferenceClass />, document.getElementById('referenceclass'));
ReactDOM.render(<ShowHide />, document.getElementById('showhide'));
ReactDOM.render(<SelfIncrement />, document.getElementById('selfincrement'));
ReactDOM.render(<NumberIncrease />, document.getElementById('numberincrease'));
ReactDOM.render(<DynamicContent />, document.getElementById('dynamiccontent'));
ReactDOM.render(<MountComponent />, document.getElementById('mountcomponent'));
