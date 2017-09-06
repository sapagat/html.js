# html.js

Minimal helper to plot HTML controlled from JS.

## Usage

You define a JSON template with JS:

```javascript

var MyCardTemplate = function(){
    return {
        div: {
            id: 'secret'
            class: 'a-class another-class',
            onclick: function(){
                console.log("Hello motto!");
            }
        }
    }
}

```

Then you can use ``html.js`` to build the HTML from it:

```javascript

var template = new MyCardTemplate();
var html = HTML.build(template);

```

This way you can handle where and what HTML should be rendered.















