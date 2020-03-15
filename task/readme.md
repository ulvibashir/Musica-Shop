## The task

Create an online shop page.

In order to do this, you will have to supplement the project created in the previous assignment [homework1](../homework1/readme.md).

#### Technical requirements:
- Make an array with a collection of products that are sold in the online shop
- Each product must contain the following data:
  - Name
  - Price
  - Path to the image (url in the web or a path to the file in the  `public` folder)
  - Product number (any number)
  - Colour
  - There must be at least 10 products. The topic of the shop can be anything.
  - Put the array in the JSON file which will be stored in the `public` folder of your project.
- Get the data from the array of products using AJAX, write them to the local state of the main page component
- Output the product list to the page. The design can be taken from the included [PSD](./musica.psd) file ( the `LATEST ARRIVALS IN MUSICA` section) or you can use a custom one. 
- The product card and the list of products must be separate components.
- A modal window should appear confirm the added product upon pressing the `Add to cart` button (Use the corresponding component from  [homework1](../homework1/readme.md).
- Each product card must have a star icon with the possibility to add the corresponding product to favourites. If the star icon was clicked - it changes colour.
- When a product was added to the cart/favourites - the changes must be saved in the localstorage.
- The project can be styled with JSS or SCSS.
- All components must be created as ES6 classes.
- The page must have only one page at this point - the main one with the list of products. 
