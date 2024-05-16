import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full justify-center items-center px-4">
          <Image
            source={images.logo}
            className="w-[150px] h-[75px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[350px] w-full h-[300px]"
            resizeMode=""
          />
          <View className="relative mt-5">
            <Text className="text-white text-3xl font-bold text-center">
              Discover Endless Possibilities wtih {""}
              <Text className="text-secondary-200">Aora!</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[150px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-gray-100 text-center font-pregular text-sm mt-7">
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>
          <CustomButton
            title="Continue with EMail"
            handlePress={() => router.push("/sign-in")}
            containerStyle="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
