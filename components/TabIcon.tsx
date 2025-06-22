import image from "@/constants/image";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground, Text, View } from "react-native";

export default function TabIcon({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
}) {
  if (focused) {
    return (
      <ImageBackground
        source={image.ranking}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Ionicons name={icon} size={20} color="#151312" />
        <Text className="text-secondary text-base font-semibold ml-2">
          {title}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Ionicons name={icon} size={20} color="#A8B5DB" />
    </View>
  );
}
