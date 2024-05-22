import React, { Component } from 'react'
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default class Defoult extends Component {
  render() {
    return (
      <Header  styleClass='default-hero'>
        <h2 className='text-light text-uppercase'>
          Welcome to my Recipy App
        </h2>
        <Link to='/'
        className='text-uppercase btn btn-secondary btn-lg mt-3'>
          Explore Recipies
        </Link>
      </Header>
       
    )
  }
}
