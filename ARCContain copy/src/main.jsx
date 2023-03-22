import React from 'react';
import ReactDOM from 'react-dom';

// reference code
// import './index.css'

// class ShoppingListItem extends React.Component{
//   /* Uncomment this constructor if you feel like you need it*/
//   constructor(props){
//     super(props)
//   }
//   render(){
//     if (!this.props.bought) {
//       return(
//         <li>{this.props.itemName} &nbsp;
//         <button
//           onClick={this.props.itemClick} 
//           > Bought?
//         </button>
//         </li>
//       );
//     } else if (this.props.bought) {
//       return(
//         <li>{this.props.itemName} bought! &nbsp;</li>);
//     }
//   }
// }
// class ShoppingList extends React.Component {
//   /* Uncomment this constructor if you feel like you need it*/
//   constructor(props){
//     super(props);
//     this.state = {"items": ["Bananas", "Oat Milk", "Coffee","Beans"], "bought": [false,false,false,false]};
//   }
// // this is the boig challenge here
//   //this is needed ONLY for the last challenge
//   onKeyUp = (event) => {
//     if (event.key === "Enter"){
//      let myStr = "Enter Key Pressed and this was entered: " + event.target.value
//       let items = this.state.items;
//       let bought = this.state.bought;
//       items.push(String(event.target.value));
//       bought.push(false);
//       this.setState({items,bought});
//     }
//   }

//   // this changes the value of the boolean tied to items
//   handleClick(item) {
//     let items = this.state.items;
//     let bought = this.state.bought;
//     // items[items.indexOf(item)] = String(item) + " bought!"
//     // these set the new values
//     // of the list items take the value with index that is the same as the index of our input item --> changing the specific item we inputter before in this list
//     bought[items.indexOf(item)] = true;
//     console.log(bought);
//     this.setState({items, bought});
//     // method changes the values
//   }
//   render() {
//     //use this list to create ShoppingListItem Components
//     let itemsBoughtCounter = 0;

//     for (let i = 0; i < this.state.items.length; i++) {
//       if (this.state.bought[i]) {
//         itemsBoughtCounter+=1;
//       }
//     }

//     let people = "Noah";

//     return (
//       <div className="shopping-list">
//         <h1>Shopping List for {people}</h1>
//         <ul>
//           {this.state.items.map((item, index)=>
//           (<ShoppingListItem 
//             key={`${index}${item}`} 
//             itemName={item} 
//             bought={this.state.bought[index]} 
//             itemClick={()=> this.handleClick(item)}/>))}
// {/* map returns a shoppinglist item component for each item in the array */}
//         </ul>
//         {/* Ignore this items bought counter until later challenges*/}
//         <div>{itemsBoughtCounter} out of {this.state.items.length} items bought.</div>
//         {/*a FORM used for enerting things. ONLY NEEDED for later challenges.*/}
//         <form>
//            <label htmlFor="add an item">add an item: &nbsp;</label>
//            <input
//              type="text"
//              name="add an item"
//              defaultValue=""
//              onKeyDown={this.onKeyUp}
//            />
//         </form>
//       </div>
//     );
//   }
// }

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      tempVelocity: 1,
      toxicity: 0,
      stability: 0,
    }
  }

    tempFluctuate(temp) {
      let addTemp = this.state.temp + 1
      let newTemp = this.state.temp
      newTemp = addTemp
      this.setState({temp: newTemp})

      // Math.floor(Math.random() * 2) + 1;

    // let seconds = this.state.time[2] + 1 
    // // defines third value of time array as +1
    // let newTime = this.state.time
    // // this variable calls the actual time array (they it is still defined as [0,0,0])
    // newTime[2] = seconds
    // // this equation says get the third value and set it to the seconds variable
    // this.setState({time: newTime})
    // // this sets the global time array as the new value
    }

    componentDidMount() {
      setInterval(() => this.tempFluctuate(), 3000)
      }

    render() {
       let tempDisplay = this.state.temp
       return (<div>
        <div> {tempDisplay}˚F</div>
        <TimeDisplay/>,
        </div>
       );
      }   
}

class TimeDisplay extends React.Component {
  constructor(props){
    super(props);
    this.state = {"time": [0, 0, 0]}
  }
  counterSeconds(time) {
    let seconds = this.state.time[2] + 1
    let minutes = this.state.time[1]
    let hours = this.state.time[0]

    if (seconds > 59) {
      seconds = 0
      minutes += 1
    } 

    if (minutes > 59) {
      minutes = 0
      hours += 1
    }
    this.setState({time: [hours, minutes, seconds]})
  }

// use setInterval(function, miliseconds) this repeats a function after a set time 
// so i can make a set of functions that adds time to each variable and that is the time
    componentDidMount() {
    setInterval(() => this.counterSeconds(), 1000)
    }
    // componentWillUpdate()

  render() {
    let seconds = this.state.time[2]
    let minutes = this.state.time[1]
    let hours = this.state.time[0]
      return <div>{hours}:{minutes}:{seconds}</div>;
  }
}  

ReactDOM.render(
  <Container/>,
  document.getElementById('root')
);