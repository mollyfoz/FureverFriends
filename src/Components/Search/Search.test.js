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

  it.skip('should render a form to search', () => {
    expect(wrapper.find('form').length).toEqual(1)
    expect(wrapper.find('.input-box').length).toEqual(1)
    expect(wrapper.find('.submit-btn').length).toEqual(1)
  })

  it.skip('should update state on input change', () => {

      const mockFn = jest.fn()
      const comp = mount(<Search />)
      const inputField = comp.find('.input-box')

        inputField.simulate('change', { target : value });
        expect(mockFn()).toBeCalled();
  })

  it.skip('should fire search on click', () => {

      const mockFn = jest.fn()
      const comp = mount(<Search />)
      const btn = comp.find('.submit-btn')

        btn.simulate('click', { target : value });
        expect(mockFn()).toBeCalled();
    })
})
