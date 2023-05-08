import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import { GlobalStyles } from '@styles';
import back from "@images/back.png";import search from "@images/search.png";
import { Divider, OutlinedButton, NavigationButton } from '@components';
import TitleComponent from './TitleComponent';

const BrowseNotes = ({ navigation }) => {
    const [data, setData] = React.useState([
        {id: 1, title: 'True Lies', date: '12-03-2023'},
        {id: 2, title: 'The Flash', date: '12-03-2023'},
        {id: 3, title: 'Superman and Lois', date: '12-03-2023'},
        {id: 4, title: 'Windows 11', date: '12-03-2023'},
      ]);

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: true,
          headerTitleAlign: "center",
          title: 'Edit Note',
          headerLeft: () => <NavigationButton image={back} onPress={() => navigation.goBack()} />,
          headerRight: () => <NavigationButton image={search} back={false} onPress={() => navigation.goBack()} />,
          headerTitleStyle:{...GlobalStyles.buttonText},
          headerShadowVisible: false
        });
      }, [navigation]);

      const handleNavigation = (id) => {
        // Handle navigation to the details screen based on the item ID
        navigation.navigate('NewNote')
      };
    
      const renderItem = ({item}) => {
        return (
          <TitleComponent
            onPress={() => handleNavigation(item.id)}
            title={item.title}
            date={item.date}
          />
        );
      };

      const keyExtractor = (item) => item.id.toString();

      const footerComponent = () => {
        return (
            <View style={styles.footer}>
            
            <Divider />
            <OutlinedButton title={'New Note'} onPress={() => navigation.navigate('NewNote')}/>
            </View>
        );
      }

  return (
   <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListFooterComponent={footerComponent}
          ListHeaderComponent={<View style={{marginVertical: 10}} />}
    />
    </SafeAreaView>
  )
}

export default BrowseNotes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    footer: {
        alignItems: 'center'
    }
})