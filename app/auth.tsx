import icons from "@/constants/icons";
import image from "@/constants/image";
import { login } from "@/lib/api";
import { useGlobalContext } from "@/lib/global-provider";
import { useMutation } from "@tanstack/react-query";
import { Redirect } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Auth = () => {
  const { refetch, isLoading: authLoading, isLogged } = useGlobalContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: loginMutate, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      login(email, password),
    onSuccess: (result) => {
      if (result) {
        refetch();
      } else {
        Alert.alert("Error", "Failed to login");
      }
    },
    onError: (err: any) => {
      Alert.alert("Error", err?.message || "Unknown login error");
    },
  });

  if (!authLoading && isLogged) return <Redirect href="/" />;

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

          <View className="w-3/4 flex items-center">
            {/* Email */}
            <View className="w-full">
              <Text className="mb-1 text-white">Email</Text>
              <TextInput
                className="border border-gray-300 rounded px-4 py-2 w-full bg-slate-300"
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View className="w-full mx-8">
              <Text className="mb-1 text-white">Password</Text>
              <TextInput
                className="border border-gray-300 rounded px-4 py-2 w-full bg-slate-300"
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />

              <TouchableOpacity
                className={`bg-indigo-500 px-6 py-2 rounded mt-4 flex-row items-center justify-center ${
                  isPending && "opacity-60"
                }`}
                onPress={() => loginMutate({ email, password })}
                disabled={isPending}
              >
                {isPending ? (
                  <ActivityIndicator size="small" />
                ) : (
                  <Text className="text-white font-semibold">Login</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Auth;
