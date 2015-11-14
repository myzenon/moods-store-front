$(function () {
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 15,
    format: 'dd/mm/yyyy'
  });
  $('select').material_select();
  $('div.picker').on('click', function () {
    $(this).siblings('i').addClass('active');
  });
  $('ul.dropdown-content li').on('click', function () {
    $(this).parent().parent().siblings('i').addClass('active');
  });
  $('input#phone').characterCounter();
});
