//quais ações o carrinho pode fazer
//adicionar item, deletar item, remover item, calcula o total

async function addItem (userCart, item) {
    userCart.push(item);
}

async function getTotal (userCart) {
    console.log(userCart.reduce((total, item) => total + item.subtotal(), 0));
}

async function DeletItem (userCart, name) {
    const index = userCart.findIndex(item => item.name === name); 

    if (index != -1){
        userCart.splice(index, 1);
    }
}

async function removeItem (userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    if (indexFound == -1) {
        console.log("Item not found");
        return;
    }else if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }else if (userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
        return;
    }
}

async function displayCart (userCart) {
    console.log("cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ${item.price} - qt:${item.quantity} | subtotal: ${item.subtotal()}`);
    });
}

export {
    addItem,
    getTotal,
    DeletItem,
    removeItem,
    displayCart,
}
