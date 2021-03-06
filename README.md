# Classify
The Classify JavaScript library consist of functions that interact with HTMLElement and a little CSS parser.

## Core
The core consists of operations on `HTMLElement`s. For simplicity, the library let the user choose their own `HTMLElement` selectors.

Since the original goal of Classify was to make operations on the class attribute, much of its components are about class manipulations. Next features would be certainly about other kinds of manipulations.

## ParseCSS
The second part of the library consists of a CSS properties parser (“`CSSParser`”). The passed String is usually a `CSSStyleDeclaration` (style attribute). It gives functions that find a property value, set a property and remove a property.

### Usage
Given a CSS property list:
```CSS
display: block; color: black; background-color: cyan; text-align-center
```

Someone can create a CSSParser as follow:
```javascript
var cssProperties = 'display: block; color: black; background-color: cyan; text-align-center';
var parser = new CSSParser(cssProperties);
```

To **find the presence** of a CSS property, the `getProperty` method may be used:
```javascript
// getProperty return -1 if not found
if (parser.getProperty('display') === -1) {
    console.log('display property found in the list');
}
else {
    console.log('display property wans’t found in the list');
}
```

To **get the value** of a CSS property, the `getProperty` method is used:
```javascript
// show variable equals 'block'
var show = parser.getProperty('display');
```

To **set the value** of a CSS property, the `setProperty` method is used:
```javascript
// the display property now is 'inline'
var status = parser.setProperty('display', 'inline');
```

## FAQ
Q. Why reinvent the wheel? There are already many frameworks like jQuery that are fast and simpler!

A. Although many frameworks exist, most of them are too hungry for what they do. The jQuery selector is at least 2x slower than the native one. Most DOM operations can be done in pure JavaScript with better browser compatibility. Frameworks may be good for productivity, but becomes bloatware with time.
Furthermore, this library was created to teach JavaScript usage without frameworks.
