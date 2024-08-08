import { router as jalur } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Bentuk1 from "./components/bentuk1";

export default function Index() {
  const gambar1 = require("../../assets/images/ikon/Gambar2.png");
  const hp = require("../../assets/images/ikon/HP.png");
  const google = require("../../assets/images/ikon/Google.png");
  return (
    <View className="flex-1 items-center justify-center bg-white relative">
      <View className="absolute top-0">
        <Bentuk1 />
      </View>
      <View className="flex items-center justify-center pb-36 -z-10">
        <Image source={gambar1} className="w-[300px] h-[300px]" />
      </View>
      <View
        className="absolute bottom-0 w-screen rounded-t-xl bg-white"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <TouchableOpacity
          className="flex-row items-center justify-center w-[22rem] mx-auto border rounded-xl p-2 my-16 gap-5"
          style={{ borderColor: "#012D68" }}
          activeOpacity={0.7}
          onPress={() => jalur.push("/autentikasi/viahp")}
        >
          <Image source={hp} className="w-[30px] h-[30px]" />
          <Text
            className="text-[#012D68] font-bold"
            style={{ fontFamily: "Lato_700Bold" }}
          >
            Masuk Dengan Nomor Ponsel
          </Text>
        </TouchableOpacity>
        <Text
          className="text-[#757575] text-center"
          style={{ fontFamily: "Lato_700Bold" }}
        >
          ATAU
        </Text>
        <TouchableOpacity
          className="flex-row items-center justify-center w-[22rem] mx-auto border rounded-xl p-2 my-16 gap-5"
          style={{ borderColor: "#012D68" }}
          activeOpacity={0.7}
        >
          <Image source={google} className="w-[25px] h-[25px]" />
          <Text
            className="text-[#012D68] font-bold"
            style={{ fontFamily: "Lato_700Bold" }}
          >
            Masuk Dengan Akun Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
