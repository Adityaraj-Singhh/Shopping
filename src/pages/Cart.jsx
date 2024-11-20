// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import CartItem from "../components/CartItem";




// const Cart = () => {

//   const {cart} = useSelector((state) => state);
//   console.log("Printing Cart");
//   console.log(cart);
//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect( () => {
//     setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
//   }, [cart])

//   return (
//     <div>
//   {
//     cart.length > 0  ? 
//     (<div>


//       <div>
//         {
//           cart.map( (item,index) => {
//             return <CartItem key={item.id} item={item} itemIndex={index} />
//           } )
//         }
//       </div>

//       <div>

//         <div>
//           <div>Your Cart</div>
//           <div>Summary</div>
//           <p>
//             <span>Total Items: {cart.length}</span>
//           </p>
//         </div>

//         <div>
//           <p>Total Amount: ${totalAmount}</p>
//           <button>
//             CheckOut Now
//           </button>
//         </div>

//       </div>


//     </div>) : 
//     (<div>
//       <h1>Cart Empty</h1>
//       <Link to={"/"}>
//         <button>
//           Shop Now
//         </button>
//       </Link>
//     </div>)
//   }
//     </div>
//   );
// };

// export default Cart;
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {cart.length > 0 ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="md:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Summary Section */}
          <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold text-gray-800">Your Cart</h2>
              <p className="text-gray-600">Summary</p>
              <p className="mt-2">
                <span className="font-medium">Total Items:</span>{" "}
                {cart.length}
              </p>
            </div>

            <div>
              <p className="text-lg font-semibold text-gray-800">
                Total Amount:{" "}
                <span className="text-green-600">${totalAmount.toFixed(2)}</span>
              </p>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-medium mt-4">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          <h1 className="text-2xl font-bold text-gray-800">Cart Empty</h1>
          <Link to={"/"}>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium text-sm">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
