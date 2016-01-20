var React = require('react');



class ReferenceClass extends React.Component {

	constructor() {
		super();
		this.state = { 
			slidertext: '0',
		},
		this.sliderUpdate = this.sliderUpdate.bind(this)
	}

	sliderUpdate(e) {
		this.setState({slidertext: e.target.value})
	}

  	render(){
	    return (
	    	<div>
	      		<span>3.) </span> 
	    		<span>I <Heart/> React</span>
				<hr />
			</div>
	    )
  	}
}

class Heart extends React.Component {
	render() {
		return (
			<span className="glyphicon glyphicon-heart"></span>

		);
	}
}

module.exports = ReferenceClass;