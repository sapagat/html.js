var HTML = {
  build: function(template){
    var elementName = Object.keys(template)[0];
    var element = document.createElement(elementName);
    var descriptor = template[elementName];

    this.assingId(element, descriptor);
    this.assignClass(element, descriptor);
    this.assignStyle(element, descriptor);
    this.assignValue(element, descriptor);
    this.assignType(element, descriptor);
    this.assignPlaceholder(element, descriptor);
    this.assingInnerHTML(element, descriptor);
    this.listenToOnClick(element, descriptor);
    this.appendChildren(element, descriptor);

    return element;
  },

  assingId: function(element, descriptor){
    if(!descriptor.id) return;

    element.id = descriptor.id;
  },

  assignClass: function(element, descriptor){
    if(!descriptor.class) return;

    element.className = descriptor.class;
  },

  assignStyle: function(element, descriptor){
    if(!descriptor.style) return;

    element.setAttribute('style', descriptor.style);
  },

  assignValue: function(element, descriptor){
    if(!descriptor.value) return;

    element.setAttribute('value', descriptor.value);
  },

  assignType: function(element, descriptor){
    if(!descriptor.type) return;

    element.setAttribute('type', descriptor.type);
  },

  assignPlaceholder: function(element, descriptor){
    if(!descriptor.placeholder) return;

    element.setAttribute('placeholder', descriptor.placeholder);
  },

  assingInnerHTML: function(element, descriptor){
    if(!descriptor.innerHTML) return;

    element.innerHTML = descriptor.innerHTML;
  },

  listenToOnClick: function(element, descriptor){
    if(!(descriptor.onclick)) return;

    element.onclick = descriptor.onclick;
  },

  appendChildren: function(element, descriptor){
    if(!descriptor.children) return;

    descriptor.children.forEach(function(template){
       var child = this.build(template);
      element.appendChild(child);
    }.bind(this));
  }
}
