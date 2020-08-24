
$(function () {
  $("#accordion").accordion({
    collapsible: true
  });
  $("#accordion_2").accordion({
    collapsible: true
  });
  $("#accordion_3").accordion({
    collapsible: true
  });

});

let ShowMoreCheckbox = $('.menu-filter__show-more-link');
ShowMoreCheckbox.click(function (evt) {
  evt.preventDefault();
  $('.menu-filter__show-more').addClass('menu-filter__show-more--shown')
  ShowMoreCheckbox.addClass('menu-filter__show-more-link--remove')
});


let metroInput = $('.submenu-metro').children('.submenu-metro__input-checkbox');
$('#any').click(function () {
  if ($('#any').prop('checked')) {
    metroInput.prop("checked", false)
    metroInput.prop("disabled", true);
  } else {
    metroInput.prop("disabled", false)
  }
});
$('.form-filter__btn-reset').click(function () {
  metroInput.prop("disabled", false)
})


let showMoreItem = $('.show-more-block');
showMoreItem.click(function (evt) {
  evt.preventDefault();
  showMoreItem.addClass('show-more-block--remove')
  $('.item').removeClass('item--more');
});


