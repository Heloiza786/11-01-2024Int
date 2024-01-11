import axios from "axios";
import React from "react";
import { useState } from "react";
import apiUsuario from "../../services/Rotas/apiUsuario";
import { StyleSheet, Text, View, TouchableOpacityProps, SafeAreaView, TouchableOpacity } from 'react-native';



type UserType = {
  name: string;
  lastName: string;
  cpf: string;
  email: string;
  horario: string;
  pelagem: string;
  especie: string;
  raca: string;
};

type CardProps = {
  title: string;
  data: UserType[];
};

 function Card({data, ...rest} : CardProps){
    return(
        <View>
            {data.map((item) => {
                return(
                    <View style={styles.container}>
                        <Text>{item.name}</Text>
                        <Text>{item.lastName}</Text>
                        <Text>{item.cpf}</Text>
                        <Text>{item.email}</Text>
                        <Text>{item.horario}</Text>
                        <Text>{item.pelagem}</Text>
                        <Text>{item.especie}</Text>
                        <Text>{item.raca}</Text>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dcdcdc',
    borderRadius: 45,
    padding: 10,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginBottom: 10,
  },
  property: {
    marginBottom: 5,
  },
});

export default Card;