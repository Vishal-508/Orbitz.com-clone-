let hotelDetails = JSON.parse(localStorage.getItem("hotelDetails"))||[] ; 
let hotelID = hotelDetails.id ; 



const option = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '250246b494mshb71546ff0f42cfdp17d3bajsn709eb5e8c195',
		'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
	}
};







async function showData3(){
    let url = `https://hotels-com-provider.p.rapidapi.com/v1/hotels/photos?hotel_id=${hotelID}` ; 
    try{
        let res = await fetch(url,option) ; 
        let data = await res.json() ; 
    //    console.log(data[0])
        append3(data) ; 

    }catch(err){
        console.log(err) ; 
    }

} ; 
let gridImages = document.getElementById("gridImages") ;

let append3 = (data) =>{
    
    gridImages.innerHTML = null ; 
    for (let i=0 ; i<=2 ; i++){
        // console.log(data[i]) ; 
        let div = document.createElement("div") ;
            // div.setAttribute("class","nsGridDiv") ; 
        let img = document.createElement("img") ;
        img.src = data[i].mainUrl ;  
        div.append(img) ; 
        gridImages.append(div) ; 

    }
   
    let div = document.createElement("a") ; 
    div.setAttribute("id","imagePage")
    // div.href = "imagePage.html" ;
    div.addEventListener("click",function(){
        localStorage.setItem("hotelImages",JSON.stringify(data)) ; 
        window.location.href = "imagePage.html"
    })
    div.innerHTML = `<img src="Photos/icons8-gallery-96.png"/>` ;    
        gridImages.append(div)
}
    // Photos Appending
/*******************************************************************************/




async function showData1(){
    let url = `https://hotels-com-provider.p.rapidapi.com/v1/hotels/booking-details?adults_number=1&checkin_date=2023-03-26&locale=en_US&currency=USD&hotel_id=${hotelID}&checkout_date=2023-03-27&children_ages=4%2C0` ; 
    try{
        let res = await fetch(url,option) ; 
        let data = await res.json() ; 
        // console.log(data)
        overviewData(data.overview.overviewSections[2].content)
        policyData(data) ; 
        amenitiesData(data.amenities)
        append1(data) ; 
        
    }catch(err){
        console.log(err) ; 
    }

} ; 

async function showData2(){
    let url = `https://hotels-com-provider.p.rapidapi.com/v1/hotels/reviews?locale=en_US&hotel_id=${hotelID}&page_number=1` ; 

    try{
        let res = await fetch(url,option) ; 
        let data = await res.json() ; 
        // console.log(data) ;
        reviewData(data) ; 
    }catch(err){
        console.log(err) ; 
    }
}

let hotelName = document.getElementById("hotelName") ; 
let starRating = document.getElementById("starRating") ; 
let starRatingTitle = document.getElementById("starRatingTitle")
let amenitiesList = document.getElementById("amentitiesList") ;
let cleaningList = document.getElementById("cleaningList") ;
let map1 = document.getElementById("map1") ;
let map2 = document.getElementById("map2")  ;
let address = document.getElementById("address")  ; 
let nearby1 = document.getElementById("n1") ; 
let nearby11 = document.getElementById("n11") ; 
let nearby2 = document.getElementById("n2") ; 
let nearby22 = document.getElementById("n22") ; 
let nearby3 = document.getElementById("n3") ; 
let nearby33 = document.getElementById("n33") ; 
let whatsNearby = document.getElementById("listNearby")

