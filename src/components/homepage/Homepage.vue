<template>
  <div>
    <carousel></carousel>
    <products-list-container></products-list-container>
  </div>
</template>

<script>
import ProductsListContainer from '../products_list/ProductsListContainer';
import CarouselSection from '../carousel/Carousel';

export default {
  name: 'homepage-component',
  components: {
    'products-list-container': ProductsListContainer,
    'carousel': CarouselSection
  }
};
</script>
