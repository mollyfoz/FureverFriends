import React from 'react'
import { shallow, mount } from 'enzyme'
import Search from './Search'
import { pet } from '../../mockData/mockPetData'
import { withRouter } from 'react-router'
import ReactDOM from 'react-dom'
import configureStore from 'redux-mock-store'



describe('Search component', () => {

  let wrapper;
  let shallowWrapper;
  let store;

  let initialState = { output: 100 }
  let mockStore = configureStore()

  beforeEach(() => {
    store = mockStore(initialState)
    shallowWrapper = shallow(<Search store={ store } />).dive()
  })

  it('should exist', () => {
   expect(shallowWrapper).toBeDefined()
  })

  it('should render a form to search', () => {
    expect(shallowWrapper.find('.form').length).toEqual(1)
    expect(shallowWrapper.find('.input-box').length).toEqual(1)
    expect(shallowWrapper.find('.submit-btn').length).toEqual(1)
  })

  it.skip('should update state on input change', () => {

      const mockFn = jest.fn()
      const shallowWrapper = shallow(<Search store={ store } />).dive()
      const inputField = shallowWrapper.find('.input-box')

        inputField.simulate('change', { target : inputField.value });
        expect(mockFn()).toBeCalled();
  })

  it.skip('should fire search on click', () => {

      const mockFn = jest.fn()
      const comp = withRouter(<Search />)
      const btn = comp.find('.submit-btn')

        btn.simulate('click', { target : value });
        expect(mockFn()).toBeCalled();
    })
})
