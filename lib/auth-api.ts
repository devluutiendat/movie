import { User } from "@/types/user";
import * as SecureStore from "expo-secure-store";

export async function login (email: string, password: string ): Promise<boolean> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const fakeUser = {
      email: "luutiendat03112003@gmail.com",
      password: "1",
      accessToken: "fake_access_token_abc123",
    };

    if (email === fakeUser.email && password === fakeUser.password) {
      await SecureStore.setItemAsync("authToken", fakeUser.accessToken);
      return true;
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    console.error("Login failed:", error);
    return false;
  }
}

export async function logout(): Promise<void> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await SecureStore.deleteItemAsync("authToken");
    console.log("User logged out. Token removed.");
  } catch (error) {
    console.error("Failed to log out:", error);
  }
}

export async function getCurrentUser():Promise<User|null> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const token = await SecureStore.getItemAsync("authToken");

    if (!token) {
      return null; 
    }

    const fakeUser = {
      $id: "1",
      name: "Dat",
      email: "test@example.com",
    };

    return fakeUser;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}
