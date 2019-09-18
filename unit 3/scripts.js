
// puts the focus on the first text box
console.log(help);
$("#name").focus();

// keeps other options hidden until "other" is clicked


$('#other-title').css('display','none');
//uses the change function to show other options based on user selections


$("#title").change(function() {  

    if($('#title').val() === "other") {   

     $('#other-title').show();

    } else {

      $('#other-title').hide();

    }

  });






    // t shirt section 
    $('#colors-js-puns').hide();
  $('#colors-heart js').hide();

  // hides color options until a theme is chosen 
  $('#color').prepend("<option id='select-warning'>Please Select a T-shirt Theme'> Please Select a T shirt Theme</option>");
  $('#color').val("Please Select a T-shirt Theme")
  // this puts the please select a t shirt theme to the top of the drop down.
  $('#colors-js-puns').hide();
  $('#colors-heart js').hide();
   $('#design').change(function(){
      if($(this).val()==="js puns"){
          $('#colors-js-puns').show();
          $('#color').html("<option value='cornflowerblue'> Cornflower Blue (jS Puns shirt Only)</option><option value='darkslategrey'> Dark Slate Grey</option <option value='gold'> Gold </option>");}
console.log();
      
    else if ($(this).val==="heart js"){
        $('#colors-js-puns').show();
        $('#color').html("<option value='tomato'>Tomato (I &#9829; JS shirt only)</option><option value='steelblue'> Steel Blue (I &#9829; JS shirt only)</option><option value='dimgrey'> Dim Grey (I &#9829; JS shirt only)</option>");{

        }
    }
    console.log();