import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import Button from './src/components/Button'
import Display from './src/components/Display'

const initialState = {

  displayValue: '0', //Number that appears in display
  clearDisplay: false, //if true next display must be cleaned
  operation: null, //Which operation is set / * + - 
  values: [0, 0], //Array that helps making the operations 
  current: 0 //Which index of values[] is being displayed
}

export default class App extends Component {
  
  state = { ...initialState }


  addDigit = n => {
    
     //prevents more than one '.' being displayed
    if(n === '.' && this.state.displayValue.includes('.')){
      return
    }

    //Clears display. Prevent displayValue being 0'n' and adds to the side, the next value in display

    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay 
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n 
    this.setState({ displayValue, clearDisplay: false })

    
    //sets a new value of index 'current' to the state

    if( n!== '.'){ 
      const newValue = parseFloat(displayValue) 
      const values = [...this.state.values] 
      values[this.state.current] = newValue
      this.setState({ values })
    }
      
  }

  clearMemory = () => {
    this.setState({ ...initialState})
  }

  setOperation = () => { //5 botoes de operacao
    
  }

  render() {
    return (
       <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label='AC'  triple onClick={this.clearMemory}/>
          <Button label='/'  operation onClick={() => this.setOperation('/')}/>
          <Button label='7' onClick={this.addDigit} />
          <Button label='8' onClick={this.addDigit} />
          <Button label='9' onClick={this.addDigit} />
          <Button label='*' operation onClick={() => this.setOperation('/')}/>
          <Button label='4' onClick={this.addDigit} />
          <Button label='5' onClick={this.addDigit} />
          <Button label='6' onClick={this.addDigit} />
          <Button label='-' operation onClick={() => this.setOperation('-')}/>
          <Button label='1' onClick={this.addDigit}/>
          <Button label='2' onClick={this.addDigit}/>
          <Button label='3' onClick={this.addDigit}/>
          <Button label='+' operation onClick={() => this.setOperation('+')}/>
          <Button label='0' double onClick={this.addDigit}/>
          <Button label='.' onClick={this.addDigit}/>
          <Button label='=' operation onClick={() => this.setOperation('+')}/>
        </View>
       
      </View> 
    )  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons:{
    flexDirection:'row',
    flexWrap: 'wrap'
  }
})