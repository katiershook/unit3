// I started this project with wanting exceeds expectations but realized I don't have enough time to do that right now. I can always go back and make 
// this project better but right now I am happy with meets expectations. 
// unit 3. 

$( document ).ready(function(){

  console.log( "ready!" );


// puts the focus on the first text box
$("#name").focus();
console.log("set");

// keeps other options hidden until 'other' is clicked


$('#other-title').css('display','none');


//uses the change function to to hide the text box for "other job role"
$('#title').change(function () {  

  if ( $('#title').val() === 'other' ) {   
    $('#other-title').show();
  } else {
    $('#other-title').hide();
  }
});


// uses hide(); to hide options that I don't want showing yet
$('#colors-js-puns').hide();
$('#colors-heart js').hide();

// hides color options until a theme is chosen 
$('#color').prepend('<option id="select-warning">Please Select a T-shirt Theme</option>');
$('#color').val('Please Select a T-shirt Theme');


// this puts the please select a t shirt theme to the top of the drop down.
$('#colors-js-puns').hide();
$('#colors-heart-js').hide();

//uses the change(function) to change the drop down options based on the first selections

$('#design').change(function () {
  if ( $(this).val() === 'js puns' ) {
    $('#colors-js-puns').show();
    $('#color').html('<option value="cornflowerblue"> Cornflower Blue (jS Puns shirt Only)</option><option value="darkslategrey"> Dark Slate Grey</option> <option value="gold"> Gold </option>');

  } else if ( $(this).val () === 'heart js' ) {
    $('#colors-js-puns').show();
    $('#color').html('<option value="tomato"> Tomato (I &#9829; JS shirt only)</option><option value="steelblue"> Steel Blue (I &#9829; JS shirt only)</option><option value="dimgrey"> Dim Grey (I &#9829; JS shirt only)</option>');
  }
  else { ( $(this).val () === 'select method' )
  $('#colors-js-puns').hide();
  $('#colors-heart-js').hide();
  }
});



let totalActivityCost = 0; // sets the cost to 0 
const totalActivityCostDiv =$('<div></div>').text("total: $"+ totalActivityCost); // creates a div and uses.text to add the total $ to the total activty cost.

$('.activities').append(totalActivityCostDiv);



$('input[type="checkbox"]').change(function(event){
  const selected =$(event.target);
  const selectedCost = parseInt(selected.attr("data-cost").replace(/\D/g, '')); // uses parseInt and reg ex to turn the string into numbers

  if (selected.is(':checked')){ // if a box is selected it shows the cost affiliated with it. If more than one box is selected it adds that cost to the total
    totalActivityCost += selectedCost;
    totalActivityCostDiv.text('Total: $' + totalActivityCost);


  }

  else{
    totalActivityCost -= selectedCost; // if a box that has been selected is unselected it removes the cost of the activity
    totalActivityCostDiv.text('Total: $' + totalActivityCost);
  }
})




// uses the change function to compare the date and time of the activity selected to other activities. If there are activities for the same 
// date and time it won't allow that box to be checked. 

$('input[type="checkbox"]').change(function() {
  const dateSelected = $(this);
  const $activities = $('input[type="checkbox"]');
  const selectedTime = dateSelected.attr('data-day-and-time');
  const selectedName = dateSelected.attr('name');

  $activities.each(function() {
 
    if (
      selectedTime === $(this).attr('data-day-and-time') &&
      selectedName !== $(this).attr('name')
    ) {
      if (dateSelected.prop('checked')) {
        $(this).attr('disabled', true);
        dateSelected.attr('disabled', false);
      } else {
        $(this).attr('disabled', false);
        dateSelected.attr('disabled', false);
      }
    }
  });
});


/// hides the select a method option while displaying credit card first in the drop down
$('option[value="select method"]').attr('hidden', 'hidden'); 

const creditCard = $('option[value="Credit Card"]').attr('selected','selected');

// this uses the change method to display the proper text when an option is selected. For example if we choose paypal as the payment
// then the paypal instructions will show. 


$('#payment').change(function() {
  if ( $(this).val() === 'Credit Card' ) {
    $('#credit-card').show();
    $('#paypal').hide();
    $('#bitcoin').hide();

  } ;
  if ($(this).val() === 'PayPal' ) 
  {
     $('#paypal').show();
     $('#credit-card').hide();
     $('#bitcoin').hide();

  }; 
  if ($(this).val() === 'Bitcoin') 
  {
    $('#bitcoin').show();
    $('#credit-card').hide();
    $('#paypal').hide();
  }});

//  this function uses the || operator to determine if there is anything in the name field. After checking if there is nothing a red border will display.
// Once something is entered the  red border should dissapear and return to the color it first was.

function isValidName(name){
  
  let nameField = $('#name').val();
   if (nameField == "" || nameField ==" ") // this says if the field is empty or has spaces then to return it false.
    { $('#name').css("border" ,"2px solid red")
       return false }

       else  { $('#name').css("border" ,"2px solid #6F9DDC");
     return true  
        }}
   
  // the key up function calls the isValidName function and checks in real time to ensure whats being entered into the field is true to the regex that 
  // has been set. 


  $('#name').keyup(function(){
    isValidName()
    
  });

  function isValidEmail(){
    let emailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let email = $('#mail').val();
    if (emailTest.test(email) === false){
      $('#mail').css("border","2px solid red");
      return false 
    
    } else {
       $('#mail').css("border","2px solid #6F9DDC");
       return true }
       
  } 
  $('#mail').keyup(function(){
    isValidEmail() })



    function isValidCc(){
    
    let ccTest = /^[1-9][0-9]{12,15}$/
    let cc = $('#cc-num').val();
    if (ccTest.test(cc) === false){
      $('#cc-num').css("border","2px solid red");
      return false 
    } else {  $('#cc-num').css("border","2px solid #6F9DDC");

    return true }} 

    $('#cc-num').keyup(function(){
      isValidCc() })

      

    function isValidZip() {

      let zipTest = /^\d{5}$/
      let zip = $('#zip').val();
      if (zipTest.test(zip) === false){
        $('#zip').css("border","2px solid red");
        return false 
      } else {  $('#zip').css("border","2px solid #6F9DDC");
  
      return true 
    }} 
  
      $('#zip').keyup(function(){
        isValidZip() 
      })

        
    function isValidCvv(){

      let cvvTest = /^\d{3}$/
      let cvv = $('#cvv').val();
      if (cvvTest.test(cvv) === false){
        $('#cvv').css("border","2px solid red");
        return false 
      } else {  $('#cvv').css("border","2px solid #6F9DDC");
  
      return true 
    }} 
    
    function isValidActivity(){
     if ($('input[type="checkbox"]').prop('checked')) {
        return true
      }
      else {  if ($(this).attr('checked') === false)
        return false 
      }
    }
  
      $('#cvv').keyup(function(){
        isValidCvv() 
      })

        console.log('ok')
        
      
        function validateForm(){
      
            isValidName();
            isValidEmail();
            isValidCc();
            isValidZip();
            isValidCvv();
            isValidActivity();
          
          
       
           
            if ( isValidCc() || isValidName() || isValidEmail() || isValidZip() 
               || isValidCvv() || isValidActivity() )
             { return true }
             else { return false}
        }
             

             console.log('lol')
               
          
          
             // if (isValidCvv() === false) {
          // allGood = false; }

          // if (isValidZip() === false) {
          // allGood = false; }

          // if (isValidCc() === false){
          // allGood = false; }

          // if (isvalidEmail() === false){
          // allGood = false; }
        
         
         $('form').on('submit', function(event){
            if(validateForm() === false ){
             event.preventDefault();
            
            }});
          
          
         
          });
      
        