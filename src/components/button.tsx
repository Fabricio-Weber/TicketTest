import { TouchableOpacity, TouchableOpacityProps, Text, ActivityIndicator} from "react-native"

type Props= TouchableOpacityProps &{
    title: string
    isLoading?: boolean
}

export function Button({ title, isLoading = false, ...rest }: Props ){
    return(
        <TouchableOpacity
        activeOpacity={70} 
        disabled={isLoading}
        className="rounded-lg"
        {...rest}>
            {
            isLoading?  (<ActivityIndicator className="text-green-500"/>
            ) : (
            <Text className="w-full h-14 p-3 gap-3 text-green-500 text-base text-center font-bold uppercase  bg-orange-500 rounded-lg ">{title}
            </Text>)
            }
       </TouchableOpacity>
    )
}