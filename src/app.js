var UI = require('ui');
var Vector = require('vector2');

//data for splash screen
var splash = new UI.Card({
    subtitle: '\nG-Auth',
    body: '\nreally, just g-auth',
});

//data for main screen
var main = (function() {
    var window = new UI.Window();
    //top text
    window.add(new UI.Text({
        position: new Vector(0, 0),
        size: new Vector(144, 20),
        font: 'gothic-18-bold',
        text: '',
        textAlign: 'center'
    }));
    //middle text
    window.add(new UI.Text({
        position: new Vector(0, 53),
        size: new Vector(144, 30),
        font: 'gothic-28-bold',
        text: 'Loading...',
        textAlign: 'center'
    }));
    //bottom text
    window.add(new UI.Text({
        position: new Vector(0, 120),
        size: new Vector(144, 20),
        font: 'gothic-18-bold',
        text: '',
        textAlign: 'center'
    }));
    return window;
})();

var index = -1;

//changes the text in the main window to enable scrolling
var updateMain = function(window, data, offset) {
    return function() {
        //trim index
        index += offset;
        if(index < 0) {
            index += data.length;
        } else if (index >= data.length) {
            index -= data.length;
        }
        
        //actually move the text
        for(var i = 0; i < 3; i++) {
            window._items[i].text(data[(index + i) % data.length]);
        }
    };
};

//screen to show auth code
var code = (function() {
    var window = new UI.Window();
    //top text
    window.add(new UI.Text({
        position: new Vector(0, 0),
        size: new Vector(144, 20),
        font: 'gothic-18-bold',
        text: '',
        textAlign: 'center'
    }));
    //middle text
    window.add(new UI.Text({
        position: new Vector(0, 53),
        size: new Vector(144, 30),
        font: 'gothic-28-bold',
        text: 'Loading..',
        textAlign: 'center'
    }));
    //bottom text
    window.add(new UI.Text({
        position: new Vector(0, 120),
        size: new Vector(144, 20),
        font: 'gothic-18-bold',
        text: '',
        textAlign: 'center'
    }));
    return window;
})();
   

(function() {
    var data = ['top', 'middle', 'bottom'];
    
    //show main
    main.show();
    
    //register key presses for main stuff
    main.on('show', updateMain(main, data, 0));
    main.on('click', 'up', updateMain(main, data, -1));
    main.on('click', 'select', function() { code.show(); });
    main.on('click', 'down', updateMain(main, data, 1));
    
    //show splash
    splash.show();
    
    //register key presses to hide splash
    splash.on('click', 'up', splash.hide);
    splash.on('click', 'select', splash.hide);
    splash.on('click', 'down', splash.hide);
})();