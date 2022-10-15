import React, {useState,useEffect} from "react";
import {ActivityIndicator, Button, FlatList, Text, View} from 'react-native';
import axios from "axios";
import UserCard from "./components/UserCard/UserCard";

function App(){
  const[userList, setUserList] = useState([]);
  const[loading, setLoading]=useState(true);
  const URL = 'https://jsonplaceholder.typicode.com/users';
  const renderUser = ({item}) => (<UserCard name={item.name} username={item.username} email={item.email} />);

  async function fetchData(){
    //async&await promise çözümleme
    const response = await axios.get(URL);
    setLoading(false);
    setUserList(response.data);

    //then&catch promise çözümleme
    axios.get(URL).then(response => {
      setLoading(false);
      setUserList(response.data);
    });
  }

  //Uygulama çalışır çalışmaz verileri getirir-bekletmez
  useEffect(() => {
    fetchData();
  });

  return(
    <View>
      {
        loading ? (<ActivityIndicator size="large"/>) : (<FlatList data={userList} renderItem={renderUser}/>)
      }    
      <Button title="fetch data" onPress={fetchData}/>
    </View>
  );
}

export default App;