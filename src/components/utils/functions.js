const shorten = (title) => {
  const shorted = title.split(" ");
  const newTitle = `${shorted[0]} ${shorted[1]}...`;
  return newTitle;
};

const sumItems = (items) => {
  const itemsCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );

  let totalPrice = items
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

  return { itemsCounter, totalPrice };
};

const quantityCount = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectedItems[index].quantity;
  }
};

// const isInCart = (state, id) => {
//     const result = !!state.selectedItems.find(item => item.id === id)
//     return result;
// }

const isInCart = (state, id) => {
  const result = !!state.selectedItems.find((item) => item.id === id);
  return result;
};

export { shorten, sumItems, quantityCount, isInCart };
