function changeActive(element) {
    var navItems = document.querySelectorAll('#navbar a');
    navItems.forEach(function(item) {
        item.classList.remove('active');
    });

    element.classList.add('active');
}