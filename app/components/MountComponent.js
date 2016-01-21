var React = require('react');
var ReactDOM = require('react-dom');

class RenderMOunt extends React.Component {
  render(){
	    return (
	    	<div className="col-xs-12 outer-wrapper padding-bottom20">
		    	<div role="alert" className="alert alert-info"> 
		    		<h4>This content can be mounted and unmunted</h4>
			    	<strong>Heads up!</strong> 
			    	This content will be unmounted if the abouve unmount button is clicked
		    	</div>
			</div>
	    )
  	}
}

class MountComponent extends React.Component {
  constructor(){
    super();
  }
  mount(){
    ReactDOM.render(<RenderMOunt />, document.getElementById('mount-to-this'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('mount-to-this'))
  }
  render(){
    return (
        <div className="col-xs-12 outer-wrapper padding-bottom20">

	    	<div className="panel panel-info"> 
		    		<div className="panel-heading"> 
		    			<h3 className="panel-title">Mount and Unmount</h3> 
		    		</div> 
		    		<div className="panel-body"> 
		    			<button className="btn btn-primary" onClick={this.mount.bind(this)}>Mount</button>
			          	<button className="btn btn-default" onClick={this.unmount.bind(this)}>Unmount</button>
			          	<div id="mount-to-this"></div>
					</div> 
	    	</div>      		
		</div>
	)
  }
}

module.exports = MountComponent;