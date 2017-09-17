import React from 'react'
import { shallow, mount } from 'enzyme'
import Search from './Search'
import { pet } from '../../mockData/mockPetData'

describe('Search component', () => {

  let wrapper

  beforeEach(() => {
    wrapper = mount(<Search />)
  })

  it.skip('should exist', () => {
   expect(wrapper).toBeDefined()
 })

})
