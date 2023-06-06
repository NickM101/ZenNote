import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import { GlobalStyles } from '@styles';
import back from "@images/back.png";import search from "@images/search.png";
import { Divider, OutlinedButton, NavigationButton } from '@components';
import TitleComponent from './TitleComponent';
import EmptyNotes from './empty_notes';
import useNotesStore from '../../config/store';

const BrowseNotes = ({ navigation }) => {
    const [data, setData] = React.useState([
        {id: 1, description: 'This is an example of a description of the note with less words displayed', title: 'True Lies', date: '12-03-2023'},
        {id: 2, description: 'This is an example of a description of the note with less words displayed', title: 'The Flash', date: '12-03-2023'},
        {id: 3, description: 'This is an example of a description of the note with less words displayed', title: 'Superman and Lois', date: '12-03-2023'},
        {id: 4, description: 'This is an example of a description of the note with less words displayed', title: 'Windows 11', date: '12-03-2023'},
      ]);

      const savedNotes = useNotesStore(state => state.notes);

      console.log('Saved Notes ---- savedNotes', savedNotes);
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: true,
          headerTitleAlign: "center",
          title: 'Browse Notes',
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
            description={item.description}
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
          data={[]}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListFooterComponent={footerComponent}
          ListHeaderComponent={<View style={{marginVertical: 10}} />}
          contentContainerStyle={{ paddingHorizontal: 12 , justifyContent: 'center'}}
          ListEmptyComponent={<EmptyNotes />}
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