$('.product').hover(function() {
    $(this).toggleClass('hover');
})

$(".jewelry-tabs").on('click', 'li', function() {
    var $this = $(this);
    $this.siblings().removeClass('active');
    $this.addClass('active');
    $index = $this.index();
    $(this).parents('.jewelry-tabs').siblings('.jewels-detail').removeClass('active');
    $(this).parents('.jewelry-tabs').siblings('.jewels-detail').eq($index).addClass('active');
})