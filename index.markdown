---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <title>Bayanihan OpenLibrary</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Bayanihan Library">
  <meta name="author" content="Meldencio Czarlemagne" />

  <!--- Project-wide CSS -->
  <link href="/assets/css/project.css" rel="stylesheet" />
  <!--- 
    Latest compiled and minified CSS
    Add TailwindCSS generated stylesheet to base template
  -->
  
  <link href="/assets/css/tailwind.css" rel="stylesheet" />
  <style>
    .sun-icon {
      background-image: url('/assets/images/biomew/sun.svg');
    }
    .bc-icon {
      background-image: url('/assets/images/biomew/BC_colored.png');
    }
    .ol-icon {
      background-image: url('/assets/images/biomew/OL_colored.png');
    }
    .ol-bp-icon {
      background-image: url('/assets/images/biomew/OL_BP.png');
    }
  </style>

</head>
<body class="h-[100vh] grid [grid-template-rows:0fr_auto]">

  <div class="container -mx-2 sticky top-0 z-10 flex justify-between items-center bg-blue-900 
       min-w-[1200px] sm:min-w-[1200px] lg:min-w-[1520px] 2xl:min-w-[1720px]">
    <header class="w-full flex-[1_0_content] flex justify-between items-center">
      <img src="/assets/images/biomew/sun.svg" class="flex-shrink-0 ml-6 w-[70px] h-[70px] my-4
          hover:animate-spin bg-sz-64 bg-no-repeat" alt="Sun">
      <div class="flex-[1_0_content] ml-0 cursor-pointer">
        <span class="text-3xl font-semibold text-yellow-600 hover:text-yellow-500 djvu-serif-bold">Bayanihan OpenLibrary</span>
      </div>
    </header>
    {% include navigator-items.html %}
  </div>

  {% include home.html %}
    <!--- comment 
    Script tags with only code, no src (defer by default). To run
    with a "defer" so that you run inline code:
    -->
  {% include footer.html %}
</body>
</html>