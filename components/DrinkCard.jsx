import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import Image from "next/image";

export default function CardItem({ drink }) {
  const [quantity, setQuantity] = useState(1);

  function handleDecreaseQuantity() {
    setQuantity((prevState) => prevState - 1);
  }

  function handleIncreaseQuantity() {
    setQuantity((prevState) => prevState + 1);
  }

  return (
    <div className="bg-red-kokumi bg-opacity-10 backdrop-filter backdrop-blur-[2.5px] rounded-md mt-20 rounded-tr-3xl rounded-bl-3xl relative flex flex-col gap-6 items-center p-5">
      <Image
        src={drink.image}
        alt=""
        width={120}
        height={120}
        className="-mt-24"
        priority
      />
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-center font-bold text-xl text-base-sub-title">
          {drink.name}
        </h3>
        <p className="text-center font-normal text-base text-base-label">
          {drink.desc}
        </p>
      </div>

      <div className="flex gap-2 items-center ">
        <p className="mr-3 text-base-text text-lg font-extrabold">
          {drink.price} $ETH
        </p>
        <div className="flex items-center justify-around p-1 w-16 h-10 bg-white rounded-lg">
          <button
            className="text-base text-violet-700 p-1 transition-all duration-300 hover:text-black"
            onClick={handleDecreaseQuantity}
          >
            <Minus className="text-red-kokumi" />
          </button>
          <span className="text-base text-base-title">{quantity}</span>
          <button
            className="text-base text-violet-700 p-1 transition-all duration-300 hover:text-black"
            onClick={handleIncreaseQuantity}
          >
            <Plus className="text-red-kokumi" />
          </button>
        </div>

        <div>
          <button className="bg-red-kokumi rounded-md w-9 h-9 flex justify-center items-center transition-all duration-300 hover:bg-red-500">
            <ShoppingCart weight="fill" className="text-white text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
