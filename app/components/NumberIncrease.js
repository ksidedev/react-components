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
		this.setState({val: this.state.val + 1, changedisplay: !this.state.changedisplay})
	}

	componentWillMount() {
		this.setState({m: 2})
	}

	componentDidMount() {
		console.log(ReactDOM.findDOMNode())
		// this.inc = setInterval(this.updateinterval,500)
	}

  	render(){
	    return (
	    	<div>
	    	<span>5.) </span>
	      		<button onClick={this.updateme}>Click to increase</button>
				<span className={this.state.changedisplay ? "alert alert-warning" : "alert alert-success"}>{this.state.val * this.state.m}</span>
				<hr />
			</div>
	    )
  	}
}

module.exports = NumberIncrease;