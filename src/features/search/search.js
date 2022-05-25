import React from "react";
import './search.css'
import image from "shared/ui/images/icons/search.svg"

export class SearchForm extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
    //   alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form className="header__search--design" onSubmit={this.handleSubmit}>
            <input className="header__search-input" 
              type="text"
              name="search" 
              value={this.state.value} 
              onChange={this.handleChange} 
              placeholder='Поиск'/>
            <img className="header__search__img" src={image} alt="поиск" />
        </form>
      );
    }
  }