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
			<div className="col-xs-12 outer-wrapper padding-bottom20">

		    	<div className="panel panel-info"> 
			    		<div className="panel-heading"> 
			    			<h3 className="panel-title">Slider</h3> 
			    		</div> 
			    		<div className="panel-body"> 
			    			<UpdateSlider sliderUpdate={this.sliderUpdate} />
							<h3>{this.state.slidertext}</h3>
						</div> 
		    	</div>      		
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