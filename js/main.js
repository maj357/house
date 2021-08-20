$(function () {

  //счетчик этажей при клике
  var currentFloor = 2;
  var counterUp = $('.counter-up');
  var counterDown = $('.counter-down');
  var floorPath = $('.main__image path');
  var modal = $('.modal');
  var modalCloseButton = $('.modal__close');
  var viewFlatsButton = $('.view-flats');


  floorPath.on('mouseover', function () {
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr('data-floor');
    $('.main__info-counter').text(currentFloor);
  });

  //подключаем стрелку UP для увеличения на 1
  counterUp.on('click', function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
      $('.main__info-counter').text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor="${usCurrentFloor}"]`).toggleClass('current-floor');
    }
  });

  //подключаем стрелку UP для уменьшения на 1
  counterDown.on('click', function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
      $('.main__info-counter').text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor="${usCurrentFloor}"]`).toggleClass('current-floor');
    }
  });

  //появление моального окна
  floorPath.on('click', function () {
    modal.toggleClass('is-open');
  });

  //закрытие модального окна по кнопке
  viewFlatsButton.on('click', function () {
    modal.toggleClass('is-open');
  });

  //закрытие модального окна
  modalCloseButton.on('click', function () {
    modal.removeClass('is-open');
  });

  // Закрытие модальных окон через 'esc'
  $(document).on('keydown', function (event) {
    if (event.keyCode == 27) {
      modal.removeClass('is-open');
    }
  });

  //появление мобильного меню
  $('.mobile-btn').on('click', function () {
    $('.mobile-menu').toggleClass('active');
  });

  //включаем перемещение блоков
  const da = new DynamicAdapt("max");
  da.init();
});