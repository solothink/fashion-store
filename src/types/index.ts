export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

export interface User {
  id: number;
  username: string;
  password: string;
}

export interface Purchase {
  userId: number;
  productId: number;
  purchaseDate: string;
}

export interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}