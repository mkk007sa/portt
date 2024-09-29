<script>
    // When the page scrolls, call the stickyNav function
    window.onscroll = function() { stickyNav() };

    var navbar = document.querySelector("nav");

    var sticky = navbar.offsetTop;
    function stickyNav() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }
</script>
