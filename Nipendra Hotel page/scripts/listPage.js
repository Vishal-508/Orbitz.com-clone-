
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '250246b494mshb71546ff0f42cfdp17d3bajsn709eb5e8c195',
		'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
	}
};

const destinationID = JSON.parse(localStorage.getItem("destinationID")); 
console.log(destinationID)
async function showData(){
	let url = `https://hotels-com-provider.p.rapidapi.com/v1/hotels/search?checkin_date=2022-10-20&checkout_date=2022-10-27&sort_order=STAR_RATING_HIGHEST_FIRST&destination_id=${destinationID}&adults_number=1&locale=en_US&currency=USD&children_ages=4%2C0%2C15&price_min=10&star_rating_ids=3%2C4%2C5&accommodation_ids=20%2C8%2C15%2C5%2C1&price_max=500&page_number=1&theme_ids=14%2C27%2C25&amenity_ids=527%2C2063&guest_rating_min=4` ; 



	try{
		let res = await fetch(url,options) ; 
		let data = await res.json() ; 
		// console.log(data) ; 
		append(data.searchResults.results) ; 


	}catch(err){
		console.log(err) ;  
	}
} ; 

let container = document.getElementById("container") ; 

let append = (data) =>{
	
	data.forEach(function(el,i){
		// console.log(el) ; 
		 
		let anchor = document.createElement("a") ; 
		anchor.addEventListener("click",function(){
			localStorage.setItem("hotelDetails",JSON.stringify(el)) ; 
			// console.log(el)
			window.location.href = "hotelPage.html" ; 
		})
		let div = document.createElement("div") ; 
		let img = document.createElement("img") ; 
		img.src = "https://ramadalucknow.com/wp-content/uploads/2016/12/Business-Hotel-Accommodation-Lucknow-Ramada-Lucknow.jpg" ; 
		let name = document.createElement("p") ; 
		name.innerText = el.name ; 

		div.append(img,name) ; 
		anchor.append(div) ; 
		container.append(anchor)
	})
}


showData() ; 