describe('Html builder', function() {
  it('creates an HTML element given its template', function() {
    var template = {
      div: {}
    }

    var element = HTML.build(template);

    expect(element.outerHTML).toEqual('<div></div>');
  });

  it('adds id to the element', function(){
    var template = {
      div: { id: 'my-id'}
    };

    var element = HTML.build(template);

    expect(element.outerHTML).toEqual('<div id="my-id"></div>');
  });

  it('adds css classes to the element', function(){
    var template = {
      div: { class: 'my-css-class'}
    };

    var element = HTML.build(template);

    expect(element.outerHTML).toEqual('<div class="my-css-class"></div>');
  });

  it('add value attribute to an element', function(){
    var template = {
      input: { value: 'ojete'}
    };

    var element = HTML.build(template);

    expect(element.outerHTML).toEqual('<input value="ojete">');
  });

  it('adds type attribute to an element', function(){
    var template = {
      input: { type: 'text'}
    };

    var element = HTML.build(template);

    expect(element.outerHTML).toEqual('<input type="text">');
  })

  it('adds placeholder to an element', function(){
    var template = {
      input: { placeholder: 'Some text' }
    };

    var element = HTML.build(template);

    expect(element.outerHTML).toEqual('<input placeholder="Some text">');
  });

  it('adds style attribute to an element', function(){
    var template = {
      span: { style: 'color: blue'}
    };

    var element = HTML.build(template);

    expect(element.outerHTML).toEqual('<span style="color: blue"></span>');
  });

  it('adds innerHTML to the element', function(){
    var template = {
      span: { innerHTML: 'Some text'}
    };

    var element = HTML.build(template);

    expect(element.outerHTML).toEqual('<span>Some text</span>');
  });

  it('supports nested levels', function(){
    var template = {
      div: {
        class: 'theDiv',
        children: [
          {
            span: {
              children: [
                { p: { class: 'something', innerHTML: 'Ole!'} }
              ]
            }
          }
        ]
      }
    };

    var element = HTML.build(template);

    expectedHMTL = '<div class="theDiv"><span><p class="something">Ole!</p></span></div>';
    expect(element.outerHTML).toEqual(expectedHMTL);
  });

  it('can have more than one element per node', function(){
    var template = {
      div: {
        children: [
          { span: { innerHTML: 'Something important' } },
          { p: { innerHTML: 'The thing'} }
        ]
      }
    };

    var element = HTML.build(template);

    expectedHMTL = '<div><span>Something important</span><p>The thing</p></div>';
    expect(element.outerHTML).toEqual(expectedHMTL);
  });

  it('allows to attach onclick callbacks', function(){
    var actionated = false;
    var template = {
      button: {
        onclick: function(){
          actionated = true;
        }
      }
    };

    var element = HTML.build(template);
    var onclickEvent = new Event('click');
    element.dispatchEvent(onclickEvent);

    expect(actionated).toEqual(true);
  })
});
