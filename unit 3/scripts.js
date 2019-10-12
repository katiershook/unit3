$( document ).ready(function() {

  console.log( "ready!" );


// puts the focus on the first text box
$("name").focus();
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
    $('#color').html('<option value="cornflowerblue"> Cornflower Blue (jS Puns shirt Only)</option><option value="darkslategrey"> Dark Slate Grey</option <option value="gold"> Gold </option>');

  } else if ( $(this).val () === 'heart js' ) {
    $('#colors-js-puns').show();
    $('#color').html('<option value="tomato"> Tomato (I &#9829; JS shirt only)</option><option value="steelblue"> Steel Blue (I &#9829; JS shirt only)</option><option value="dimgrey"> Dim Grey (I &#9829; JS shirt only)</option>');
  }
});



let totalActivityCost = 0; // sets the cost to 0 
const totalActivityCostDiv =$('<div></div>').text("total: $"+ totalActivityCost); // creates a div and uses.text to add the total $ to the total activty cost.

$('.activities').append(totalActivityCostDiv);
console.log(totalActivityCost)


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




//watch for box to be clicked

$('input[type="checkbox"]').change(function() {
  const dateSelected = $(this);
  const $activities = $('input[type="checkbox"]');
  const selectedTime = dateSelected.attr('data-day-and-time');
  const selectedName = dateSelected.attr('name');

  $activities.each(function() {
    console.log("hi");
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
});
$('option[value="select method"]').attr('hidden', 'hidden');

const creditCard = $('option[value="Credit Card"]').attr('selected','selected');

console.log("apple");

$('#payment').change(function(event) {
  if ( $(this).val() === 'credit-card' ) {
    $('#credit-card').show();
    $('#paypal').hide();
    $('#bitcoin').hide();

  } else if ($(this).val() === 'paypal' ) 
  {
     $('#paypal').show();
     $('#credit-card').hide();
     $('#bitcoin').hide();

  } else ($(this).val() === 'bitcoin') 
  {
    $('#bitcoin').show();
    $('#credit-card').hide();
    $('#paypal').hide();
  }
});