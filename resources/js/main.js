// Initialize your app
var myApp = new Framework7({
    // modalTitle: '美丽热线',
    // modalButtonOk: '确认',
    // modalButtonCancel: '取消',
    // smartSelectBackText: '返回',
    // smartSelectPopupCloseText: '关闭',
    // notificationCloseButtonText: '关闭',
    animateNavBackIcon: true,
    template7Pages: true,
    swipeBackPage: true,
    cache: false
});

// Export selectors engine
var $$ = Dom7;

/****************************************************************************************************************
 *                                                  global
 ****************************************************************************************************************/

var isResizing = false;
var lastClientX = 0;

$$('#drag').on('mousedown', function(e) {
    isResizing = true;
});

$$(document).on('mousemove', function(e) {
    // we don't want to do anything if we aren't resizing.
    if (!isResizing) {
        return;
    }
    if (e.clientX >= 200) {
        lastClientX = e.clientX;
        $$('.view-left').css('width', e.clientX + 'px');
        $$('.view-main').css('width', 'calc(100% - ' + (e.clientX + 1) + 'px)');
    } else if (e.clientX >= 0 && e.clientX < 50) {
        lastClientX = 0;
        $$('.view-left').css('width', '0px');
        $$('.view-main').css('width', 'calc(100% - 1px)');
    } else if (lastClientX == 0 && e.clientX >= 50) {
        $$('.view-left').css('width', '200px');
        $$('.view-main').css('width', 'calc(100% - 201px)');
    }
}).on('mouseup', function(e) {
    isResizing = false;
});

/****************************************************************************************************************
 *                                                  main view
 ****************************************************************************************************************/

var leftView = myApp.addView('.view-left', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

/****************************************************************************************************************
 *                                                  main view
 ****************************************************************************************************************/

var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});