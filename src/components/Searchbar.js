import React from 'react';
import SearchBar from '@opuscapita/react-searchbar';

export default class ReactView extends React.Component {
  state = {
    searchValue: ""
  }
  
  render() {
    return (
      <div className="search-bar">
      <SearchBar
        onSearch={this.handleSearch}
        value={this.state.searchValue}
      />
      </div>
    );
  }
}