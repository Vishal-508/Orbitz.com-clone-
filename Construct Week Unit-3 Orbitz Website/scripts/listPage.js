
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '715564a4f0msh58a53e432b88722p16f800jsn040c97c70ac0',
		'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
	}
};

const destinationID = JSON.parse(localStorage.getItem("destinationID")); 
// console.log(destinationID)
async function showData(){
	let url = `https://hotels-com-provider.p.rapidapi.com/v1/hotels/search?checkin_date=2022-10-20&checkout_date=2022-10-27&sort_order=STAR_RATING_HIGHEST_FIRST&destination_id=${destinationID}&adults_number=1&locale=en_US&currency=USD&children_ages=4%2C0%2C15&price_min=10&star_rating_ids=3%2C4%2C5&accommodation_ids=20%2C8%2C15%2C5%2C1&price_max=500&page_number=1&theme_ids=14%2C27%2C25&amenity_ids=527%2C2063&guest_rating_min=4` ; 



	try{
		let res = await fetch(url,options) ; 
		let data = await res.json() ; 
		
		append(data) ; 


	}catch(err){
		console.log(err) ;  
	}
} ; 
	let map = document.getElementById("map") ;
	let hotelDiv = document.getElementById("hotelDiv") ; 
	let append = (data) =>{
		hotelDiv.innerHTML = null ; 
		console.log(data) ; 
		
		// let div = document.createElement("div") ; 
		// div.setAttribute("class","outerDiv") ; 
		

		let hotelData = data.searchResults.results ; 
		hotelData.forEach(function(el,i){
			let q = (data.searchResults.results[0].neighbourhood)
			let mapData = `https://maps.google.com/maps?q=${q}&t=&z=13&ie=UTF8&iwloc=&output=embed` 
			map.src = mapData ; 
			let div = document.createElement("div") ; 
			div.setAttribute("class","outerDiv") ;
			div.style.display = "flex" ; 
			div.addEventListener("click",function(){
				localStorage.setItem("hotelDetails",JSON.stringify(el)) ;
				window.location.href = "hotelPage.html"  ; 
			})
			let img = document.createElement("img") ; 
			img.src = el.optimizedThumbUrls.srpDesktop ; 
			img.setAttribute("class","hotelImages") ;
			
			let div2 = document.createElement("div") ; 
			div2.setAttribute("class","innerDiv") ; 
			let hotelName = document.createElement("h3") ; 
			hotelName.innerText = el.name ; 
			let hotelAddress = document.createElement("p") ; 
			hotelAddress.innerText = el.address.streetAddress ; 
			let cancellation = document.createElement("p") ; 
			if(el.ratePlan.features.freeCancellation == true){
				cancellation.innerText = "Free Cancellation" ; 
				cancellation.style.color = "darkgreen" ; 
			}else if(el.ratePlan.features.freeCancellation == false){
				cancellation.innerText = "Reserve Now Pay Later" ; 
				cancellation.style.color = "darkgreen" ; 
			} ;
			let gr = el.guestReviews ;
			let rp = el.ratePlan.price ; 
			let reviewPrice = document.createElement("div") ; 
			reviewPrice.setAttribute("class","priceReview")
			reviewPrice.style.display = "flex" ;
			// reviewPrice.style.justifyContent = "space-between" 
			let rating = document.createElement("h4") ; 
					rating.innerText = gr.rating+"/"+gr.scale+" "+gr.badgeText+" "+`(${gr.total} Reviews)` ;
					let priceDiv = document.createElement("div") ; 
					priceDiv.setAttribute("class","priceTag")
					let hotelPrice = document.createElement("h3") ; 
					hotelPrice.innerText =  rp.current ; 
					let oldPrice = document.createElement("p") ; 
					oldPrice.style.textDecoration = "line-through" ;
					if(rp.old == undefined){
						oldPrice.innerText = rp.current
					} else{
						oldPrice.innerText = rp.old ; 
					}
					priceDiv.append(hotelPrice,oldPrice) ; 
					// console.log(priceDiv)
					reviewPrice.append(rating,priceDiv)
			div2.append(hotelName,hotelAddress,cancellation,reviewPrice) ; 
			// console.log(div2)
			// console.log(div,div2)
			div.append(img,div2)
					console.log(div)
					hotelDiv.append(div) ; 

		})
		
	}






