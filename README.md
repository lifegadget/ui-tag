# [ui-tag](https://github.com/lifegadget/ui-tag)
> lovely tags (and pills) for your Ember apps

## Install

At a terminal window:

```sh
ember install ui-tag
```

This will load an **npm** version of the Bootstrap 4.0 library but only include the styling that is needed to render
a "pill" or a "label". If you're not using the `ember-cli-sass` addon then it will fall back to including the CSS as just
CSS. In this situation you are done, styling should be immediately available.

If you _are_ using SASS, then you'll need to include add `@import 'ui-tag';` to your `app.scss` stylesheet. If you want to change any of the bootstrap variables -- like colors, etc. -- then do this before you include the _import_ directive.

## Demo

For documentation and an interactive demo head over to: [demo site](https://ui-tag.firebaseapp.com/)

## License

Copyright (c) 2016 LifeGadget Ltd

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
