import React from 'react'
import { shallow, mount } from 'enzyme'
import { Pet } from './Pet'
import { pet } from '../../mockData/mockPetData'

describe('Pet component', () => {

  let wrapper

  beforeEach(() => {
    wrapper = mount(<Pet petDetails={pet} />)
  })

  it('should exist', () => {
   expect(wrapper).toBeDefined()
 })

  it('should render a card container', () => {
    expect(wrapper.find('.card-container').length).toEqual(1)
  })

  it('should render a dog ear button', () => {
    expect(wrapper.find('.dog-ear-btn').length).toEqual(1)
  })

  it('should render all pet information', () => {
    expect(wrapper.find('.image').length).toEqual(1)
    expect(wrapper.find('.pet-details').length).toEqual(1)
    expect(wrapper.find('.pet-info').length).toEqual(1)
    expect(wrapper.find('.pet-description').length).toEqual(1)
  })

  it.skip('should call favorite on button click', () => {

      const mockFn = jest.fn()
      const comp = mount(<Pet petDetails={pet}  favorite={false} toggleFaves={mockFn} featured={false}/>)
      const favorited = comp.find('.dog-ear-btn')

        favorited.simulate('click', { favorite : true });
        expect(mockFn()).toBeCalled();
    })
})