// let container = document.getElementById("container") ; 
// let map = document.getElementById("map") ; 
// let hotelImages = document.getElementById("hotelImages") ;
// hotelImages.style.cursor = "pointer" ;  
// let detailsHotel = document.getElementById("detailsHotel") ; 

// let append = (data) =>{
// 	// console.log(data) ; 
// 	hotelImages.innerHTML = null ; 
// 	map.innerHTML = null ; 
// 	detailsHotel.innerHTML = null ; 
// 	let q = (data.searchResults.results[0].neighbourhood)
// 	let mapData = `https://maps.google.com/maps?q=${q}&t=&z=13&ie=UTF8&iwloc=&output=embed` 
// 	map.src = mapData ; 
// 	let hotelData = data.searchResults.results ; 
// 	// console.log(hotelData)
// 	hotelData.forEach(function(el,i){
// 		// console.log(el) ;
// 		let mainDiv = document.createElement("div") ; 
// 		mainDiv.setAttribute("class","allContent") ; 
// 		mainDiv.style.cursor = "pointer" ; 
// 		mainDiv.addEventListener("click",function(){
// 			localStorage.setItem("hotelDetails",JSON.stringify(el)) ; 
// 			window.location.href = "hotelPage.html" ; 

// 		})
// 		hotelImages.addEventListener("click",function(){
// 			localStorage.setItem("hotelDetails",JSON.stringify(el)) ; 
// 			window.location.href = "hotelPage.html"
// 		})
// 		console.log(el.id)
// 		let img = document.createElement("img") ; 
// 		img.src = el.optimizedThumbUrls.srpDesktop ; 
// 		img.setAttribute("class","hotelImages") ; 
// 		hotelImages.append(img) ; 
// 		console.log(el) ; 

// 		let hotelName = document.createElement("h3") ; 
// 		hotelName.innerText = el.name ; 
// 		let hotelAddress = document.createElement("p") ; 
// 		hotelAddress.innerText = el.address.streetAddress ; 
// 		let cancellation = document.createElement("p") ; 
// 		if(el.ratePlan.features.freeCancellation == true){
// 			cancellation.innerText = "Free Cancellation" ; 
// 			cancellation.style.color = "darkgreen" ; 
// 		}else if(el.ratePlan.features.freeCancellation == false){
// 			cancellation.innerText = "Reserve Now Pay Later" ; 
// 			cancellation.style.color = "darkgreen" ; 
// 		} ;
// 		let gr = el.guestReviews ;
// 		let rp = el.ratePlan.price ;  
// 		let div = document.createElement("div") ; 
// 		div.style.display = "flex" ; 
// 		div.style.justifyContent = "space-between"
// 		let rating = document.createElement("h4") ; 
// 		rating.innerText = gr.rating+"/"+gr.scale+" "+gr.badgeText+" "+`(${gr.total} Reviews)` ;
// 		let priceDiv = document.createElement("div") ; 
// 		priceDiv.setAttribute("class","priceTag")
// 		let hotelPrice = document.createElement("h3") ; 
// 		hotelPrice.innerText =  rp.current ; 
// 		let oldPrice = document.createElement("p") ; 
// 		oldPrice.style.textDecoration = "line-through" ;
// 		if(rp.old == undefined){
// 			oldPrice.innerText = rp.current
// 		} else{
// 			oldPrice.innerText = rp.old ; 
// 		}
// 		priceDiv.append(hotelPrice,oldPrice)
		
// 		div.append(rating,priceDiv) ; 

// 		mainDiv.append(hotelName,hotelAddress,cancellation,div) ; 
// 		detailsHotel.append(mainDiv)

// 	})

	





// }


showData() ; 