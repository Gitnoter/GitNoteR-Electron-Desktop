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
var $$drag = $$('#drag');
var $$viewLeft = $$('.view-left');
var $$viewRight = $$('.view-main');

$$drag.on('mousedown', function(e) {
    isResizing = true;
});

$$(document).on('mousemove', function(e) {
    // we don't want to do anything if we aren't resizing.
    if (!isResizing) {
        return;
    }
    if (e.clientX >= 320) {
        lastClientX = 320;
    } else if (e.clientX >= 200) {
        lastClientX = e.clientX;
    } else if (e.clientX >= 0 && e.clientX < 50) {
        lastClientX = 0;
    } else if (lastClientX == 0 && e.clientX >= 50) {
        lastClientX = 200;
    } else {
        return;
    }
    resetWindowSize(lastClientX);
}).on('mouseup', function(e) {
    isResizing = false;
});

function resetWindowSize(clientX) {
    $$viewLeft.css('width', clientX + 'px');
    $$viewRight.css('width', 'calc(100% - ' + (clientX + 1) + 'px)');
    $$drag.css('left', clientX - 4 + 'px');
    myApp.sizeNavbars('.view');
}

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