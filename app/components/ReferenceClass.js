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

	    	<div className="col-xs-12 outer-wrapper padding-bottom20">

	    		<div className="panel panel-info"> 
	    			<div className="panel-heading"> 
		    			<h3 className="panel-title">Reference Another component</h3> 
		    		</div> 
		    		<div className="panel-body"> 
    					<span>I <Heart/> React</span>
					</div> 
	    		</div>      		
			</div>
	    );
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