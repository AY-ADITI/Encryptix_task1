#Encryptix internship TASK1
#HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>General Store</title>
    <link rel="stylesheet" href="index1.css">
</head>
<body>
    <header>
        <h1>Welcome to the General Store</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="products">
            <h2>Available Products</h2>
            <table id="productTable">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Rows will be added by JavaScript -->
                </tbody>
            </table>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 General Store. All rights reserved.</p>
    </footer>

    <script src="index1.js"></script>
</body>
</html>


#CSS
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: rgb(244, 225, 201);
}

header {
  background-color: #333;
  color: white;
  padding: 1rem 0;
  text-align: center;
}

header nav ul {
  list-style: none;
  padding: 0;
}

header nav ul li {
  display: inline;
  margin: 0 1rem;
}

header nav ul li a {
  color: white;
  text-decoration: none;
}

main {
  flex: 1;
  padding: 2rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  
}

table, th, td {
  border: 1px solid black;
}

th, td {
  padding: 1rem;
  text-align: left;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem 0;
}

#Javascript
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
