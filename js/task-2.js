function getShippingMessage(country, price, deliveryFree) {
  return `Shipping to ${country} will cost ${price + deliveryFree} credits`;
}

console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));
