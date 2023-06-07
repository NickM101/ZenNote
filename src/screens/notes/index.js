import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import { GlobalStyles } from '@styles';
import back from "@images/back.png";import search from "@images/search.png";
import { Divider, OutlinedButton, NavigationButton } from '@components';
import TitleComponent from './TitleComponent';
import EmptyNotes from './empty_notes';
import useNotesStore from '../../config/store';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { uid } from '../../config/utils/helper';

const BrowseNotes = ({ navigation }) => {
      const savedNotes = useNotesStore(state => state.notes);

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: true,
          headerTitleAlign: "center",
          title: 'Browse Notes',
          headerLeft: () => <NavigationButton image={back} onPress={() => navigation.navigate('Home')} />,
          headerRight: () => <NavigationButton image={search} back={false} onPress={() =>  Toast.show({
            type: 'info',
            text1: "Feature Unavailable",
            text2: "This feature is currently not available. Please check back later.",
            position: "bottom",
            bottomOffset: 20
          })} />,
          headerTitleStyle:{...GlobalStyles.buttonText},
          headerShadowVisible: false
        });
      }, [navigation]);

      const handleNavigation = (item) => {
        navigation.push('PreviewNote', { ...item, read_only: true, })
      };
    
      const renderItem = ({item}) => {
        return (
          <TitleComponent
            onPress={() => handleNavigation(item)}
            title={item.title}
            date={item.createdOn}
          />
        );
      };

      const keyExtractor = (item) => item.id;

      const footerComponent = () => {
        return (
            <View style={styles.footer}>
            
            <Divider />
            <OutlinedButton title={'New Note'} onPress={() => navigation.push('NewNote')}/>
            </View>
        );
      }

  return (
   <SafeAreaView style={styles.container}>
        <FlatList
          data={savedNotes}
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