# Example of Photoshop UXP Plugin that shows how to develop multi-panel with Vanilla JS

developing multi-UXP-Panel with Vanilla JS is bit tricky.
so I show you how to develop it.

## summary

1. write about panels on manifest.

2. call entrypoints.setup method on JS and register panels you declared on manifest.

3. on HTML any element only appeared on the panel you declared first.
   you can't see anything on other panels.

4. adding HTML element on body element through JS won't work as you image as well.

5. adding uxp-panel Web Component on HTML and writing inside of It or each panel can receive their own scope element.
see more detaills on this example.

## Reference

Pklaschka showed me uxp-panel Web Component.
see the link below

[creativeclouddeveloper forum](https://forums.creativeclouddeveloper.com/t/manifest-5-2-panels-in-same-plugin/6673/4)
