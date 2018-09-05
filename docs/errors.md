# Latsuj with node.js

## Some errors that I learn on this project

### The useless ++

The first line actually does not work as expected and I dont know why for the moment...

```
this.positionSlider = this.positionSlider+1<this.article.images.length ? this.positionSlider++ : 0;

this.positionSlider = this.positionSlider+1<this.article.images.length ? this.positionSlider+1 : 0;
```