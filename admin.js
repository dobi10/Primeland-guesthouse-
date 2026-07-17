// PrimeLand Guesthouse Admin


import { db } from "./firebase.js";


import {

collection,

getDocs,

query,

orderBy

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";





const bookingList = document.getElementById("bookingList");




async function loadBookings(){


try{


const q = query(

collection(db,"bookings"),

orderBy("createdAt","desc")

);



const snapshot = await getDocs(q);



bookingList.innerHTML = "";




if(snapshot.empty){


bookingList.innerHTML =

"<p>No reservations yet.</p>";


return;


}




snapshot.forEach((doc)=>{


const booking = doc.data();



const card = document.createElement("div");


card.className = "review-card";



card.innerHTML = `


<h3>
Reservation
</h3>


<p>
👤 Name: ${booking.name}
</p>


<p>
📞 Phone: ${booking.phone}
</p>


<p>
📅 Date: ${booking.date}
</p>


<p>
💬 Message: ${booking.message}
</p>


`;



bookingList.appendChild(card);



});



}

catch(error){


console.error(error);


bookingList.innerHTML =

"<p>Error loading reservations.</p>";


}



}



loadBookings();
