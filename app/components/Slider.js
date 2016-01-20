var React = require('react');



class Slider extends React.Component {

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
	      		<span>2.)</span> 
	    		<UpdateSlider sliderUpdate={this.sliderUpdate} />
				<h3>{this.state.slidertext}</h3>
				<hr />
			</div>
	    )
  	}
}

class UpdateSlider extends React.Component {
	render() {
		return (
			<input type="range" 
			min="0" 
			max="255"
			onChange={this.props.sliderUpdate} />

		);
	}
}

module.exports = Slider;