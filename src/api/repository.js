// ./api/repository
import memstore from './memstore'

const immutable = (o) => Object.freeze(o)

export function addPerson(data) {
  if (data.name == null) {
    data.error = "A person requires a :name"
    return data;
  }
  const person = {id : null,
    name : data.name}
  memstore.addPerson(person)
  return immutable(person)
}

export function addPlace(data) {
  // Not validating latitude/longitude
  if (data.name == null || data.latitude == null || data.longitude == null) {
    data.error = "A place requires a :name, :latitude, and :longitude"
    return data;
  }
  const place = {id : null, name : data.name,
    latitude : data.latitude, longitude : data.longitude}
  memstore.addPlace(place)
  return immutable(place)
}

// immutable person or person-error
export function findPerson(data) {
  const id = parseInt(data.person_id)
  if (isNaN(id)) {
    data.error = "Person lookup requires valid :person_id"
    return data;
  }
  const person = memstore.getPerson(id)
  return immutable(person)
}

// immutable place or place-error
export function findPlace(data) {
  const id = parseInt(data.place_id)
  if (isNaN(id)) {
    data.error = "Place lookup requires valid :place_id"
    return data
  }
  const place = memstore.getPlace(id)
  return immutable(place)
}

// immutable pair, or error-data
export function addPersonPlace(data) {
  const person = findPerson(data)
  const place = findPlace(data)
  if (!person || !place) {
    return null
  } else if (person.error || place.error) {
    data.error = "Associating requires existing :person_id and :place_id"
    return data
  }
  memstore.addPersonPlaceID(person.id, place.id);
  return immutable({person_id : person.id,
     place_id : place.id});
}

//  array of immutable Places, or error-data
export function findPersonPlaces(data) {
  const person = findPerson(data)
  if (!person) {
    return null
  } else if (person.error) {
    data.error = "Person->Places lookup requires valid :person_id"
    return data;
  }
  // map array of IDs -> Persons
  const placeIDs = Array.from(memstore.getPersonPlaceIDs(person.id))
  const personPlaces = placeIDs.map(x => immutable(memstore.getPlace(x)))
  return personPlaces
}
