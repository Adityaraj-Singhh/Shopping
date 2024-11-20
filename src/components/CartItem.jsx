
// import {FcDeleteDatabase} from "react-icons/fc"
// import { useDispatch } from "react-redux";
// import { remove } from "../redux/Slices/CartSlice";
// import { toast } from "react-hot-toast";

// const CartItem = ({item, itemIndex}) => {
//   const dispatch = useDispatch();

//   const removeFromCart = () => {
//     dispatch(remove(item.id));
//     toast.success("Item Removed");
//   }

//   return (
//     <div>

//       <div>

//         <div>
//           <img src={item.image} />
//         </div>
//         <div>
//           <h1>{item.title}</h1>
//           <h1>{item.description}</h1>
//           <div>
//             <p>{item.price}</p>
//             <div
//             onClick={removeFromCart}>
//               <FcDeleteDatabase/>
//             </div>
//           </div>

//         </div>


//       </div>

//     </div>
//   );
// };

// export default CartItem;

import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-4 gap-4">
      {/* Image Section */}
      <div className="w-full md:w-1/4 flex justify-center items-center">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-auto max-h-40 object-contain rounded-md"
        />
      </div>

      {/* Details Section */}
      <div className="w-full md:w-3/4 flex flex-col justify-between">
        <div>
          <h1 className="text-lg md:text-xl font-semibold text-gray-800">
            {item.title}
          </h1>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
            {item.description}
          </p>
        </div>
        <div className="flex justify-between items-center mt-4">
          {/* Price */}
          <p className="text-lg font-bold text-green-600">${item.price}</p>

          {/* Remove Button */}
          <button
            onClick={removeFromCart}
            className="flex items-center gap-2 bg-red-100 hover:bg-red-200 text-red-600 px-3 py-2 rounded-md text-sm transition duration-200"
          >
            <FcDeleteDatabase className="text-xl" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
