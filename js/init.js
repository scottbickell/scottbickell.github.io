(function ($) {
    $(function () {

        $('.sidenav').sidenav();
        $('.parallax').parallax();

        $('#resume').on("click", function() {
            alert('This resume is out of date. New version coming soon');
        })
        $('.modal').modal();
    }); // end of document ready
})(jQuery); // end of jQuery name space