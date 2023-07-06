function addRecommendation() {

    // Get the message of new recommendation.
    let recommendation = document.getElementById("new_recommendation");

    //Display a pop-up message if a new recommendation is added.
    if (recommendation.value != null && recommendation.value.trim() != "")
    {
        console.log("New recommendation added")

        //Call the showPopup method
        showPopup(true);

        // Create a new recommendation element and set its value  to the user's message
        let element_rec = document.createElement("div");
        element_rec.setAttribute("class", "recommendation");
        element_rec.innerHTML = "<span>&#8220;</span>" + recommendation.value +
        "<span>&#8221;</span>";
        // Add this new recommendation at the end of the list of recommendations
        document.getElementById("all_recommendations").appendChild(element_rec);

        //Reset the value of testarea
        recommendation.value = "";
    }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
