import { Image, Text, TouchableOpacity, View, TextInput } from "react-native";

export default function Index() {
  const bentuk1 = require("../../assets/images/bentuk/Bentuk1.png");
  const gambar1 = require("../../assets/images/ikon/Gambar1.png");
  const gambar2 = require("../../assets/images/ikon/Bendera.png");
  return (
    <View className="flex-1 items-center justify-center bg-[#6EB7C1] relative">
      <View className="absolute top-0">
        <Image source={bentuk1} className="w-screen h-[400px]" />
      </View>
      <View className="flex items-center justify-center pb-28">
        <Image source={gambar1} className="w-[300px] h-[200px]" />
      </View>
      <View className="absolute bottom-0 w-screen rounded-t-xl bg-white shadow-xl">
        <View className="my-14">
          <Text
            className="text-[#6EB7C1] ml-7 font-bold"
            style={{ fontFamily: "Lato_900Black" }}
          >
            Masukan Nomor Telepon Anda
          </Text>
          <View className="flex-row gap-4 mx-auto -mt-8">
            <View className="border border-[#6EB7C1] rounded-xl flex items-center justify-center w-[50px] h-[50px] mt-10">
              <Image source={gambar2} className="w-5 h-5" />
            </View>
            <TextInput
              className="w-[250px] h-[50px] bg-white rounded-xl mt-10 border p-5 text-[#6EB7C1]"
              placeholder="Masukkan Nomor HP"
              placeholderTextColor={"#6EB7C1"}
              style={{ fontFamily: "Lato_700Bold", borderColor: "#6EB7C1" }}
              inputMode="numeric"
            />
          </View>
          <Text
            className="text-[#6EB7C1] ml-7 text-[12px]"
            style={{ fontFamily: "Lato_700Bold" }}
          >
            Mengamankan data pribadi anda adalah prioritas kami.
          </Text>
        </View>

        <TouchableOpacity
          className="flex-row items-center justify-center w-[22rem] mx-auto border rounded-xl p-2 my-16 gap-5"
          style={{ borderColor: "#6EB7C1" }}
          activeOpacity={0.7}
        >
          <Text
            className="text-[#6EB7C1] font-bold"
            style={{ fontFamily: "Lato_700Bold" }}
          >
            Selanjutnya
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
