import icons from "@/constants/icons";
import image from "@/constants/image";
import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Auth = () => {
  const handleLogin = async () => {};

  return (
    <ImageBackground
      source={image.background}
      resizeMode="cover"
      className="flex-1 bg-black"
    >
      <SafeAreaView className="flex-1 bg-opacity-60 px-6 justify-center">
        <View className="items-center space-y-6">
          <Image
            source={icons.logo}
            className="w-32 h-32"
            resizeMode="contain"
          />

          <Text className="text-white text-2xl font-bold tracking-wide text-center">
            Welcome to <Text className="text-primary-300">CineVerse</Text>
          </Text>

          <Text className="text-base text-white text-center opacity-80 my-6">
            Discover the latest movies, trailers, and reviews – all in one app.
          </Text>

          <TouchableOpacity
            onPress={handleLogin}
            className="border border-indigo-500 rounded-full p-4 mt-4 shadow-lg"
          >
            <View className="flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-white text-base font-medium ml-2">
                Sign in with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default Auth;
