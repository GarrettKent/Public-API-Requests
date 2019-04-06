let array = [ ]

$.getJSON('https://randomuser.me/api/?results=12&nat=us', function (data){
//I created the search variable then appended it to the 'search-container' div after I set search equal to the markup provided.
let search; 
  search = '<form action="#" method="get">';
  search += '<input type="search" id="search-input" class="search-input" placeholder="Search..."'
  search += '<input type="submit" id="serach-submit" class="search-submit"></form>'
  $('.search-container').append(search)

/*** 
    I created the cardInfo variable then used the $.each method to iterate 
over everything involved in my callback function. After each object has been iterated through, 
I appended the variable to the 'gallery' div. Lastly, I pushed cardInfo into my array variable.
***/
let cardInfo;
  $.each(data.results, function(index,result) {
    cardInfo = `<div class="card" value="${index}">`
    cardInfo += `<div class="card-img-container">`
    cardInfo += '<img src="' + result.picture.large + '" class="card-img"></div>'
    cardInfo += `<div class="card-info-container">`
    cardInfo += '<h3 id="name" class="card-name cap"> ' + result.name.first + ' '+ result.name.last + '</h3>'
    cardInfo += '<p class ="card-text">' + result.email + '</p>'
    cardInfo += '<p class ="card-text cap">' + result.location.city+ ", " + result.location.state + '</p></div>'
    cardInfo += '</div>'
$('.gallery').append(cardInfo)
array.push(cardInfo)
})
//Created a for loop to loop through the 12 people, then created the modal variable and it equal to the card class.
for(i=0; i<12; i+=1){
  const modal = document.querySelectorAll('.card')[i];
  //I pushed the contents of the modal variable into my array.
  array.push(modal);
  //Added an event listener to my modal varible to make it able to be clicked on 
  modal.addEventListener('click', function(event) {
  //Created modalValues variable in my function and appended the contents given to me to the body.      
    let modalValues = modal.getAttribute('value');
$('body').append(`<div class="modal-container">
                    <div class="modal">
                        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                        <div class="modal-info-container">
                        <img class="modal-img" src="${data.results[modalValues].picture.large}" alt="profile picture">
                        <h3 id="name" class="modal-name cap">${data.results[modalValues].name.first} ${data.results[modalValues].name.last}</h3>
                        <p class="modal-text">${data.results[modalValues].email}</p>
                        <p class="modal-text cap">${data.results[modalValues].location.city}</p>
                        <hr>
                        <p class="modal-text">${data.results[modalValues].phone}</p>
                        <p class="modal-text">${data.results[modalValues].location.street} ${data.results[modalValues].location.city}, ${data.results[modalValues].location.state} ${data.results[modalValues].location.postcode} </p>
                        <p class="modal-text">${data.results[modalValues].dob.date}</p>
                        </div>
                        </div>
                    </div>`);

//Whenever the close button is clicked on, the 'modal-container' class is removed.
$('#modal-close-btn').click(function() {
    $('.modal-container').remove();
            });
        });
    };
});