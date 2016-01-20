var React = require('react');



class ShowHide extends React.Component {

	constructor() {
		super();
		this.state = { 
			hide: 'false'
		}
	}

	hideShow(e) {
		this.setState({hide: !this.state.hide})
	}

  	render(){
  		var buttonColour;
		var red;
		buttonColour = 'link'

	    return (
	    	<div>
	    	<span>4.) </span>
	      		<span>
	      		<button className={buttonColour} onClick={this.hideShow.bind(this)}>Show / Hide</button> 
	      		<span className={this.state.hide ? "show" : "hide"}> This will be hidden</span></span>
				<hr />
			</div>
	    )
  	}
}

module.exports = ShowHide;