let append1 = (data) =>{
    // console.log(data) ;
    
    map2.innerHTML = null ;  
    nearby1.innerHTML = null ; 
    nearby2.innerHTML = null ; 
    nearby3.innerHTML = null ; 
    address.innerHTML = null ; 
    map1.innerHTML = null ; 
    starRatingTitle.innerHTML = null ; 
    starRating.innerHTML = null ; 
     hotelName.innerHTML = null ; 
     cleaningList.innerHTML = null ; 
     amenitiesList.innerHTML = null ; 
    // document.getElementById("hotelName").innerText = data.name
    hotelName.innerText = data.name ; 
    if(data.starRating==4){
        starRating.src ="https://static.thenounproject.com/png/2155120-200.png" ; 
        starRating.style.width = "100px"
    }else if(data.starRating==5){
        starRating.src ="https://static.thenounproject.com/png/327146-200.png" ;
    }
    else if(data.starRating==3){
        starRating.src ="https://static.thenounproject.com/png/1374754-200.png" ;
    }else if(data.starRating==4.5){
        starRating.src ="https://static.thenounproject.com/png/327146-200.png" ;
    }
    starRatingTitle.innerText = data.starRatingTitle+" Rated by Guets" ; 
    let amenities = (data.amenities[1].listItems)
    // console.log(amenities) ; 
    amenities.forEach(function(el,i){
        // console.log(el.heading) ; 
        let li = document.createElement("li") ; 
        li.innerText = el.heading ;
        // console.log(li) 
        amenitiesList.append(li)
    })

    let cleanliness = data.hygieneAndCleanliness.healthAndSafetyMeasures.measures ; 
    cleanliness.forEach(function(el,i){
        let li = document.createElement("li") ; 
        li.innerText = el ; 
        cleaningList.append(li) ; 
    })

    let lat = data.header.hotelLocation.coordinates.latitude ; 
    let lon = data.header.hotelLocation.coordinates.longitude ; 
    let url = `https://maps.google.com/maps?q=${lat},${lon}&t=&z=13&ie=UTF8&iwloc=&output=embed` ; 
    map1.src = url ; 
    map2.src = url ; 
    // console.log(data.address.addressLine1+" "+data.address.addressLine2) ; 
    // console.log() ; 
    address.append(data.address.fullAddress) ; 
   
    let ab = data.transportation.transportLocations ; 
    let ab2 = data.neighborhood.neighborhoodName ; 
    // console.log(ab2)
   nearby3.append(ab2) ; 
   nearby33.append(ab2) ; 
    
    nearby1.append(ab[0].locations[0].name+" "+ab[0].locations[0].distanceInTime)
    nearby11.append(ab[0].locations[0].name+" "+ab[0].locations[0].distanceInTime)
    nearby2.append(ab[1].locations[0].name+" "+ab[1].locations[0].distanceInTime)
    nearby22.append(ab[1].locations[0].name+" "+ab[1].locations[0].distanceInTime)
    // nearby1.append(ab[0].locations[0].distanceInTime)
    roomDivs(data.roomsAndRates.rooms) ; 
    // let nby = data.overview.overviewSections[2].content ; 
    // console.log(nby) ; 
    // console.log(data)
    // nearby.forEach(function(el,i){
    //     console.log(el)
    //     let ul = document.createElement("ul") ;
    //     let nearbyP = document.createElement("li") ;
    //     nearbyP.innerText = el ; 
    //     ul.append(nearbyP)
    //     whatsNearby.append(ul)
        
    // })
    


}
let overviewData = (data) =>{
    // console.log(data) ; 
    whatsNearby.innerHTML = null ; 
    let ul = document.createElement("ul") ;
    data.forEach(function(el,i){
        // console.log(el) ;
        let li = document.createElement("li") ; 
        li.innerText = el ; 
        ul.append(li) ; 

    })
    console.log(ul)
    whatsNearby.append(ul)
}

// First Overview
let allRooms = document.getElementById("allRooms") ; 
// let features = document.getElementById("features") ; 
let roomDivs = (data) =>{
    // console.log(data) ; 
    
    // console.log(data)
    allRooms.innerHTML = null ; 
    data.forEach(function(el,i){
        // console.log(el.images[1].fullSizeUrl) ;
        let div = document.createElement("div") ; 
        let img = document.createElement("img") ; 
        img.setAttribute("class","roomImages") ;
        img.src = el.images[2].fullSizeUrl ;
        let name = document.createElement("h4") ; 
        name.innerText = el.name ; 
        let div2 = document.createElement("div") ;
        div2.setAttribute("class","features")
        let div3 = document.createElement("div") ;
        div3.setAttribute("id","priceAndReserve")
        let price = document.createElement("h3") ; 
        price.innerText = el.ratePlans[1].price.current ; 
        let reserveButton  = document.createElement("button") ; 
        reserveButton.setAttribute("id","buttonReserve") ; 
        reserveButton.innerText = "Reserve"
        reserveButton.addEventListener("click",function(){
            localStorage.setItem("payment",JSON.stringify(el)) ;
            window.location.reload() ; 
        })
        let feat = document.createElement("p") ; 
        let feat2 = document.createElement("p") ; 
        let feat3 = document.createElement("p") ; 
        let feat4 = document.createElement("p") ; 
        let feat5 = document.createElement("p") ; 
        let feat6 = document.createElement("p") ; 
         
        feat3.innerText = el.additionalInfo.details.amenities[34]
        feat4.innerText = el.additionalInfo.details.amenities[33]
        feat5.innerText = el.additionalInfo.details.amenities[6]
        feat6.innerText = el.additionalInfo.details.amenities[2]
       
        feat2.innerText = el.additionalInfo.details.amenities[19]
        feat.innerText = el.additionalInfo.details.amenities[21] ;

        div2.append(feat,feat2,feat3,feat4,feat5,feat6) ; 
        div3.append(price,reserveButton)
        div.append(img,name,div2,div3) ; 
        allRooms.append(div) ; 


    })
}
//Second Rooms

