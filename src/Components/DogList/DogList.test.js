import React from 'react'
import { shallow, mount } from 'enzyme'
import DogList from './DogList'
import { pet } from '../../mockData/mockPetData'
import { store, router } from '../../index.js'
import { withRouter } from 'react-router'

describe('DogList component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = withRouter(<DogList />)
  })

  it('should exist', () => {
   expect(wrapper).toBeDefined()
 })

 it.skip('should render container for dog cards', () => {
   expect(wrapper.find('.pet-list-container').length).toEqual(1)
 })

})
