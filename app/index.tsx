import React from "react";
import { router as jalur } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const bentuk1 = require("../assets/images/bentuk/Bentuk1.png");
  const bentuk2 = require("../assets/images/bentuk/Bentuk2.png");
  const gambar1 = require("../assets/images/ikon/Gambar1.png");
  return (
    <View className="flex-1 items-center justify-center bg-[#6EB7C1] relative">
      <View className="absolute top-0">
        <Image source={bentuk1} className="w-screen h-[400px]" />
      </View>
      <View className="flex items-center justify-center pb-7">
        <Image source={gambar1} className="w-[300px] h-[200px]" />
        <Text
          className="text-white text-3xl text-center font-bold"
          style={{ fontFamily: "Lato_900Black" }}
        >
          Aplikasi BersihKu
        </Text>
        <Text
          className="text-white text-center font-bold mt-4 w-[300px]"
          style={{ fontFamily: "Lato_700Bold" }}
        >
          Mulai Bersih-Bersih dengan BersihKu Pakaian Anda, Tanggung Jawab Kami
        </Text>
        <TouchableOpacity
          className="w-[150px] h-[50px] bg-white rounded-xl mt-8 flex items-center justify-center"
          activeOpacity={0.7}
          onPress={() => jalur.push("/autentikasi")}
        >
          <View className="mx-2">
            <Text
              className="text-[#6EB7C1] font-bold"
              style={{ fontFamily: "Lato_700Bold" }}
            >
              MASUK
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="absolute bottom-0">
        <Image source={bentuk2} className="w-screen h-52" />
      </View>
    </View>
  );
}
