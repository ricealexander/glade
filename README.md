# Glade

Grove is a Content Management System commissioned by NPR for use by NPR Member Stations.

The Glade library adds utilities for development of custom front-end JavaScript solutions within the Grove CMS.



## Glade Core

Glade's features center around different challenges in Grove. Glade dispatches a custom event `grove-navigation` whenever it detects that the page has changed.

Glade base functions can be separated into a few categories:


### Dynamic Style/Script insertion

* `insertCSS` allows for CSS contained within a string to be dynamically loaded on a page.
* `insertStylesheet` allows for a stylesheet to be dynamically loaded on a page.
* `insertScript` allows for an external JavaScript file to be dynamically loaded on a page.

Each of these scripts has an option whether or not it should persist when the user navigates to another page in Grove and returns a reference to the new element.


### Making unsafe JavaScript safe

* `addIsolatedEventListener` is a wrapper so that Event Listeners placed on the window, body, or header in Grove can be destroyed on navigation.
* `setIsolatedInterval` is a wrapper so that Intervals created with setInterval can be destroyed on navigation.


### Other helper functions

* `getDataLayer` formats the page/story information contained within the `brightspot-dataLayer` meta tag in a way that is easy to use.
* `pageMatches` is a tool that allows for pattern matching in page URLs. This can be useful for loading dynamic scripts based on the page URL.
* `components` creates Grove lists populated with custom data.



## Glade Plugins

Glade has a plugin system for running custom code. These can run any function of Glade as well as any function in `lib`.



### Repository Structure
```
glade/
├── .vscode/
│   ├── extensions.json          · recommended VSCode Extensions
│   └── settings.json            · project-specific VSCode Settings
│
├── dist/glade.js                · minified library
│
├── lib/                         · helper functions for project (private)
├── plugins/                     · plugin system
├── source/
├── index.js                     · entry point for library
│
├── .browserslistrc              · browser support settings for plugins
├── .editorconfig                · editor-agnostic settings
├── .eslintrc.js                 · JavaScript Linting (ESLint)
├── .gitignore                   · file patterns to exclude from repository
├── gruntfile.js                 · entry point for build process
├── package-lock.json
├── package.json
└── README.md                    · project description - YOU ARE HERE
```
