import React from 'react'
import { shallow, mount } from 'enzyme'
import CatList from './CatList'
import { pet } from '../../mockData/mockPetData'
import { store, router } from '../../index.js'
import { withRouter } from 'react-router'

describe('CatList component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = withRouter(<CatList />)
  })

  it.skip('should exist', () => {
   expect(wrapper).toBeDefined()
 })

 it.skip('should render container for cat cards', () => {
   expect(wrapper.find('.pet-list-container').length).toEqual(2)
 })

})
