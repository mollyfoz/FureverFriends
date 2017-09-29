import React from 'react'
import { shallow, mount } from 'enzyme'
import { PetList } from './PetList'
import { pet } from '../../mockData/mockPetData'
import { store, router } from '../../index.js'
import { withRouter } from 'react-router'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { MemoryRouter as Router } from 'react-router-dom'


describe('PetList component', () => {

  let wrapper;
  let shallowWrapper;
  let store;

  let initialState = { output: 100 }
  let mockStore = configureStore()

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = withRouter(<PetList />)
    shallowWrapper = shallow(<PetList store={ store } />).dive()
  })

  it('should exist', () => {
    console.log(shallowWrapper.debug());
   expect(shallowWrapper).toBeDefined()
 })

 it('will pass', () => {
  expect(
    renderer.create(<Router><PetList /></Router>)
    .toJSON()
  ).toEqual({children: null, props: {}, type: 'div'})
})

 it.skip('should render container for pet cards', () => {
   expect(wrapper.find('.pet-list-container').length).toEqual(1)
 })

})
