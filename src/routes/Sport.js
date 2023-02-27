import React from 'react'

class Clock extends React.Component{

  constructor (props){
    super(props)
    this.state = {date: new Date()}
    this.timer =null
  }

  componentDidMount () {
    this.timer = window.setInterval(this.tick.bind(this),1000)

  }

  componentWillUnmount (){
    window.clearInterval(this.timer)
  }

  tick(){
    this.setState({date: new Date()})
  }


  render() {
    const date = new Date()
    return <div>
      <div className="dash-content">
            <div className="overview">
                <div className="title">
                    <span className="text">{this.state.date.toLocaleTimeString()}</span>
                </div>
            </div>
        </div>
       
      </div>
  }
}

class Incrementer extends React.Component {

  constructor(props){
    super(props)
    this.state =({n: props.start, timer: null})
    this.toggle = this.toggle.bind(this)
    this.reset = this.reset.bind(this)
  }

  componentDidMount(){
    this.play()
  }

  componentWillUnmount (){
    window.clearInterval(this.state.timer)
  }

  increment(){
    this.setState(function(state,props){
      return {n: this.state.n + 1}
      })
    }

  pause () {
    window.clearInterval(this.state.timer)
    this.setState({
      timer : null
    })
  }

  play () {
    window.clearInterval(this.state.timer)
    this.setState({
      timer : window.setInterval(this.increment.bind(this),1000)
    })
  }

  toggle (){
    return this.state.timer ? this.pause() : this.play()
  }

  label () {
    return this.state.timer ? 'Pause' : 'Lecture'
  }

  reset (){
    this.setState(function(state,props) {
      return {n: props.start}
      })
    }

  render(){
    return <div className="text">
      {this.state.n}
      <button onClick={this.toggle}>{this.label()}</button>
      <button onClick={this.reset}>Pruut</button>
    </div>
  }

}

export default function prutt() {
  return (
    <div>
      
      <div>
        <div className="dash-content">
            <div className="overview">
                <div className="title">
                    <i className='bx bxs-basketball' ></i>
                    <span className="text">Sport</span>
                </div>
            </div>
            <Clock/>
            <Incrementer start={0}/>
        </div>
      </div>      
    </div>
  )
}
