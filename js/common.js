jQuery(function($) {
    $('script[data-url]').each(function() {
        var _this = $(this),
            url = _this.attr('data-url');
        _this.attr('src',url); 
    });
});