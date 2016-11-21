(function($){

  // Pseudo-select dropdown
  $(".pseudo-select").on("click", ".init", function() {
    $(this).closest(".pseudo-select").children('li:not(.init)').toggle();
  });

  var allOptions = $(".pseudo-select").children('li:not(.init)');
  $(".pseudo-select").on("click", "li:not(.init)", function() {
    allOptions.removeClass('selected');
    $(this).addClass('selected');
    $(".pseudo-select").children('.init').html($(this).html());
    allOptions.toggle();
  });

  // Pseudo-select-multiple dropdown
  $(".pseudo-select-multiple").on("click", ".init-multiple", function() {
    $(this).closest(".pseudo-select-multiple").children('li:not(.init-multiple)').toggle();
  });

  $('.pseudo-select-multiple').change(function() {
    var selected = 0;
    $('.pseudo-select-multiple .input-checkbox:checked').each(function(){
      selected++;
    });
    $('#result').text(selected);
  });


  // Hide pseudo-dropdown-select at body click
  jQuery('body').click(function( event ){
      // was click is in parent element?
      var eventInMenu = $( event.target ).parents('.pseudo-select');

      // if not dropdown will hide
      if( !eventInMenu.length ){
        $('.pseudo-select li:not(li.init)').hide();
      }
    });



  // Hide pseudo-dropdown-multiple select at body click
  jQuery('body').click(function( event ){
      // was click is in parent element?
      var eventInMenu = $( event.target ).parents('.pseudo-select-multiple');

      // if not dropdown will hide
      if( !eventInMenu.length ){
        $('.pseudo-select-multiple li:not(li.init-multiple)').hide();
      }
    });

  // Dropdown icon-mail in header
  $(function(){
    $('.header-menu .icon-mail').hover(function(){
      $('.header-menu-new-mails').addClass('show-block');
    }, function(){
      $('.header-menu-new-mails').removeClass('show-block');
    })
  });

  // Dropdown user-name in header
  $(function(){
    $('.user-name a').hover(function(){
      $('.header-menu-options').addClass('show-block');
    }, function(){
      $('.header-menu-options').removeClass('show-block');
    })
  });

  // Add/remove bg for .tags
  $(".tags").click(function () {
    $(this).toggleClass("tags-active");
  });

  // Aside height 100%
  $('.aside').css("height", $(document).height());

  // Courses
  $('.gridly').gridly({
    base: 100, // px
    gutter: 10, // px
    columns: 12
  });

})(jQuery);