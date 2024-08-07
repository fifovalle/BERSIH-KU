import React from "react";
import { Stack } from "expo-router";
import { Lato_900Black, Lato_700Bold, useFonts } from "@expo-google-fonts/lato";
import "../global.css";

export default function RootLayout() {
  const [apakahFontsSudahDiLoad] = useFonts({
    Lato_900Black,
    Lato_700Bold,
  });

  if (!apakahFontsSudahDiLoad) return null;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="autentikasi" />
    </Stack>
  );
}
