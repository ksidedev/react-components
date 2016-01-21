var React = require('react');



class ToggleClass extends React.Component {

	constructor() {
		super();
		this.state = { 
			txt: 'This text will update' ,
		},
		this.numUpdate = this.numUpdate.bind(this)
	}

	numUpdate(e) {
		var toggle;
		this.setState({cat: '10',colour: !this.state.colour,txt: 'This is the updated text'});
		// toggle = this.state.colour;
	}

  	render(){
	    return (
	    	<div className="col-xs-12 outer-wrapper padding-bottom20">

		    	<div className="panel panel-info"> 
			    		<div className="panel-heading"> 
			    			<h3 className="panel-title">Toggle Class</h3> 
			    		</div> 
			    		<div className="panel-body"> 
			    			<button onClick={this.numUpdate}>Toggle class</button>
							<p className={this.state.colour ? "alert alert-warning" : "alert alert-success"}>{this.state.txt}</p> 
						</div> 
		    	</div>      		
			</div>
	    )
  	}
}

module.exports = ToggleClass;