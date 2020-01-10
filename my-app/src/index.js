import React, { useState, useEffect } from "react";
import { View, Text } from "native-base";



export default function HomeScreenRouter(){ 

   useEffect(() => {
     console.log("executado quando o componente montou")
   })

   const [idade, setIdade ] = useState(18)
    return(
        <View >
      <Text>Muito Importanta</Text>
      <Text>{idade}</Text>
    </View>
    )
} 
