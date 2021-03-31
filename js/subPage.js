'use script!';

$('a.toggle.sub').on('click', function () {
  $('#wrapper').toggleClass('open');
});

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $("header").addClass("down");
    $(".sub-logo").addClass("down-logo");
    $(".sub-list").addClass("down-text");
    $(".sub-icon").addClass("down-icon");
    $(".sub-page-list").addClass("down-page-list");
  } else {
    $("header").removeClass("down");
    $(".sub-logo").removeClass("down-logo");
    $(".sub-list").removeClass("down-text");
    $(".sub-icon").removeClass("down-icon");
    $(".sub-page-list").removeClass("down-page-list");
  }
});

$('li.sub-list').on('click', function () {
  var index = $('li.sub-list').index(this);
  showList(index);
});

function showList(n) {
  $('div.sub-list-box:eq(' + n + ')').toggleClass('max-height rg-text');
  $('div.sub-list-box:not(:eq(' + n + '))').removeClass('max-height rg-text');
  $('li.sub-list:eq(' + n + ')').toggleClass('bold-text');
  $('li.sub-listnot(:eq(' + n + '))').removeClass('bold-text');
}