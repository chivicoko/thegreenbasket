import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product2 } from "./types";

export interface CartItem extends Product2 {
  quantity: number;
}

interface EcommerceStore {
  cart: CartItem[];
  wishlist: Product2[];

  /* CART ACTIONS */
  addToCart: (product: Product2) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;

  increaseProductQuantity: (productId: string) => void;
  decreaseProductQuantity: (productId: string) => void;

  getProductQuantity: (productId: string) => number;
  isProductInCart: (productId: string) => boolean;

  totalCartCount: () => number;
  getTotalPrice: () => string;

  /* WISHLIST ACTIONS */
  addToWishlist: (product: Product2) => void;
  removeFromWishlist: (productId: string) => void;
  toggleWishlistBtn: (product: Product2) => void;
  clearWishlist: () => void;

  isProductInWishlist: (productId: string) => boolean;
  totalWishlistCount: () => number;

  /* CROSS FEATURES */
  addWishlistToCart: () => void;
}

export const useEcommerceStore = create<EcommerceStore>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],

      /* ---------------- CART ---------------- */

      addToCart: (product) => {
        const { cart, wishlist } = get();

        if (cart.some((item) => item.id === product.id)) return;

        set({
          cart: [...cart, { ...product, quantity: 1 }],
          wishlist: wishlist.filter((item) => item.id !== product.id),
        });
      },

      removeFromCart: (productId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        }));
      },

      clearCart: () => set({ cart: [] }),

      increaseProductQuantity: (productId) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }));
      },

      decreaseProductQuantity: (productId) => {
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0),
        }));
      },

      getProductQuantity: (productId) => {
        const item = get().cart.find((item) => item.id === productId);
        return item ? item.quantity : 0;
      },

      isProductInCart: (productId) => {
        return get().cart.some((item) => item.id === productId);
      },

      totalCartCount: () => {
        return get().cart.reduce((sum, item) => sum + item.quantity, 0);
      },

      getTotalPrice: () => {
        const total = get().cart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        return total.toFixed(2);
      },

      /* ---------------- WISHLIST ---------------- */

      addToWishlist: (product) => {
        const { wishlist, cart } = get();

        if (wishlist.some((item) => item.id === product.id)) return;
        if (cart.some((item) => item.id === product.id)) return;

        set({
          wishlist: [...wishlist, product],
        });
      },

      removeFromWishlist: (productId) => {
        set((state) => ({
          wishlist: state.wishlist.filter((item) => item.id !== productId),
        }));
      },

      toggleWishlistBtn: (product) => {
        const { wishlist } = get();

        if (wishlist.some((item) => item.id === product.id)) {
          set({
            wishlist: wishlist.filter((item) => item.id !== product.id),
          });
        } else {
          set({
            wishlist: [...wishlist, product],
          });
        }
      },

      clearWishlist: () => set({ wishlist: [] }),

      isProductInWishlist: (productId) => {
        return get().wishlist.some((item) => item.id === productId);
      },

      totalWishlistCount: () => {
        return get().wishlist.length;
      },

      /* -------- MOVE WISHLIST → CART -------- */

      addWishlistToCart: () => {
        const { wishlist, cart } = get();

        const newCartItems: CartItem[] = wishlist
          .filter((item) => !cart.some((c) => c.id === item.id))
          .map((item) => ({
            ...item,
            quantity: 1,
          }));

        set({
          cart: [...cart, ...newCartItems],
          wishlist: [],
        });
      },
    }),
    {
      name: "ecommerce-storage",
      partialize: (state) => ({
        cart: state.cart,
        wishlist: state.wishlist,
      }),
    }
  )
);