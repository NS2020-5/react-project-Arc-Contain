import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: [0, 0, 0],
      
      // temp
      temp: 0,
      tempMaginitude: 1,
      sign: true,

      // ventilation and toxicity
      ventBool: true,
      ventStatus: "Closed",
      ventMagnitude: 1,
      toxicity: 0,
      // stability: 0,
    }
  }

  counterSeconds() {
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

    tempButtonPress = () => {
      let newSign = this.state.sign 
      let newTemp = this.state.temp
      let newTempMaginitude = 1
            // this equals 1

      newTemp = 0
      newTempMaginitude += Math.floor(Math.random() * 3) + 1
      console.log(newTempMaginitude)

      if (newSign) {
        this.setState({sign: false})
      } else {
        this.setState({sign: true})
      }
      this.setState({temp: newTemp})
      this.setState({tempMaginitude: newTempMaginitude})
      
      console.log(this.state.sign)
    }

    tempFluctuate() {
      let flucTemp = this.state.temp
      let flucSign = this.state.sign
      let flucTempMagnitude = this.state.tempMaginitude

      if (flucSign) {
        flucTemp += flucTempMagnitude
      } else {
        flucTemp -= flucTempMagnitude
      }

      // if (ventBool) {
      //   flucTemp -= 5
      // }
      this.setState({temp: flucTemp})
    }
   
// for vent and toxicity
// button resets toxicity to 0
  ventButtonPress = () => {
   let ventBool = this.state.ventBool
   let newTempMaginitude = this.state.tempMaginitude + Math.floor(Math.random() * 15) + 1
  //  let toxicity = this.state.toxicity
  //  let ventMagnitude = this.state.ventMagnitude
  //  let ventStatus = this.state.ventStatus

  if (ventBool) {
    this.setState({ventBool: false})
    this.setState({ventStatus: "Opened"})
    this.setState({toxicity: 0})
    this.setState({tempMaginitude: newTempMaginitude})
   } else {
    this.setState({ventBool: true})
    this.setState({ventStatus: "Closed"})
    this.setState({tempMaginitude: 1})
   }
  }

  toxicityFluctuate = () => {
    let ventMagnitude = 1
    let toxicity = this.state.toxicity
    toxicity += ventMagnitude
   this.setState({toxicity: toxicity})
  }

      // let seconds = this.state.time[2] + 1 
    // // defines third value of time array as +1
    // let newTime = this.state.time
    // // this variable calls the actual time array (they it is still defined as [0,0,0])
    // newTime[2] = seconds
    // // this equation says get the third value and set it to the seconds variable
    // this.setState({time: newTime})
    // // this sets the global time array as the new value
    
  componentDidMount() {
      setInterval(() => this.counterSeconds(), 1000)
      setInterval(() => this.tempFluctuate(), 3339)
      setInterval(() => this.toxicityFluctuate(), 555)
      }
    
  render() {
       let tempDisplay = this.state.temp
       let seconds = this.state.time[2]
       let minutes = this.state.time[1]
       let hours = this.state.time[0]
       let toxicity = this.state.toxicity
       let ventStatus = this.state.ventStatus

       if (toxicity > 50) {
        return (
          <div>
         
           <div class = "title">A.R.C. Regulation Panel</div>
           <div class = "warning">WARNING: TOXICITY LEVELS HIGH</div>
           <div class = "time">Time {hours} hr : {minutes} min : {seconds} sec</div>
           <div class = "temp">Tempurature: {tempDisplay}˚F</div>
           <div class = "toxicity">Toxicity: {toxicity}%</div>
           <div class = "container">
           <button class = "Button" onClick = {this.tempButtonPress} >Regulate Tempurature</button>
           <button class = "Button" onClick = {this.ventButtonPress}>Vent Status: {ventStatus}</button>
           </div>
        </div>)
       } else if (tempDisplay > 50) {
        return (
        <div>
           <div class = "title">A.R.C. Regulation Panel</div>
           <div class = "warning">WARNING: TOXICITY LEVELS HIGH</div>
           <div class = "time">Time {hours} hr : {minutes} min : {seconds} sec</div>
           <div class = "temp">Tempurature: {tempDisplay}˚F</div>
           <div class = "toxicity">Toxicity: {toxicity}%</div>
           <div class = "container">
           <button class = "Button" onClick = {this.tempButtonPress} >Regulate Tempurature</button>
           <button class = "Button" onClick = {this.ventButtonPress}>Vent Status: {ventStatus}</button>
           </div>
       </div>)
       } else {
       return (
        <div>
           <div class = "title">A.R.C. Regulation Panel</div>
           <div class = "time">Time {hours} hr : {minutes} min : {seconds} sec</div>
           <div class = "temp">Tempurature: {tempDisplay}˚F</div>
           <div class = "toxicity">Toxicity: {toxicity}%</div>
           <div class = "container">
           <button class = "Button" onClick = {this.tempButtonPress} >Regulate Tempurature</button>
           <button class = "Button" onClick = {this.ventButtonPress}>Vent Status: {ventStatus}</button>
           </div>
        </div>)
       }
      }   
}

ReactDOM.render(
  <Container/>,
  document.getElementById('root')
);