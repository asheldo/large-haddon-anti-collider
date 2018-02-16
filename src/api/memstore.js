// ./api/memstore

// TODO non-memory store -> require couchdb

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

export function addPerson(person) {
  person.id = personID.next()
  persons.set(person.id, person)
  personPlaceIDs.set(person.id, new Set())
  return person
}
export function getPerson(personID){ return persons.get(personID) }

export function addPlace(place) {
  place.id = placeID.next()
  places.set(place.id, place)
  return place
}
export function getPlace(placeID) { return places.get(placeID)}

export function addPersonPlaceID(personID, placeID) {
   const placeIDs = personPlaceIDs.get(personID)
   placeIDs.add(placeID)
   return placeID
}
export function getPersonPlaceIDs(personID) { return personPlaceIDs.get(personID) }
