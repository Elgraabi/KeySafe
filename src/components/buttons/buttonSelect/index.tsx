import { Switch, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

export default function ButtonSelect() {
    const [isSelected, setIsSelected] = useState(false);

    const toggleSelection = () => {
        setIsSelected((prevState) => !prevState);
    };

    return (
        <View style={styles.container}>
            <View style={styles.switchContainer}>
                <Switch
                    value={isSelected}
                    onValueChange={toggleSelection}
                    trackColor={{ false: "#767577", true: "#0d3071" }} 
                    thumbColor={isSelected ? "#fff" : "#f4f3f4"} 
                    
                    style={styles.switch} 
                />
                <Text style={styles.text}>
                    {isSelected ? "Manter Conectado" : "Manter Conectado"}
                </Text>
            </View>
        </View>
    );
}