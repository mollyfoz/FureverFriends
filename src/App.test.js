import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme'
import { store } from './index.js'

describe('App', () => {

  let wrapper

  beforeEach(() => {
    wrapper = mount(<App store={store} />)
  })

  it.skip('should exist', () => {
   expect(wrapper).toBeDefined()
  })

  it.skip('should render navigation links', () => {
    expect(wrapper.find('.nav-link').length).toEqual(3)
  })

  it.skip('should render a search component', () => {
    expect(wrapper.find('.search-container').length).toEqual(1)
  })

  it.skip('should render a container for the body', () => {
    expect(wrapper.find('.body-container').length).toEqual(1)
  })

})
