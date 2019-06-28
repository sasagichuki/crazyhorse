
# Color

The colors in our palette stem from the reliability of our product and the authenticity of our team. They enhance the user’s experience, from the connection we make through marketing to the way they engage with our product.

# Primary Colors 

The primary colors are the core, used to define our brand. They should be used predominately to portray Help Scout throughout the app and in marketing our product.

```color
value: '#FF4612'
name: 'd.light Orange'
span: 2
```

```color
value: '#606060'
name: 'Grey'
span: 1
```

```color
value: '#ccc'
name: 'Light Grey'
span: 1
```

```color
value: '#F7F788'
name: 'Highlight'
span: 1
```


# Secondary Colors 

The secondary palette allows us to push our boundries, while staying within the consistency of our brand guides. The secondary colors should be used to distinguish our products, allowing them to be unique but still remain a part of our family.

```color-palette|horizontal
colors:
   - {value: "#000"}
   - {value: "#0ee"}
   - {value: "#0ff"}
   - {value: "#099"}
   - {value: "#088"}
   - {value: "#077"}
   - {value: "#066"}
   - {value: "#055"}
   - {value: "#044"}
   - {value: "#033"}
   - {value: "#022"}
```

```code
collapsed: true
lang: js
---
.<section id="section-name" class="accordion">
  <h3 class="accordion-title">Accordion group heading (optional)</h3>
  <div class="accordion-group">
    <div class="accordion-heading">
      <a href="#collapseOne" class="accordion-toggle active" data-toggle="collapse" data-parent="#section-name">This link will toggle the accordion</a>
    </div><!--/accordion-heading-->
    <div id="collapseOne" class="accordion-body collapse in">
      <div class="accordion-inner">
        <p>Content goes here</p>
      </div><!--/accordion-inner-->
    </div><!--/accordion-body-->
  </div><!--/accordion-group-->
  <div class="accordion-group">
    <div class="accordion-heading">
      <a href="#collapseTwo" class="accordion-toggle" data-toggle="collapse" data-parent="#section-name">This link will toggle the accordion</a>
    </div><!--/accordion-heading-->
    <div id="collapseTwo" class="accordion-body collapse">
      <div class="accordion-inner">
        <p>Content goes here</p>
      </div><!--/accordion-inner-->
    </div><!--/accordion-body-->
  </div><!--/accordion-group-->
</section><!--/accordion-->
<script>
$(function() {
  $('.accordion').on('show', function (e) {
    $(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('active');
  });
  $('.accordion').on('hide', function (e) {
    $(this).find('.accordion-toggle').not($(e.target)).removeClass('active');
  });
});
</script>
```


