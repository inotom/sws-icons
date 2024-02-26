# sws-icons

A web components to display the status indicator.


## Demo

[Demo](https://sandbox.serendip.ws/sws-icons.html)


### sws-cross

#### Usage

Place `sws-cross` custom element.

```html
<sws-cross></sws-cross>
<script type="module" src="sws-icons.umd.js" defer></script>
```

Set element's style etc... by css custom properties.

```css
sws-cross {
  --sws-cross-position: relative;
  --sws-cross-size: 24px;
  --sws-cross-color: currentColor;
  --sws-cross-line-weight: 2px;
  --sws-cross-line-border-radius: 0;
  --sws-cross-transition: transform .3s;
  --sws-cross-horizontal-line-deg: 0deg;
  --sws-cross-vertical-line-deg: 90deg;
}
```


### sws-hamburger

#### Usage

Place `sws-hamburger` custom element.

```html
<sws-hamburger></sws-hamburger>
<script type="module" src="sws-icons.umd.js" defer></script>
```

Set element's style etc... by css custom properties.

```css
sws-hamburger {
  --sws-hamburger-display: flex;
  --sws-hamburger-flex-direction: column;
  --sws-hamburger-justify-content: center;
  --sws-hamburger-align-items: center;
  --sws-hamburger-gap: 0;
  --sws-hamburger-position: relative;
  --sws-hamburger-width: 60px;
  --sws-hamburger-height: var(--sws-hamburger-width);
  --sws-hamburger-padding: 10px;
  --sws-hamburger-fg-color: currentColor;
  --sws-hamburger-bg-color: initial;
  --sws-hamburger-lines-bg-color: initial;
  --sws-hamburger-line-align: center;
  --sws-hamburger-line-weight: 3px;
  --sws-hamburger-line-margin: 10px;
  --sws-hamburger-line-border-radius: 0;
  --sws-hamburger-line-transition: transform .3s;
  --sws-hamburger-line-1-opacity: 1;
  --sws-hamburger-line-2-opacity: 1;
  --sws-hamburger-line-3-opacity: 1;
  --sws-hamburger-line-1-width: 100%;
  --sws-hamburger-line-2-width: 100%;
  --sws-hamburger-line-3-width: 100%;
  --sws-hamburger-line-1-color: var(--sws-hamburger-fg-color);
  --sws-hamburger-line-2-color: var(--sws-hamburger-fg-color);
  --sws-hamburger-line-3-color: var(--sws-hamburger-fg-color);
  --sws-hamburger-line-1-transform: translateY(
    calc((var(--sws-hamburger-line-weight) + var(--sws-hamburger-line-margin)) * -1)
  );
  --sws-hamburger-line-2-transform: initial;
  --sws-hamburger-line-3-transform: translateY(
    calc(var(--sws-hamburger-line-weight) + var(--sws-hamburger-line-margin))
  );
  --sws-hamburger-label-width: 100%;
  --sws-hamburger-label-bg-color: initial;
}
```


### sws-angle

#### Usage

Place `sws-angle` custom element.

```html
<sws-angle></sws-angle>
<script type="module" src="sws-icons.umd.js" defer></script>
```

Set element's style etc... by css custom properties.

```css
sws-angle {
  --sws-angle-position: relative;
  --sws-angle-size: 30px;
  --sws-angle-color: currentColor;
  --sws-angle-triangle-color: none;
  --sws-angle-line-weight: 2px;
  --sws-angle-transform: none;
  --sws-angle-transform-origin: 50% 50% 0;
  --sws-angle-transition: transform .3s;
}
```


## License

MIT


## Author

inotom
