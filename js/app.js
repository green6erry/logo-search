  $(function() {

console.log('page load');

$('#category').selectable();



function  criteria(category, minSalary){
  //if(salary >= $('#logo-list').find('img[salary="'++'"]'))

  var checkCategory = $('#logo-list').find('img[value="'+category+'"]');
  checkCategory.removeClass('gray');
  
  var logoSalary = parseInt($('#logo-list img').attr('alt'));
  
  var checkSalary = logoSalary <= minSalary;
  console.log('salary', checkSalary)


  



  if(checkSalary && checkCategory) {
    
  }

  
  
  


 //console.log($('#logo-list img').get());

}

$('#content').submit(function(){
  console.log('hi');
  event.preventDefault();
  var genreSelected = $('#content').find('li[class="ui-selectee ui-selected"]').val();
  var salarySelected = parseInt($('#salary').val());
  console.log(genreSelected, salarySelected);
  criteria(genreSelected, salarySelected);
});




function showResults() {}

 });

 