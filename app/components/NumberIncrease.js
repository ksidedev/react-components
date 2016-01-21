var React = require('react');

class NumberIncrease extends React.Component {

	constructor() {
		super();
		this.state = { 
			val: 0,
			changedisplay: 'false',
		},
		this.updateme = this.updateme.bind(this)
	}

	updateme(e) {
		this.setState({val: this.state.val + 2, changedisplay: !this.state.changedisplay})
	}

  	render(){
	    return (
			<div className="col-xs-12 outer-wrapper padding-bottom20">

	    		<div className="panel panel-info"> 
	    			<div className="panel-heading"> 
		    			<h3 className="panel-title">Click to increase</h3> 
		    		</div> 
		    		<div className="panel-body"> 
		    			<button onClick={this.updateme}>Click to increase</button>
						<span className={this.state.changedisplay ? "alert alert-warning" : "alert alert-success"}>{this.state.val}</span>
					</div> 
	    		</div>      		
			</div>
	    )
  	}
}

module.exports = NumberIncrease;