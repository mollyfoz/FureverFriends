import React from 'react'
import { shallow, mount } from 'enzyme'
import PetList from './PetList'
import { pet } from '../../mockData/mockPetData'
import { store, router } from '../../index.js'
import { withRouter } from 'react-router'

describe('PetList component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = withRouter(<PetList />)
  })

  it('should exist', () => {
   expect(wrapper).toBeDefined()
 })

 it.skip('should render container for pet cards', () => {
   expect(wrapper.find('.pet-list-container').length).toEqual(2)
 })

})
