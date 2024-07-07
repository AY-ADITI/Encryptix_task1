document.addEventListener('DOMContentLoaded', function() {
  const products = [
      { name: 'Apple', category: 'Fruit', price: '$1', stock: '100' },
      { name: 'Bread', category: 'Bakery', price: '$2', stock: '50' },
      { name: 'Milk', category: 'Dairy', price: '$1.5', stock: '30' },
      { name: 'Eggs', category: 'Dairy', price: '$3', stock: '20' },
      { name: 'Banana', category: 'Fruit', price: '$0.5', stock: '150' }
  ];

  const tableBody = document.querySelector('#productTable tbody');

  products.forEach(product => {
      const row = document.createElement('tr');

      const nameCell = document.createElement('td');
      nameCell.textContent = product.name;
      row.appendChild(nameCell);

      const categoryCell = document.createElement('td');
      categoryCell.textContent = product.category;
      row.appendChild(categoryCell);

      const priceCell = document.createElement('td');
      priceCell.textContent = product.price;
      row.appendChild(priceCell);

      const stockCell = document.createElement('td');
      stockCell.textContent = product.stock;
      row.appendChild(stockCell);

      tableBody.appendChild(row);
  });
});
