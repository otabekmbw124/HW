$(function () {

  var mixer = mixitup('.directions__list');

  $('.directions__filter-btn').on('clcik', function () {
    $('.directions__filter-btn').removeClass('directions__filter--active')
    $(this).addClass('directions__filter-btn--active')
  })

})