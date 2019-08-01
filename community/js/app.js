+function ($) {
  $('[data-toggle="pop-menu"]')
    .on('click', function (e) {
      if (e.isDefaultPrevented()) {
        return;
      }
      e.preventDefault();

      var _$button = $(this),
        _$target = $(_$button.data('target'));
      _$target
        .show()
        .find('.menu-list')
        .css({
          top: _$button.height() + _$button.offset().top
        });
    });
  $('[data-toggle="pop-alert"]')
    .on('click', function (e) {
      if (e.isDefaultPrevented()) {
        return;
      }
      e.preventDefault();

      var _$button = $(this),
        _$target = $(_$button.data('target'));
      $('.modal').hide();
      _$target
        .show();
    });
  $('.modal').on('click', '.backdrop', function (e) {
    if (e.isDefaultPrevented()) {
      return;
    }
    e.preventDefault();

    var _$self = $(this),
      _$parent = _$self.parent();
    _$parent.hide();
  })
  .on('click', '.btn-alert__confirm', function (e) {
    if (e.isDefaultPrevented()) {
      return;
    }
    e.preventDefault();

    var _$self = $(this),
      _$parent = _$self.parents('.modal');
    _$parent.hide();
  })
}(jQuery);