var React = require('react');

class DynamicContent extends React.Component {

  	constructor(){
	    super();
	    this.state = {data: [
	      {id: 1, name: "Simon Bailey",title:"Developer"},{id: 2, name: "Thomas Burleson",title:"Project Manager"},
		      {id: 3, name: "Will Button",title:"Tester"},{id: 4, name: "Ben Clinkinbeard",title:"Developer"},
		      {id: 5, name: "Kent Dodds",title:"Developer"},{id: 6, name: "Trevor Ewen",title:"Project Manager"},
		      {id: 7, name: "Aaron Frost",title:"Tester"},{id: 8, name: "Joel Hooks",title:"Developer"},
		      {id: 9, name: "Jafar Husain",title:"Developer"},{id: 10, name: "Tim Kindberg",title:"Developer"},
		      {id: 11, name: "John Lindquist",title:"Tester"},
		      {id: 12, name: "Joe Maddalone",title:"Developer"},
		      {id: 13, name: "Tyler McGinnis",title:"Project Manager"},{id: 14, name: "Scott Moss",title:"Project Manager"},
		      {id: 15, name: "Robert Penner",title:"Developer"},{id: 16, name: "Keith Peters",title:"Developer"},
		      {id: 17, name: "Lukas Ruebbelke",title:"Project Manager"},
		      {id: 18, name: "Brett Shollenberger",title:"Developer"}
	    ]}
  	}
	render(){
	    let rows = this.state.data.map( person => {
	      return <PersonRow key={person.id} data={person} />
	    })
	    return (
			<div>
				7.) <div>
			        	<div>{rows}</div>
			      	</div>
				<hr />
			</div>
	    );
	 }								
}

const PersonRow = (props) => {
  return <p className="col-xs-6">
    <span>{props.data.id + '.)' + ' '}</span>
    <span>{props.data.name + ' ' + '(' + props.data.title + ')'}</span>
  </p>
}

module.exports = DynamicContent;