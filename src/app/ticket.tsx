import { StatusBar, View, Text, ScrollView, TouchableOpacity} from "react-native";
import { FontAwesome} from "@expo/vector-icons"

import { Header } from "@/components/header";
import { Credential } from "@/components/credential";
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";

export default function Ticket(){
    return(
        <View className="flex-1 bg-green-500">
            <StatusBar barStyle="light-content"/>
            <Header title="Minha Credencial"/>
            <ScrollView className="-mt-28 -z-10" contentContainerClassName="px-8 pb-8" showsVerticalScrollIndicator={false}>
                <Credential image="https://github.com/Fabricio-Weber.png"/>

                <FontAwesome name="angle-double-down" 
                    color={colors.gray[300]}
                size={24}
                className="self-center my-6"
                />
                    
                <Text className="text-white font-bold text-2xl mt-4">
                    Compartilhar crendencial
                </Text>

                <Text className="text-white font-regular text-base mt-1 mb-6">
                    Mostre ao mundo que voce vai participar do Unite Summit
                </Text>

                <Button title="Compartilhar" />

                <TouchableOpacity activeOpacity={0.7} className="mt-10">
                    <Text className="text-base text-white font-bold text-center mt-4">Remover Ingresso</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
       
    )
}