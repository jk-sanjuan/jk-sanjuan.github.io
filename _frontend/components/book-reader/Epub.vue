<template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js"></script>
<script src="../../assets/js/epub.js/dist/epub.min.js"></script>

<div id="epub-reader-view">
  <div id="area" class="">

    <div id="viewer" class="spreads"></div>
    <div id="prev" class="arrow">‹</div>
    <div id="next" class="arrow">›</div>

    <script>
      const bookUrl = "/assets/books/discover-baybayin.epub";

      var params = URLSearchParams && new URLSearchParams(document.location.search.substring(1));
      var url = params && params.get("url") && decodeURIComponent(params.get("url")) || bookUrl;
      var currentSectionIndex = (params && params.get("loc")) ? params.get("loc") : undefined;

      // Load the epub
      window.book = ePub(url);
      var rendition = book.renderTo("viewer", {
        manager: "continuous",
        flow: "paginated",
        width: "100%",
        height: 450
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
          if ((e.keyCode || e.which) === 37) {
            book.package.metadata.direction === "rtl" ? rendition.next() : rendition.prev();
          }

          // Right Key
          if ((e.keyCode || e.which) === 39) {
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
        let area = document.getElementById("area");
        let prev = document.getElementById("prev");
        let next = document.getElementById("next");

        if (layout.spread) {
          viewer.classList.remove('single');
        } else {
          viewer.classList.add('single');
        }
        area.classList.add("-top-[236px]");
        area.classList.add("md:top-[10px]");
        area.classList.add("left-[12px]");
        area.classList.add("[transform:rotate(90deg)_scale(0.7)_translateX(50%)]");
        area.classList.add("md:[transform:rotate(0deg)_scale(1)]");
        area.classList.add("[position:relative]");
        area.classList.add("[position:relative]");
        prev.classList.add("md:!left-[4%]");
        prev.classList.add("xl:!left-[8%]");
        next.classList.add("md:!left-[94%]");
        next.classList.add("xl:!left-[90%]");
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
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
const readerViewHeight = ref(0);
const readerViewWidth = ref(0);

onMounted(() => {
  readerViewHeight.value = document.getElementById('epub-reader-view')!.clientHeight;
  readerViewWidth.value = document.getElementById('epub-reader-view')!.clientWidth;
})
</script>

<style lang="scss" scoped>

#title {
  width: 900px;
  min-height: 18px;
  margin: 10px auto;
  text-align: center;
  font-size: 16px;
  color: #E2E2E2;
  font-weight: 400;
}

#title:hover {
  color: #777;
}

#viewer.spreads {
  width: 900px;
  height: 470px;
  box-shadow: 0 0 4px #ccc;
  border-radius: 5px;
  padding: 0;
  position: relative;
  margin: 10px auto;
  top: 17px;
}

#viewer.spreads .epub-view > iframe {
    background: white;
}

#viewer.scrolled {
  overflow: hidden;
  width: 800px;
  margin: 0 auto;
  position: relative;
  box-shadow: 0 0 4px #ccc;
  padding: 20px;
  background: white;
}

#viewer.scrolled .epub-view > iframe {
    background: white;
}

#prev {
  left: 0;
}

#next {
  width: 0;
  right: 0;
}

#toc {
  display: block;
  margin: 10px auto;
}

@media (min-width: 300px) {
  #viewer.spreads:after {
    position: absolute;
    width: 1px;
    border-right: 1px #000 solid;
    height: 90%;
    z-index: 1;
    left: 50%;
    margin-left: -1px;
    top: 5%;
    opacity: .15;
    box-shadow: -2px 0 15px rgba(0, 0, 0, 1);
    content:  "";
  }

  #viewer.spreads.single:after {
    display: none;
  }

  #prev {
    left: 2px;
  }

  #next {
    left: 875px;
  }
}

.arrow {
  position: fixed;
  top: 315px;
  margin-top: -20px;
  font-size: 64px;
  color: #E2E2E2;
  font-family: arial, sans-serif;
  font-weight: bold;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  text-decoration: none;
}

.navlink {
  margin: 14px;
  display: block;
  text-align: center;
  text-decoration: none;
  color: #ccc;
}

.arrow:hover, .navlink:hover {
  color: #777;
}

.arrow:active, .navlink:hover {
  color: #000;
}

#book-wrapper {
  width: 480px;
  height: 640px;
  overflow: hidden;
  border: 1px solid #ccc;
  margin: 28px auto;
  background: #fff;
  border-radius: 0 5px 5px 0;
  position: absolute;
}

#book-viewer {
  width: 480px;
  height: 660px;
  margin: -30px auto;
  -moz-box-shadow:      inset 10px 0 20px rgba(0,0,0,.1);
  -webkit-box-shadow:   inset 10px 0 20px rgba(0,0,0,.1);
  box-shadow:           inset 10px 0 20px rgba(0,0,0,.1);
}

#book-viewer iframe {
  padding: 40px 40px;
}

#controls {
  position: absolute;
  bottom: 16px;
  left: 50%;
  width: 400px;
  margin-left: -200px;
  text-align: center;
  display: none;
}

#controls > input[type=range] {
    width: 400px;
}

#navigation {
  width: 450px;
  height: 100px;
  position: absolute;
  overflow: auto;
  top: 0;
  left: 0;
  background: #777;
  -webkit-transition: -webkit-transform .25s ease-out;
  -moz-transition: -moz-transform .25s ease-out;
  -ms-transition: -moz-transform .25s ease-out;
  transition: transform .25s ease-out;

}

#navigation.fixed {
  position: fixed;
}

#navigation h1 {
  width: 200px;
  font-size: 16px;
  font-weight: normal;
  color: #fff;
  margin-bottom: 10px;
}

#navigation h2 {
  font-size: 14px;
  font-weight: normal;
  color: #B0B0B0;
  margin-bottom: 20px;
}

#navigation ul {
  padding-left: 36px;
  margin-left: 0;
  margin-top: 12px;
  margin-bottom: 12px;
  width: 340px;
}

#navigation ul li {
  list-style: decimal;
  margin-bottom: 10px;
  color: #cccddd;
  font-size: 12px;
  padding-left: 0;
  margin-left: 0;
}

#navigation ul li a {
  color: #ccc;
  text-decoration: none;
}

#navigation ul li a:hover {
  color: #fff;
  text-decoration: underline;
}

#navigation ul li a.active {
  color: #fff;
}

#navigation #cover {
  display: block;
  margin: 24px auto;
}

#navigation #closer {
  position: absolute;
  top: 0;
  right: 0;
  padding: 12px;
  color: #cccddd;
  width: 24px;
}

#navigation.closed {
  -webkit-transform: translate(-400px, 0);
  -moz-transform: translate(-400px, 0);
  -ms-transform: translate(-400px, 0);
  transform: translate(-400px, 0);
}

svg {
  display: block;
}

.close-x {
  stroke: #cccddd;
  fill: transparent;
  stroke-linecap: round;
  stroke-width: 5;
}

.close-x:hover {
  stroke: #fff;
}

#opener {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  stroke: #E2E2E2;
  fill: #E2E2E2;

}

#opener:hover {
  stroke: #777;
  fill: #777;
}
</style>