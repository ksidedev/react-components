var React = require('react');

class SelfIncrement extends React.Component {

	constructor() {
		super();
		this.state = { 
			interval: 100
		},
		this.updateinterval = this.updateinterval.bind(this)
	}

	updateinterval(e) {
		this.setState({interval: this.state.interval - 1})
	}

	selfIncrement(e) {
		this.inc = setInterval(this.updateinterval,1000)
		console.log('Start');
		return this.inc;
	}

	stopSelfIncrement(e) {
		this.inc2 = clearInterval(this.inc,1000)
		console.log('Stop');
		return this.inc2;
	}

  	render(){
		var buttonColour;
		var red;
		buttonColour = 'link'

	    return (
			<div className="col-xs-12 outer-wrapper padding-bottom20">

		    	<div className="panel panel-info"> 
			    		<div className="panel-heading"> 
			    			<h3 className="panel-title">Self Increment</h3> 
			    		</div> 
			    		<div className="panel-body"> 
			    			<span>
	      						<button className={buttonColour} onClick={this.selfIncrement.bind(this)}>Self Increment Interval</button> 
	      						<span className="number"> {this.state.interval}</span>
	      					</span>
							<button className={buttonColour} onClick={this.stopSelfIncrement.bind(this)}>Stop Self incrementing</button>
						</div> 
		    	</div>      		
			</div>
	    )
  	}
}

module.exports = SelfIncrement;
