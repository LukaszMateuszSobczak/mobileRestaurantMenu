import { menuArray } from './data.js';

const createProducts = (productArray) => {
    return productArray
        .map((obj) => {
            return `
            <section class="product" data-product-id="${obj.id}">
                <p class="product-img">${obj.emoji}</p>
                <div class="product-description">
                    <p class="product-name">${obj.name}</p>
                    <p class="product-ingredients">${obj.ingredients.join(
                        ', '
                    )}</p>
                    <p class="product-price">$${obj.price}</p>
                </div>
                <button class="product-add-cart" data-id="${
                    obj.id
                }">&#65122</button>
            </section>
            <div class="line"></div>
        `;
        })
        .join('');
};

document.querySelector('#products-list-el').innerHTML =
    createProducts(menuArray);

const cartArray = [];

document.addEventListener('click', (e) => {
    if (e.target.dataset.id) {
        cartArray.push(
            menuArray.find((obj) => {
                return String(obj.id) === e.target.dataset.id;
            })
        );
    }

    console.log(cartArray);
});
