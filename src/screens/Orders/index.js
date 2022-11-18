import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./style";
import OrdersCard from "../../components/OrdersCard";
const Orders = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container_search}>
        <View style={styles.container_header} flexDirection="row">
          <View style={styles.container_header_text}>
            <Text style={styles.header_text_name}>Good morning Victoria</Text>
            <Text style={styles.header_text}>Let's find your drink</Text>
          </View>
          <View style={styles.container_header_input}>
            <Text>image</Text>
          </View>
        </View>
        <TextInput
          style={styles.text_input}
          placeholder="Search for drinks"
        ></TextInput>
      </View>
      <View style={styles.orders_items}>
        <OrdersCard />
      </View>
    </View>
  );
};

export default Orders;
