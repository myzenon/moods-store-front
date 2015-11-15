$(function () {
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 15,
    format: 'dd/mm/yyyy'
  });
  $('div.picker').on('click', function () {
    $(this).siblings('i').addClass('active');
  });
  $('ul.dropdown-content li').on('click', function () {
    $(this).parent().parent().siblings('i').addClass('active');
  });
  $('input#phone').characterCounter();
  $('.input-field label[for]').addClass("active");
});
