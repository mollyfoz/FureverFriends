export const cleanData = (array) => {
  return array.map(pet =>
    Object.assign({}, { name: pet.name.$t,
                        age: pet.age.$t,
                        type: pet.animal.$t,
                        gender: pet.sex.$t,
                        desc: pet.description.$t,
                        id: pet.id.$t,
                        image: pet.media.photos.photo[2]['$t'],
                        city: pet.contact.city.$t,
                        state: pet.contact.state.$t,
                      } ))
}

export const cleanRandomData = (pet) => {
  return Object.assign({}, {
                name: pet.name.$t,
                age: pet.age.$t,
                type: pet.animal.$t,
                gender: pet.sex.$t,
                desc: pet.description.$t,
                id: pet.id.$t,
                city: pet.contact.city.$t,
                state: pet.contact.state.$t,
                image: pet.media.photos.photo[2]['$t'],
                featured: true
              } )
}
