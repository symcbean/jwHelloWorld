##jWHelloWorld##
This is a simple implementation of a [JokuWiki](https://github.com/symcbean/jokuwiki) plugin.

Note that unlike other Dokuwiki plugin, *no php code is required*. The Javascript is invoked via the jokuwiki framework. To use in a Dokuwiki page, just install the plugin (and jokuwiki) then add the following markup to your page:

```
<jw name='jwHelloWorld'
      id='greetingDiv' style='width:100px;height=40px' noscript='Javascript is disabled'
      data='{ "say" : "Hello World" , "speaker" : "SyMcBean" }'
  ></jw>
```

The code adds Javascript and CSS to render callouts on the page as speech bubbles.

The `say` element is required and appears inside the speech bubble. The `speaker` is optional and appears under the bubble.

This requires Dokuwiki with the Jokuwiki plugin to run. The Jokuwiki plugin
is available from the same site where you got this code.

Note that Dokuwiki automatically merges CSS and Javascript - so adding lots 
of Jokuwiki plugins will have minimal impact opn your page performance.
