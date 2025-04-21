import { GetBasketResponse } from "@/app/types";
import CheckoutButton from "./checkout-button";
import Link from "next/link";

const CartSummary = ({ cart }: GetBasketResponse) => {
  return (
    <div className="lg:w-1/3">
      <div className="bg-white rounded-lg shadow overflow-hidden p-6 sticky top-4">
        <h2>Sipariş Özeti</h2>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-gray-600">
            <span>Ürünler Toplamı</span>
            <span>{cart.totalAmount}₺</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Kargo</span>
            <span>Bedava</span>
          </div>

          <div className="border-t border-gray-200 pt-3 mt-3">
            <div className="flex justify-between font-bold text-lg">
              <span>Toplam</span>
              <span>{cart.totalAmount}₺</span>
            </div>
          </div>
        </div>

        <CheckoutButton />

        <Link
          href="/"
          className="block text-center mt-4 text-green-600 hover:underline"
        >
          Alışverişe Devam Et
        </Link>
      </div>
    </div>
  );
};

export default CartSummary;
