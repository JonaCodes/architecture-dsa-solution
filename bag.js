var maxVolume = 50
var bagVolume = 0
var items = [	
							{name:"apple", weight: 5}, 
							{name:"book", weight:6}, 
							{name:"book", weight: 6},
							{name:"water", weight: 12}, 
							{name:"dog", weight: 40}
						]
var bag = []

function addToBag(item){
	if(bagVolume < maxVolume){ //make sure there's still space
		if(bagVolume + item.weight <= maxVolume){	//make sure the next item doesn't overflow the bag
			bag.push(item.name)
			bagVolume += item.weight
			return
		}
	}
	console.log("Can't put that in the bag, sorry")
}

function removeFromBag(item){
	var index = bag.indexOf(item.name)	

	if(index > -1){
		bag.splice(index,1)
		bagVolume -= item.weight
	}
	else{
		console.log("Silly rabbit,",item.name, "is not in the bag!")
	}
}

console.log(bag)
addToBag(items[0])
console.log(bag)
removeFromBag(items[0])
console.log(bag)
/*addToBag(items[1])
addToBag(items[4])
console.log(bag, bagVolume)*/