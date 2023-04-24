// Blue print for Product
class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;

    constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    addToCart() {
        console.log('Taking this adorable doggo home...');
        console.log(this.product);
    }

    render() {
        const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div>
                    <img src="${this.product.imageUrl}" alt="${this.product.title}" >
                    <div class="product-item__content">
                        <h2>${this.product.title}</h2>
                        <h3>\$${this.product.price}</h3>
                        <p>${this.product.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;
            const addCartButton = prodEl.querySelector('button');
            addCartButton.addEventListener('click', this.addToCart.bind(this));
            return prodEl;
    }
}

class ProductList {
    products = [
        new Product(
            'Corgi',
            '/assets/images/Corgi_Shop.jpeg',
            'A loaf of bread',
            19.99
        ),
        new Product(
            'Great Dane',
            '/assets/images/greatDane_Shop.jpeg',
            'Lapdog extraordinaire',
            24.94
        ),
        new Product(
            'Chihuahua', 
            '/assets/images/chihuahua_Shop.jpeg',
            'Best house protection on the market',
            14.98
        ),
    ];

    constructor() {}

    render() {
      const renderHook = document.getElementById('app');
      const prodList = document.createElement('ul');
      prodList.className = 'product-list';
      for (const prod of this.products) {
        const productItem = new ProductItem(prod);
        const prodEl = productItem.render();
        prodList.append(prodEl);
      }
      renderHook.append(prodList);
    }
  }
  
  const productList = new ProductList();
  productList.render();