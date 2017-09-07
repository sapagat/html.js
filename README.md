# html.js

Minimal helper to plot HTML controlled from JS. Written with love in ES5.

## Usage

### Creating your first element

Without using ``html.js`` library you would do the following:

```javascript

var element = document.createElement('button');
element.className = 'my-class red';
element.onclick = function(){
    console.log('Hello motto!');
};

document.querySelector('#container').appendChild(element);

```


This making use of ``html.js`` would be the following:

```javascript

var Button = function(){
    return {
        button: {
            class: 'my-class red',
            onclick: function(){
                console.log('Hello motto!');
            }
        }
    }
}

var element = HTML.build(new Button());
document.querySelector('#container').appendChild(element);
```


### Nesting elements

Here is where it gets harder to understand what we are going to render.

```javascript

var div = document.createElement('div');
div.className = 'some-container';

var button = document.createElement('button');
button.className = 'my-class red';
button.onclick = function(){
    console.log('Hello motto!');
};

div.appendChild(button);

```


This making use of ``html.js`` would be the following:

```javascript

var Button = function(){
    return {
        div: {
            class: 'some-container',
            children: [
                button: {
                    class: 'my-class red',
                    onclick: function(){
                        console.log('Hello motto!');
                    }
                }
            ]
        }
    }
}
```


### Using parameters in your templates

```javascript

var Button = function(color, message){
    function chooseCss(color){
        var css = {
            red: 'danger',
            green: 'success'
        }
        return css[color];
    }

    return {
        button: {
            class: chooseCss(color),
            onclick: function(){
                console.log(message);
            }
        }
    }
}

var template = new Button('red', 'Danger!!!!');
var element = HTML.build(template);

```

### Using other templates

```javascript

var Submit = function(){
    return {
        div: {
            class: 'form-actions',
            children: [
                new Button('green', 'Thank you!')
            ]
        }
    }
}

var Button = function(color, message){
    function chooseCss(color){
        var css = {
            red: 'danger',
            green: 'success'
        }
        return css[color];
    }

    return {
        button: {
            class: chooseCss(color),
            onclick: function(){
                console.log(message);
            }
        }
    }
}

```












