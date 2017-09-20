import React from 'react'
import { shallow, mount } from 'enzyme'
import FavoriteList from './Favorites'
import { pet } from '../../mockData/mockPetData'
import { store, router } from '../../index.js'
import { withRouter } from 'react-router'

describe('Favorites component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = withRouter(<FavoriteList />)
  })

  it('should exist', () => {
   expect(wrapper).toBeDefined()
 })

 it.skip('should render container for favorite cards', () => {
   expect(wrapper.find('.pet-list-container').length).toEqual(1)
 })

})
