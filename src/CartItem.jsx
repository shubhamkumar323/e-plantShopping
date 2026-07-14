// Calculate total amount for all products in the cart
const calculateTotalAmount = () => {
  return cart
    .reduce((total, item) => {
      return total + parseFloat(item.cost.substring(1)) * item.quantity;
    }, 0)
    .toFixed(2);
};

const handleContinueShopping = (e) => {
  e.preventDefault();
  onContinueShopping();
};
const handleCheckoutShopping = (e) => {
  alert("Functionality to be added for future reference");
};


const handleIncrement = (item) => {
  dispatch(
    updateQuantity({
      name: item.name,
      quantity: item.quantity + 1,
    })
  );
};

const handleDecrement = (item) => {
  if (item.quantity > 1) {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity - 1,
      })
    );
  } else {
    dispatch(removeItem({ name: item.name }));
  }
};

const handleRemove = (item) => {
  dispatch(removeItem({ name: item.name }));
};

// Calculate total cost based on quantity for an item
const calculateTotalCost = (item) => {
  return (
    parseFloat(item.cost.substring(1)) * item.quantity
  ).toFixed(2);
};