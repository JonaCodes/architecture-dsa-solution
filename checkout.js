var catalog = {bread:5, water:2, cheese:10}
var customer1items = ['cheese', 'bread', 'water']
var customer2items = ['cheese', 'cheese', 'bread','cheese', 'cheese']
var customer3items = ['water','water','water','water','water','water','bread','bread','bread','bread','bread','bread','cheese']
var customer4items = ['cheese','cheese','cheese','cheese','cheese','cheese', 'water']
var customer5items = ['water','water','water','water','water','water','water','water','water','water','bread','bread','bread','bread','bread','bread', 'cheese','cheese','cheese','cheese']

/* 
============================================
item 		||	price		||		deals 					||
==========================================||
cheese  ||    10		||	3 for price of 2	||
------------------------------------------||
bread		||		5			||	5 for 20					||
------------------------------------------||
water		||		2			||	10 for price of 8	||
============================================
*/

//My Code
var deals = instantiateEmptyDeals()
deals.bread[5] = 20
deals.water[10] = priceOf('water', 8)
deals.cheese[3] = priceOf('cheese', 2)

function checkout(array){
	var total = 0
	var itemCount = getCountOfItems(array)

	for(item in itemCount){

		while(hasDeal(item, itemCount[item])){
			var deal = getDeal(item, itemCount[item])
			itemCount[item] -= deal.count
			total += deal.cost
		}

		if(itemCount[item] > 0){
			total += itemCount[item] * catalog[item]
			itemCount[item] = 0 //not necessary, but whatever
		}
	}
	console.log(total)
	return total
}

function getDeal(item, count){

	var dealCount = Object.keys(deals[item])[0]	//each item only has one deal, .:. one key
	if(count >= dealCount){
		return {count: dealCount, cost: deals[item][dealCount]}
	}

	return false
}

function hasDeal(item, count){
	if(getDeal(item, count).count){
		return true
	}
	return false
}

function getCountOfItems(array){
	var itemCount = {}
	for(var i = 0; i < array.length; i++){
		if(itemCount[array[i]]){
			itemCount[array[i]]++
		}
		else{
			itemCount[array[i]] = 1
		}
	}	
	return itemCount
}

function priceOf(item, num){
	return num*catalog[item]
}

function instantiateEmptyDeals(){
	var deals = {}
	for(item in catalog){
		deals[item] = {}
	}
	console.log("initiialy, deals is:", deals)
	return deals
}


checkout(customer1items)	//17
checkout(customer2items)	//35
checkout(customer3items)	//47
checkout(customer4items)	//42
checkout(customer5items)	//71

catalog = {bread:4, water:4, cheese:6} // doesn't work

checkout(customer1items)	//14
checkout(customer2items)	//30
checkout(customer3items)	//54
checkout(customer4items)	//44
checkout(customer5items)	//66

//now 5 water for price of 3 (instead of 10 for price of 8)
//checkout(customer5items)// 74

/*deals.water = {}
deals.water[5] = priceOf('water', 3)*/