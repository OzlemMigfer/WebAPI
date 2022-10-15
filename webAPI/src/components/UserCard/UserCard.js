import React from "react";
import {Text, View} from 'react-native';
import styles from './UserCard.styles';

const UserCard = props => {
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <View style={styles.inner_container}>
                <Text style={styles.username}>{props.username}</Text>
                <Text style={styles.email}>{props.email}</Text>
            </View>
        </View>
    );
}

export default UserCard;