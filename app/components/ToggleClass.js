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
		this.setState({cat: '10',colour: !this.state.colour});
		// toggle = this.state.colour;
	}

  	render(){
	    return (
	    	<div>
	    	<span>1.) </span>
	      		<button onClick={this.numUpdate}>Click me</button>
				<p className={this.state.colour ? "alert alert-warning" : "alert alert-success"}>{this.state.txt}</p>
				<hr />
			</div>
	    )
  	}
}

module.exports = ToggleClass;