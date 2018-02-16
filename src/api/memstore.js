'use strict'
// ./api/memstore

// TODO non-memory store   ->   require couchdb
// TODO typescript and an interface?

class sequence {
  constructor() { this.id = 1 } // Number.MIN_SAFE_INTEGER
  next() { return this.id++ }
}

const persons = new Map()
const places = new Map()
const personPlaceIDs = new Map()
const personID = new sequence()
const placeID = new sequence()

module.exports.addPerson = (person) => {
  person.id = personID.next()
  persons.set(person.id, person)
  personPlaceIDs.set(person.id, new Set())
  return person
}
module.exports.getPerson = (personID) => { return persons.get(personID) }

module.exports.addPlace = (place) => {
  place.id = placeID.next()
  places.set(place.id, place)
  return place
}
module.exports.getPlace = (placeID) => { return places.get(placeID)}

module.exports.addPersonPlaceID = (personID, placeID) => {
   const placeIDs = personPlaceIDs.get(personID)
   placeIDs.add(placeID)
   return placeID
}
module.exports.getPersonPlaceIDs = (personID) => { return personPlaceIDs.get(personID) }
