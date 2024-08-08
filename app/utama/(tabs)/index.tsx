import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function index() {
  const bentuk1 = require("../../../assets/images/bentuk/Bentuk1.png");
  const fotoPengguna = require("../../../assets/images/ikon/foto1.png");
  const mesinCuci = require("../../../assets/images/ikon/mesinCuci.png");
  const setrika = require("../../../assets/images/ikon/setrika.png");
  const cuciKering = require("../../../assets/images/ikon/cuciKering.png");
  const jait = require("../../../assets/images/ikon/jait.png");

  return (
    <View className="flex-1 items-center justify-center bg-[#fff] relative">
      <View className="absolute top-0 bg-[#012D68] h-[28rem] w-screen rounded-b-2xl">
        <Image source={bentuk1} className="w-screen h-[400px] -mb-60" />
        <View className="ml-4">
          <Image source={fotoPengguna} className="w-[30px] h-[30px]" />
          <Text
            className="text-white text-sm mt-2"
            style={{ fontFamily: "Lato_700Bold" }}
          >
            Selamat Datang Kembali Di Bersihku
          </Text>
          <Text
            className="text-white text-2xl font-bold"
            style={{ fontFamily: "Lato_900Black" }}
          >
            Naufal FIFA
          </Text>
        </View>
        <View className="flex-row flex-wrap">
          <TouchableOpacity
            className="bg-[#fff] mx-auto w-[145px] h-[170px] mt-10 flex items-center justify-center rounded-xl"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
            activeOpacity={0.7}
          >
            <Image source={mesinCuci} className="w-[85px] h-[85px]" />
            <Text
              className="text-[#012D68] font-bold text-sm mt-2"
              style={{ fontFamily: "Lato_900Black" }}
            >
              Cuci & Setrika
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#fff] mx-auto w-[145px] h-[170px] mt-10 flex items-center justify-center rounded-xl"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
            activeOpacity={0.7}
          >
            <Image source={setrika} className="w-[85px] h-[85px]" />
            <Text
              className="text-[#012D68] font-bold text-sm mt-2"
              style={{ fontFamily: "Lato_900Black" }}
            >
              Setrika
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#fff] mx-auto w-[145px] h-[170px] mt-10 flex items-center justify-center rounded-xl"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
            activeOpacity={0.7}
          >
            <Image source={cuciKering} className="w-[85px] h-[85px]" />
            <Text
              className="text-[#012D68] font-bold text-sm mt-2"
              style={{ fontFamily: "Lato_900Black" }}
            >
              Cuci Kering
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#fff] mx-auto w-[145px] h-[170px] mt-10 flex items-center justify-center rounded-xl"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
            activeOpacity={0.7}
          >
            <Image source={jait} className="w-[85px] h-[85px]" />
            <Text
              className="text-[#012D68] font-bold text-sm mt-2"
              style={{ fontFamily: "Lato_900Black" }}
            >
              Penjaitan
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
