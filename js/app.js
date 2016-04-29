  $(function() {

$('#category').selectable();


function  criteria(category, minSalary){
  
  $('#logo-list img').each(function(index){
    var itemSalary = parseInt($(this).attr('alt'));
    var itemCategory = parseInt($(this).attr('value'));
    var checkSalary = itemSalary >= minSalary;
    var checkCategory = itemCategory == category;


    if(checkSalary && checkCategory){
      $(this).removeClass('gray');
    }
    else if (checkCategory){
      $(this).removeClass('gray');
    }
    else if (checkSalary){
      $(this).removeClass('gray');
    }
  });
}

$('#content').submit(function(){
  $('#logo-list img').each(function(){
    $(this).addClass('gray');
  });
  event.preventDefault();
  var genreSelected = $('#content').find('li[class="ui-selectee ui-selected"]').val();
  var salarySelected = parseInt($('#salary').val());
  criteria(genreSelected, salarySelected);
});


});

 