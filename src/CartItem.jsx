// Calculate total amount for all products in the cart
const calculateTotalAmount = () => {
  return cart.reduce((total, item) => {
    return total + parseFloat(item.cost.replace("$", "")) * item.quantity;
  }, 0).toFixed(2);
};

const handleContinueShopping = (e) => {
  e.preventDefault();
  onContinueShopping();
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
  }
};

const handleRemove = (item) => {
  dispatch(removeItem({ name: item.name }));
};

// Calculate total cost based on quantity for an item
const calculateTotalCost = (item) => {
  return (
    parseFloat(item.cost.replace("$", "")) * item.quantity
  ).toFixed(2);
};