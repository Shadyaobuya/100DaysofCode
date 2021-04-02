//a program that creats an object myCart and gives it properties and functionality

var myCart={                                                //store the items that can be bought in the cart in an array
    fruits:["mango", "orange", "pineapple","apple"],          //declare property quantity and initialise it to 0
    quantity:0,                                             //initialise the quantity property to 0
                                                    
    addToCart(addedItem){                                   //declare function addToCart to add items in the cart                             //

        totalItems=this.quantity+addedItem;

        console.log("The total items in the cart is "+totalItems);
    
    },
    removeFromCart(removedItem){                          //declare function removeFrom Cart to remove items from cart

        totalItems=totalItems-removedItem;
        console.log("The total items in the cart is "+totalItems);
    
    },
    calculatePrice(fruitName){                               //declare function to calculate the price of the items in the cart
        this.fruits.forEach((fruit) => {                  //loop through each item in the array
            
            
            if ((fruit&&fruitName)==="mango"){                      //loops through first fruit in array
               var totalCost=30*totalItems;
            console.log("The total cost of mangoes bought is "+totalCost);    
            
         }
         else if ((fruit&&fruitName)==="orange"){                   //loops through second fruit in array
            totalCost=20*totalItems;
            console.log("The total cost of oranges bought is "+totalCost);
        }

        else if ((fruit&&fruitName)==="pineapple"){                                   //loops through third fruit in array
           totalCost=50*totalItems;
          console.log("The total cost of pineapple bought is "+totalCost);
         }
        else if((fruit&&fruitName)==="apple"){                                    //loops through fourth fruit in array
            totalCost=30*totalItems;                                                                                                                                                                                                                                                                                                                                                              
       
           console.log("The total cost of apples bought is "+totalCost);
        }
        else{
                   console.log("This item does not exist in the cart");
               }
    
   
        }

        )}
    }
         

myCart.addToCart(5
    );   //call method addToCart
myCart.removeFromCart(2);    //call method removeFromCart 
myCart.calculatePrice("banana");   //call method calculatePrice




