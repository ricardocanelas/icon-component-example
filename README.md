This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a simple example of how you can create your own icon component.

See the examples here - https://ricardocanelas.github.io/icon-component-example

## <Icon>

| props           | type   | -                        |
| --------------- | ------ | ------------------------ |
| name (required) | string | -                        |
| defaultName     | string | -                        |
| color           | string | -                        |
| fill            | string | -                        |
| direction       | string | top, right, bottom, left |
| size            | number | -                        |
| svgClassName    | string | -                        |
| svgStyle        | string | -                        |

<br/>

**EXAMPLES**

```html
<Icon name="Logo" color="red" />
<Icon name="Logo" color="blue" size="{74}" />

<Icon name="ArrowRight" />
<Icon name="ArrowRight" color="blue" />
<Icon name="ArrowRight" color="white" fill="blue" />
<Icon name="ArrowRight" color="white" fill="blue" size="{48}" />
<Icon name="ArrowRight" color="white" fill="blue" direction="top" />
```

<br/>

**NOTES**

The props `color` and `fill` will only work if you set the props in the svg file correctly.

Here we have a example:

<!-- prettier-ignore -->
```html
<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274..." fill=""/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 12.0009..." fill="currentColor"/>
</svg>
```

| react component | matches in SVG      |
| --------------- | ------------------- |
| color           | fill="currentColor" |
| fill            | fill=""             |

Maybe there's another well. If exist, let me know about it creating an new issue in this repository.
