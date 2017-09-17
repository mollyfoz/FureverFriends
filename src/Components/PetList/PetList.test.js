import React from 'react'
import { shallow, mount } from 'enzyme'
import PetList from './PetList'
import { pet } from '../../mockData/mockPetData'
import { store, router } from '../../index.js'

describe('PetList component', () => {

  let wrapper

  beforeEach(() => {
    wrapper = mount(<PetList />)
  })

  it.skip('should exist', () => {
   expect(wrapper).toBeDefined()
 })

})