let reviewData = (data) =>{
    // console.log(data) ; 
    let reviews = data.groupReview[0].reviews ; 
    // console.log(reviews.length)
    let re = data.overview ; 
    // console.log(re)
    document.getElementById("overallReview").innerText = re.overall+"/10" ;
    document.getElementById('reviewTitle').innerText = re.qualitativeBadgeText ; 
    document.getElementById("reviewsTotal").innerText = reviews.length+" Reviews" ; 
    let div = document.createElement("div") ; 
    let cleanliness = document.createElement("p") ;
    cleanliness.innerText = "Cleanliness - "+re.cleanliness+"/10" ; 
    let hotelCondition = document.createElement("p") ;
    hotelCondition.innerText = "Hotel Condition - "+re.hotelCondition+"/10" ; 
    let hotelServices = document.createElement("p") ;
    hotelServices.innerText = "Hotel Services - "+re.hotelService+"/10" ; 
    let roomComfort = document.createElement("p") ;
    roomComfort.innerText = "Room Comfort - "+re.roomComfort+"/10" ; 
    div.append(cleanliness,hotelCondition,hotelServices,roomComfort) ; 
    document.getElementById("ratingBox12").append(div) ; 
    
    // document.getElementById("guestReview").innerText =
    let revv = data.groupReview[0].reviews ; 
    // console.log(revv)
    revv.forEach(function(el,i){
        // console.log(el) ; 
        
        let div2 = document.createElement("div") ; 
        div2.setAttribute("class","commentBox")
        let ratingTitle = document.createElement("h3") ; 
        ratingTitle.innerText = el.formattedRating+" "+el.qualitativeBadgeText ; 
        let time =  Date(el.postedOn) ;
        // let datee = Date(el.postedOn) ; 
    // console.log(datee.toLocaleString()) ; 
        let date = document.createElement("span") ; 
        date.innerText  = time.toLocaleString()  ;
        let comment = document.createElement("p") ; 
        comment.innerText = el.summary ; 
        let guestName = document.createElement("p") ; 
        guestName.innerText = el.recommendedBy ; 
        div2.append(ratingTitle,guestName,date,comment)
        // console.log(el.postedOn)
        document.getElementById("guestComments").append(div2) ; 



    })
    
}
//Reviews ; 
let amentitiesBox = document.getElementById("amentitiesBox1") ;
let amentitiesBox2 = document.getElementById("amentitiesBox2") ;
let amenitiesData = (data) =>{
    amentitiesBox.innerHTML = null ; 
    amentitiesBox2.innerHTML = null ; 
    let amenitiesList = (data[1].listItems) ; 
    amenitiesList.forEach(function(el,i){
        // console.log(el) ; 
        let ul = document.createElement("ul") ; 
        let h3 = document.createElement("h3") ; 
        h3.innerText = el.heading ; 
        let lItems = el.listItems ;
        lItems.forEach(function(elem,i){
            let li = document.createElement("li") ; 
            li.innerText = elem ; 
            // console.log(el)
            ul.append(li) ; 
        })
        amentitiesBox.append(h3,ul)  ; 
        
    })
    let amenitiesList2 = (data[0].listItems) ; 
    amenitiesList2.forEach(function(el,i){
        // console.log(el) ; 
        let ul1 = document.createElement("ul") ; 
        let h31 = document.createElement("h3") ; 
        h31.innerText = el.heading ; 
        let lItems1 = el.listItems ;
        lItems1.forEach(function(elem,i){
            let li = document.createElement("li") ; 
            li.innerText = elem ; 
            // console.log(el)
            ul1.append(li) ; 
        })
        amentitiesBox2.append(h31,ul1)  ; 
        
    })

}

let allInstructions = document.getElementById("allInstructions") ; 
let policyData = (data) =>{
    //  console.log(data) ; 
    allInstructions.innerHTML = null ; 
     let inst = data.smallPrint.policies ;
     inst.forEach(function(el,i){
        let div = document.createElement("div") ;
        div.innerHTML = el
        allInstructions.append(div) ; 
     }) 
}






showData1() ; 
showData2() ; 
showData3() ; 
