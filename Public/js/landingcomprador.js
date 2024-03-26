const filterButtons = document.querySelectorAll('.filtros-Categorias button');
const productList = document.querySelector('.productos');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedCategory = button.dataset.categoria;
    productList.querySelectorAll('.producto').forEach(product => {
      const productCategory = product.dataset.categoria;
      if (selectedCategory == 'all' || selectedCategory == productCategory) {
        product.classList.remove('hidden');
      } else {
        product.classList.add('hidden');
      }
    });
  });
});