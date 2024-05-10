import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    const { handleChange, handleSubmit, search } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto com-md-8 mt-5 text-center">
            <h1 className="text-slanted text-capitalize">
              Search recipes with <strong className="text-orange">FoodApp</strong>
            </h1>
            <form className="mt-4">
              <label htmlFor="search" className="text-capitalize">
                Type recipes separated by comma
              </label>
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  className="form-control-lg w100x"
                  placeholder="chicken, onion, carrot"
                  value={search}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <button type="submit" 
                  className="input-group btn btn-primary"
                  onClick={handleSubmit}
                  >
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
