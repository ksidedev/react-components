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

	    	<div className="col-xs-12 outer-wrapper padding-bottom20">

		    	<div className="panel panel-info"> 
			    		<div className="panel-heading"> 
			    			<h3 className="panel-title">Slider</h3> 
			    		</div> 
			    		<div className="panel-body"> 
			    			<span>
	      						<button className={buttonColour} onClick={this.hideShow.bind(this)}>Show / Hide</button> 
	      						<span className={this.state.hide ? "show" : "hide"}> This will be hidden</span>
	      					</span>
						</div> 
		    	</div>      		
			</div>
	    )
  	}
}

module.exports = ShowHide;