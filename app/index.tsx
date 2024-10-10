import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect } from 'expo-router'
import Swiper from "react-native-swiper"

export default function Page() {
  const swiperRef = useRef<Swiper>(null);
  
  return <Redirect href="/(auth)/welcome" />
}