import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Save = () => {
  return (
    <SafeAreaView className="bg-primary flex-1 px-10">
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Ionicons name="save" size={20} color={"black"} />
        <Text className="text-gray-500 text-base">Save</Text>
        <Link href={"/"}>ddddd</Link>
      </View>
    </SafeAreaView>
  );
};

export default Save;
