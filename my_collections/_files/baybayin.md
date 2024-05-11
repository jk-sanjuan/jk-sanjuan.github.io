---
layout: base
title: Discover Baybayin
author: [Leo Emmanuel Castro]
publishing: (St. Matthew's Publishing Corporation) [Kahel Press, 2021]
year: 2021
ISBN: 9789716254549
ISBN10: 9716254512 
ISBN13: 9789716254518
name: "[Leo Emmanuel Castro] Discover Baybayin (St. Matthew's Publishing Corporation. 2021).epub"
format: epub
bank: Meldencio Czarlemagne
cloud: a13ed25824d913ad9f7c0f70489e4566
uploaded_at: April 2, 2024, 1:21 p.m. 
size_readable: 4.8MB
modified: Jan. 14, 2024, 6:13 p.m.
tags: baybayin language Filipino 2021
---
<link rel="stylesheet" type="text/css" href="/assets/css/reader.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js"></script>
<script src="/assets/js/epub.js/dist/epub.min.js"></script>

<div class="block">
  <div>
    <div id="area" class="w-[969px] block h-[670px]">
    
      <select id="toc"></select>
      <div id="viewer" class="spreads"></div>
      <div id="prev" class="arrow">‹</div>
      <div id="next" class="arrow">›</div>
      <script>
        var params = URLSearchParams && new URLSearchParams(document.location.search.substring(1));
        var url = params && params.get("url") && decodeURIComponent(params.get("url"));
        var currentSectionIndex = (params && params.get("loc")) ? params.get("loc") : undefined;
    
        // Load the epub
        window.book = ePub("/assets/books/discover-baybayin.epub");
        var rendition = book.renderTo("viewer", {
          manager: "continuous",
          flow: "paginated",
          width: "100%",
          height: 600
        });
    
        var displayed = rendition.display(currentSectionIndex);
    
    
        displayed.then(function(renderer){
          // -- do stuff
        });
    
        // Navigation loaded
        book.loaded.navigation.then(function(toc){
          // console.log(toc);
        });
    
        book.ready.then(() => {
    
          var next = document.getElementById("next");
    
          next.addEventListener("click", function(e){
            book.package.metadata.direction === "rtl" ? rendition.prev() : rendition.next();
            e.preventDefault();
          }, false);
    
          var prev = document.getElementById("prev");
          prev.addEventListener("click", function(e){
            book.package.metadata.direction === "rtl" ? rendition.next() : rendition.prev();
            e.preventDefault();
          }, false);
    
          var keyListener = function(e){
    
            // Left Key
            if ((e.keyCode || e.which) == 37) {
              book.package.metadata.direction === "rtl" ? rendition.next() : rendition.prev();
            }
    
            // Right Key
            if ((e.keyCode || e.which) == 39) {
              book.package.metadata.direction === "rtl" ? rendition.prev() : rendition.next();
            }
    
          };
    
          rendition.on("keyup", keyListener);
          document.addEventListener("keyup", keyListener, false);
    
        });
    
        rendition.on("selected", function(range) {
          console.log("selected", range);
        });
    
        rendition.on("layout", function(layout) {
          let viewer = document.getElementById("viewer");
    
          if (layout.spread) {
            viewer.classList.remove('single');
          } else {
            viewer.classList.add('single');
          }
        });
    
        rendition.on("relocated", function(location){
          console.log(location);
    
          var next = book.package.metadata.direction === "rtl" ?  document.getElementById("prev") : document.getElementById("next");
          var prev = book.package.metadata.direction === "rtl" ?  document.getElementById("next") : document.getElementById("prev");
    
          if (location.atEnd) {
            next.style.visibility = "hidden";
          } else {
            next.style.visibility = "visible";
          }
    
          if (location.atStart) {
            prev.style.visibility = "hidden";
          } else {
            prev.style.visibility = "visible";
          }
    
        });
    
        book.loaded.navigation.then(function(toc){
          var $select = document.getElementById("toc"),
              docfrag = document.createDocumentFragment();
    
          toc.forEach(function(chapter) {
            var option = document.createElement("option");
            option.textContent = chapter.label;
            option.ref = chapter.href;
    
            docfrag.appendChild(option);
          });
    
          $select.appendChild(docfrag);
    
          $select.onchange = function(){
              var index = $select.selectedIndex,
                  url = $select.options[index].ref;
              rendition.display(url);
              return false;
          };
    
        });
    
      </script>
    </div>
  </div>

  <div class="w-max flex [flex-direction:column] md:[flex-direction:row] md:mx-auto">
    <div class="max-w-[100vw]">
      <img alt="Discover Baybayin" src="/assets/images/book_covers/Discover-Baybayin.png" width="400px"
        class="mx-auto"/>
    </div>
    <main>
      <div class="text md:w-[750px] w-[90vw] ml-[3rem] pr-[2rem]">
        <h2 class="ml-[5rem]">Description:</h2>
        <p class="description bg-gray-200/90 py-4 px-2">
    
          Do you want to learn how to write using baybayin? It is easy to learn this writing system!<br>
          Let this book guide you on how to learn easily how to write and read in baybayin, the ancient writings of the Tagalogs.<br> 
          This book contains the rules and exercises to help you become proficient in using baybayin. <br>
          This book also gives you a short history of writing in other parts of the world and how it influenced <br> 
          the writing systems used here in the Philippines. Aside from that, it also discusses indigenous writing <br>
          as it relates to language and culture. <br><br>
          
          This book is dedicated to all who want to learn how to write and read using baybayin. <br> 
          Let's learn and discover baybayin!
        </p>
      </div>
    </main>  
  </div>
</div>