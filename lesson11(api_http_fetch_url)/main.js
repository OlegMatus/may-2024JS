// ---------1-----------
// fetch('https://dummyjson.com/carts', {
//     method: 'GET',
//     headers: {'Content-Type': 'application/json'},
// })
//     .then(response => response.json())
//     .then(cartsObject => {
//             const {carts} = cartsObject;
//             carts.forEach((cart) => {
//                 const cartsDiv = document.createElement('div');
//                 const {id, products, total, discountedTotal, userId, totalProducts, totalQuantity} = cart;
//                 cartsDiv.innerHTML = `
// <p>id: ${id}</p>
// <p>total: ${total}</p>
// <p>discountedTotal: ${discountedTotal}</p>
// <p>userId: ${userId}</p>
// <p>totalProducts: ${totalProducts}</p>
// <p>totalQuantity: ${totalQuantity}</p>
// `;
//                 const productsList = document.createElement('ul');
//                 products.forEach((product) => {
//                     const hr = document.createElement('hr');
//
//                     for (const key in product) {
//                         const liProducts = document.createElement('li');
//                         liProducts.innerText = `${key}: ${product[key]}`;
//                         productsList.append(liProducts,hr)
//                     }
//                     document.body.append(productsList,cartsDiv);
//                 });
//             })
//         }
//     );
// -------------2-----------
fetch('https://dummyjson.com/recipes', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
})
    .then(response => response.json())
    .then(recipesObject => {
        const {recipes} = recipesObject;

        recipes.forEach((recipe) => {
            const recipeDiv = document.createElement('div');
            const img = document.createElement('img');
            img.src = recipe.image;

            recipeDiv.innerHTML = `
            <p><b>Id:</b> ${recipe.id}</p>
            <p><b>Name:</b> ${recipe.name}</p>
            <p><b>Instructions:</b> ${recipe.instructions}</p>
            <p><b>PrepTimeMinutes:</b> ${recipe.prepTimeMinutes}</p>
            <p><b>CookTimeMinutes:</b> ${recipe.cookTimeMinutes}</p>
            <p><b>Cuisine:</b> ${recipe.cuisine}</p>
            `;

            recipeDiv.appendChild(img);

            const ol = document.createElement('ol');
            ol.innerHTML = '<b>Ingredients:</b>'
            recipe.ingredients.map((ingredient) => {
                const li = document.createElement('li');
                li.innerHTML = `${ingredient}`;
                ol.appendChild(li)
                document.body.append(ol);
            })
            document.body.appendChild(recipeDiv)
        })
    })