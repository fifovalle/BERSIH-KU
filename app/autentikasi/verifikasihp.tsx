import { useState, useRef } from "react";
import { Image, Text, TouchableOpacity, View, TextInput } from "react-native";

export default function VerifikasiHP() {
  const bentuk1 = require("../../assets/images/bentuk/Bentuk1a.png");
  const gambar1 = require("../../assets/images/ikon/Gambar4.png");
  const [nilaiMasukan, aturNilaiMasukan] = useState<string[]>(["", "", "", ""]);

  const masukanRef = useRef<(TextInput | null)[]>([]);

  const atasiPerubahanMasukan = (indeks: number, nilai: string) => {
    const masukanBaru = [...nilaiMasukan];
    masukanBaru[indeks] = nilai;
    aturNilaiMasukan(masukanBaru);

    if (nilai && indeks < masukanRef.current.length - 1) {
      masukanRef.current[indeks + 1]?.focus();
    }
    if (!nilai && indeks > 0) {
      masukanRef.current[indeks - 1]?.focus();
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-[#fff] relative">
      <View className="absolute top-0">
        <Image source={bentuk1} className="w-screen h-[400px]" />
      </View>
      <View className="flex items-center justify-center pb-36 -z-10">
        <Image source={gambar1} className="w-[300px] h-[300px]" />
      </View>
      <View className="absolute bottom-0 w-screen rounded-t-xl bg-white shadow-xl">
        <View className="my-14">
          <Text
            className="text-[#012D68] ml-7 font-bold"
            style={{ fontFamily: "Lato_900Black" }}
          >
            Kode telah dikirim ke +6281223652490
          </Text>
          <View className="flex-row gap-4 mx-auto -mt-8">
            {nilaiMasukan.map((nilai, indeks) => (
              <View
                key={indeks}
                className="border border-[#012D68] rounded-xl flex items-center justify-center w-[50px] h-[50px] mt-10"
                style={{
                  backgroundColor: nilai ? "#012D68" : "#FFFFFF",
                }}
              >
                <TextInput
                  ref={(ref) => (masukanRef.current[indeks] = ref)}
                  className="text-center"
                  style={{
                    fontFamily: "Lato_700Bold",
                    borderColor: "#012D68",
                    color: nilai ? "#FFFFFF" : "#000000",
                  }}
                  inputMode="numeric"
                  cursorColor={"#012D68"}
                  onChangeText={(text) => atasiPerubahanMasukan(indeks, text)}
                  maxLength={1}
                  value={nilai}
                />
              </View>
            ))}
          </View>
          <Text
            className="text-[#012D68] ml-7 text-[12px]"
            style={{ fontFamily: "Lato_700Bold" }}
          >
            Kirim ulang kode
          </Text>
        </View>
        <TouchableOpacity
          className="flex-row items-center justify-center w-[22rem] mx-auto border rounded-xl p-2 my-16 gap-5"
          style={{ borderColor: "#012D68" }}
          activeOpacity={0.7}
        >
          <Text
            className="text-[#012D68] font-bold"
            style={{ fontFamily: "Lato_700Bold" }}
          >
            Verifikasi Kode
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
