import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const bentuk1 = require("../../assets/images/bentuk/Bentuk1.png");
  const gambar1 = require("../../assets/images/ikon/Gambar1.png");
  const hp = require("../../assets/images/ikon/HP.png");
  const google = require("../../assets/images/ikon/Google.png");
  return (
    <View className="flex-1 items-center justify-center bg-[#6EB7C1] relative">
      <View className="absolute top-0">
        <Image source={bentuk1} className="w-screen h-[400px]" />
      </View>
      <View className="flex items-center justify-center pb-28">
        <Image source={gambar1} className="w-[300px] h-[200px]" />
      </View>
      <View className="absolute bottom-0 w-screen rounded-xl bg-white shadow-xl">
        <TouchableOpacity
          className="flex-row items-center justify-center w-[22rem] mx-auto border rounded-t-xl p-2 my-16 gap-5"
          style={{ borderColor: "#6EB7C1" }}
          activeOpacity={0.7}
        >
          <Image source={hp} className="w-[30px] h-[30px]" />
          <Text
            className="text-[#6EB7C1] font-bold"
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
          style={{ borderColor: "#6EB7C1" }}
          activeOpacity={0.7}
        >
          <Image source={google} className="w-[25px] h-[25px]" />
          <Text
            className="text-[#6EB7C1] font-bold"
            style={{ fontFamily: "Lato_700Bold" }}
          >
            Masuk Dengan Akun Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
