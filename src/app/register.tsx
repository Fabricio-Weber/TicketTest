import { View,Image, StatusBar, Alert } from "react-native"



import { Input } from "@/components/input"
import { Button } from "@/components/button"

import {MaterialIcons, FontAwesome6} from "@expo/vector-icons"

import { colors } from "@/styles/colors"
import { Link, router } from "expo-router"
import { useState } from "react"

export default function Home(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    function handleRegister(){
        if(!name.trim() || !email.trim()){
            return Alert.alert("Inscrição", "Preencha todos os campos!")
        }

        router.push("/ticket")
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
                    <FontAwesome6
                    name="user-circle" 
                    size={20} 
                    color={colors.green[200]}/>
                    <Input.Field placeholder="Nome Completo" onChangeText={setName}/>
                </Input>

                <Input>
                    <MaterialIcons 
                    name="alternate-email" 
                    size={20} 
                    color={colors.green[200]}/>
                    <Input.Field placeholder="E-mail" keyboardType="email-address" onChangeText={setEmail}/>
                </Input>

                <Button title="Realizar Inscrição" onPress={handleRegister}
                />

                <Link href="/" className="text-gray-100 text-base font-bold text-center mt-8">
                    Já possuí ingresso?
                </Link>
            </View>
        </View>
    )
}