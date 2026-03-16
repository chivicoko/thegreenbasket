"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { toast } from "sonner";
import { useEcommerceStore } from "../../../product-store";

const CheckoutPage = () => {
  const router = useRouter();

  const { cart, getTotalPrice, getProductQuantity, clearCart } = useEcommerceStore();

  const [paymentMethod, setPaymentMethod] = useState("card");

  const shippingFee = 1500;
  const subtotal = getTotalPrice();
  const total = Number(subtotal) + Number(shippingFee);

  const handlePlaceOrder = () => {
    toast.promise(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            clearCart();
            resolve("done");
            router.push("/");
          }, 1200);
        }),
      {
        loading: "Processing order...",
        success: "Order placed successfully 🎉",
        error: "Something went wrong",
      }
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">

      <h1 className="text-3xl font-bold text-primary mb-10">
        Checkout
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-8">

          {/* Delivery Info */}
          <Card>
            <CardHeader>
              <CardTitle>Delivery Information</CardTitle>
            </CardHeader>

            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <Label>First Name</Label>
                <Input placeholder="John" />
              </div>

              <div>
                <Label>Last Name</Label>
                <Input placeholder="Doe" />
              </div>

              <div className="md:col-span-2">
                <Label>Email</Label>
                <Input placeholder="john@email.com" />
              </div>

              <div className="md:col-span-2">
                <Label>Phone</Label>
                <Input placeholder="+234 000 000 0000" />
              </div>

              <div className="md:col-span-2">
                <Label>Delivery Address</Label>
                <Input placeholder="Street address" />
              </div>

              <div>
                <Label>City</Label>
                <Input placeholder="Benin City" />
              </div>

              <div>
                <Label>Postal Code</Label>
                <Input placeholder="300001" />
              </div>

            </CardContent>
          </Card>

          {/* Payment */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
            </CardHeader>

            <CardContent>

              <RadioGroup
                defaultValue="card"
                onValueChange={(value: string) => setPaymentMethod(value)}
              >

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card">Credit / Debit Card</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="transfer" id="transfer" />
                  <Label htmlFor="transfer">Bank Transfer</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label htmlFor="cod">Cash on Delivery</Label>
                </div>

              </RadioGroup>

              {paymentMethod === "card" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                  <div className="md:col-span-2">
                    <Label>Card Number</Label>
                    <Input placeholder="0000 0000 0000 0000" />
                  </div>

                  <div>
                    <Label>Expiry</Label>
                    <Input placeholder="MM/YY" />
                  </div>

                  <div>
                    <Label>CVV</Label>
                    <Input placeholder="123" />
                  </div>

                </div>
              )}

            </CardContent>
          </Card>

        </div>

        {/* RIGHT SIDE */}
        <div>

          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">

              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between"
                >

                  <div className="flex items-center gap-3">

                    <div className="relative w-14 h-14">
                      <Image
                        src={
                          product.thumbnail ??
                          "/images/imagePlaceholder.jpeg"
                        }
                        alt={product.title}
                        fill
                        className="rounded object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-medium">
                        {product.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Qty: {getProductQuantity(product.id)}
                      </p>
                    </div>

                  </div>

                  <p className="font-semibold">
                    ₦{product.price}
                  </p>

                </div>
              ))}

              <hr />

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₦{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₦{shippingFee}</span>
              </div>

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₦{total}</span>
              </div>

              <Button
                className="w-full mt-4 bg-secondary hover:bg-secondary_hover text-primary font-bold uppercase cursor-pointer"
                onClick={handlePlaceOrder}
                disabled={cart.length === 0}
              >
                Place Order
              </Button>

            </CardContent>
          </Card>

        </div>

      </div>
    </div>
  );
};

export default CheckoutPage;