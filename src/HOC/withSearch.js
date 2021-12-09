import React from 'react';

const withSearch = WrappedComponent => {
  class WithSearch extends React.Component {
      state = {
        searchTerm: ""
      };
      handleSearch = event => {
        this.setState({ searchTerm: event.target.value });
      };
  
      render() {
        let { searchTerm } = this.state;
        return (
          <div>
            <div>
              <input
                onChange={this.handleSearch}
                value={searchTerm}
                type="text"
                placeholder="Search"
              />
            </div>
            <WrappedComponent searchTerm={searchTerm} />
          </div>
        );
      }
    };
    //For Better Debugging
    WithSearch.displayName = `WithSearch(${getDisplayName(WrappedComponent)})`;
    return WithSearch;
  };
    
  const getDisplayName = (WrappedComponent) => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }
  export default withSearch;