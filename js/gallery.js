$(document).ready(function() {
    /*
    * Add caption to FancyBox
    * */

    $('a[data-fancybox]').each(function () {
        const caption = $(this).find('figcaption').text();
        $(this).attr('data-caption', caption);
    });

    /*
    * Prevent form submission
    * */

    $('form').on('submit', function (evt) {
        evt.preventDefault();
    });

    /*
    * Search feature
    * */
    $('#search').on('input', function (evt) {
       const search = $.trim($(this).val().toLowerCase());
       if (search.length > 0){
           $('.item').each(function () {
               const currentItem = $(this).find('figcaption').text().toLowerCase();
               if(currentItem.indexOf(search) >= 0) {
                   $(this).show();
                   $(this).attr('data-fancybox','gallery');
               }else{
                   $(this).hide();
                   $(this).attr('data-fancybox', false);
               }
           });
       }else {
           $('.item').show().attr('data-fancybox',"gallery");
       }
    });

});

