// Question 3.7
import Queue from './queue'

export default class {
	constructor() {
		this.cats = Queue.of()
		this.dogs = Queue.of()
		this.id = 0
	}

	static of() {
		return new this.prototype.constructor()
	}

	serialize() {
		var cats = this.cats.toArray()
		var dogs = this.dogs.toArray()
		return { cats, dogs }
	}

	enqueueCat(name) {
		this.cats.push({name, id: this.id++})
	}

	enqueueDog(name) {
		this.dogs.push({name, id: this.id++})
	}

	dequeueAny() {
		var cat = this.cats.peek()
		var dog = this.dogs.peek()
		if (!cat && !dog)
			return null

		var animalType
		if (!cat)
			animalType = 'dogs'
		else if (!dog)
			animalType = 'cats'
		else if (cat.id < dog.id)
			animalType = 'cats'
		else
			animalType = 'dogs'

		return animalType && this[animalType].pop()
	}

	dequeueDog() {
		return this.dogs.pop()
	}

	dequeueCat() {
		return this.cats.pop()
	}
}