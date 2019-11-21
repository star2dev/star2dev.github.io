$(document).ready(function () {
    $('a[href^="http"]').attr('target','_blank');
    document.querySelector('.github-current-year').textContent = new Date().getFullYear();
});
