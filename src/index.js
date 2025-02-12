import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const mycart =  [];
const wishlist = [];

const item1 = await createItem('item1', 10.99, 2);
const item2 = await createItem('item2', 23.74, 3);

await cartService.addItem(mycart, item1);
await cartService.addItem(mycart, item2);

await cartService.removeItem(mycart, item1);


await cartService.displayCart(mycart);


// await cartService.DeletItem(mycart, item1.name);
// await cartService.DeletItem(mycart, item1.name);

console.log("total:")
await cartService.getTotal(mycart); 


