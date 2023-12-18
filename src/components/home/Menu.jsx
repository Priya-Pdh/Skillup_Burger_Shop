// Write all the code here
import React from 'react';
import MenuCard from './MenuCard'; 

const Menu = () => {
  // Sample menu items data
  const menuItems = [
    {
      id: 1,
      imageSrc: '../../assets/burger1.png',
      title: 'Burger Deluxe',
      price: 9.99,
    },
    {
      id: 2,
      imageSrc: '../../assets/burger2.png',
      title: 'Cheeseburger',
      price: 8.49,
    },
    {
      id: 3,
      imageSrc: '../../assets/burger3.png',
      title: 'Max Burger',
      price: 7.55,
    }
  ];

  // Function handler for adding to cart
  const addToCartHandler = (item) => {
    // Implement your logic for adding the item to the cart
    console.log(`Added ${item.title} to the cart`);
  };

  return (
    <div>
      <h2>Explore Menu</h2>
      <div>
        {menuItems.map((item) => (
          <MenuCard
            key={item.id}
            itemNumber={item.id}
            imageSrc={item.imageSrc}
            title={item.title}
            price={item.price}
            onAddToCart={() => addToCartHandler(item)}
            animationDelay={item.id * 100} // Adjust the delay based on your animation preferences
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
