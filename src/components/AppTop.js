import React, { Component } from 'react';
// import './AppTop.css'

class AppTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonIndex: 0, 
      isMy: true,
      isMonth: false
    };
  }

  onButtonItemClick(index) {
    const newState = JSON.parse(JSON.stringify(this.state));
    newState.buttonIndex = index;
    this.setState(newState);
  }

  onToggleChange(toggleIndex) {
    const newState = JSON.parse(JSON.stringify(this.state));
    if (0 === toggleIndex) {
      newState.isMy = !this.state.isMy;
    } else if (1 === toggleIndex) {
      newState.isMonth = !this.state.isMonth;
    }
    this.setState(newState);
  }

  render() {
    const dom = (
    <div className="App-top">
      <div className="btn-group">
        <button className={this.state.buttonIndex === 0 ? 'btn-group-item_active' : ''} onClick={this.onButtonItemClick.bind(this, 0)}>All Products</button>
        <button className={this.state.buttonIndex === 1 ? 'btn-group-item_active' : ''} onClick={this.onButtonItemClick.bind(this, 1)}>Erleada</button>
        <button className={this.state.buttonIndex === 2 ? 'btn-group-item_active' : ''} onClick={this.onButtonItemClick.bind(this, 2)}>Zytiga</button>
      </div>
      <div className="my-all toggle-widget">
        <label className={this.state.isMy ? 'active' : ''}>MY</label>
        <div className="toggle" onClick={this.onToggleChange.bind(this, 0)}>
          <div className={this.state.isMy ? 'toggleMenu left' : 'toggleMenu right'}></div>
        </div>
        <label className={this.state.isMy ? '' : 'active'}>ALL</label>
      </div>
      <div className="month-week toggle-widget">
        <label className={this.state.isMonth ? 'active' : ''}>Month</label>
        <div className="toggle" onClick={this.onToggleChange.bind(this, 1)}>
          <div className={this.state.isMonth ? 'toggleMenu left' : 'toggleMenu right'}></div>
        </div>
        <label className={this.state.isMonth ? '' : 'active'}>Week</label>
      </div>
      <div className="search">
        <div className="search-icon" />
        <input type="text" placeholder="Search HCP / HCO"/>
      </div>
    </div>);
    return dom;
  }
}

export default AppTop;

