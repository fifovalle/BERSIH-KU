import { Image } from "react-native";
import { Tabs } from "expo-router";

export default function _layout() {
  const berandaAktif = require("../../../assets/images/ikon/BerandaAktif.png");
  const pesananAktif = require("../../../assets/images/ikon/pesananAktif.png");
  const pesanan = require("../../../assets/images/ikon/pesan.png");
  const notifikasiAktif = require("../../../assets/images/ikon/notifikasiAktif.png");
  const profilAktif = require("../../../assets/images/ikon/profilAktif.png");
  const berandaTidakAktif = require("../../../assets/images/ikon/BerandaTidakAktif.png");
  const pesananTidakAktif = require("../../../assets/images/ikon/pesananTidakAktif.png");
  const notifikasiTidakAktif = require("../../../assets/images/ikon/notifikasiTidakAktif.png");
  const profilTidakAktif = require("../../../assets/images/ikon/profilTidakAktif.png");
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          paddingHorizontal: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? berandaAktif : berandaTidakAktif}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="pesanan"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? pesananAktif : pesananTidakAktif}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="pesan"
        options={{
          tabBarIcon: () => (
            <Image source={pesanan} style={{ width: 55, height: 55 }} />
          ),
          tabBarItemStyle: { marginBottom: 50 },
        }}
      />
      <Tabs.Screen
        name="notifikasi"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? notifikasiAktif : notifikasiTidakAktif}
              style={{ width: 30, height: 30 }}
            />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? profilAktif : profilTidakAktif}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
