import { useState } from "react"
import { View,Image, StatusBar, Alert } from "react-native"


import { Input } from "@/components/input"
import { Button } from "@/components/button"

import { MaterialCommunityIcons } from "@expo/vector-icons"

import { colors } from "@/styles/colors"
import { Link } from "expo-router"

export default function Home(){

    const [code, setCode] = useState("")

    function handleAccessCredential(){
        if(!code.trim()){
            return Alert.alert("Credencial","Informe o codigo do ingresso!")
        }
    }

    return(
        <View className="flex-1 bg-green-500 items-center justify-center">
            <StatusBar barStyle="light-content"/>

            <Image 
                source={require("@/assets/logo.png")} 
                className="h-16" 
                resizeMode="contain"
            />

            <View className="w-full mt-12 gap-3">
                <Input>
                    <MaterialCommunityIcons name="ticket-confirmation-outline" size={20} color={colors.green[200]}/>
                    <Input.Field placeholder="Codigo do Ingresso" onChangeText={setCode}/>
                </Input>

                <Button title="Acessar Credencial" onPress={handleAccessCredential}/>

                <Link href="/register" className="text-gray-100 text-base font-bold text-center mt-8">
                    Ainda não possuí ingresso?
                </Link>
            </View>
        </View>
    )
}