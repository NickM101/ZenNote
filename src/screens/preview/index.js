import React from "react";
import {StyleSheet, Text, View} from "react-native";
import RenderHtml from "react-native-render-html";
import {useWindowDimensions} from "react-native";
import HTMLView from 'react-native-htmlview';
import { WebView } from 'react-native-webview';


import {GlobalStyles} from "@styles";
import {NavigationButton} from "@components";
import dark_back from "@images/dark_back.png";
import save from "@images/save.png";


const PreviewNotes = ({navigation, route}) => {
  const {width} = useWindowDimensions();

  const htmlBody = route.params?.body;

  const onSave = () => {};

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: "center",
      title: route.params?.title ? route.params.title : '',
      headerLeft: () => <NavigationButton image={dark_back} onPress={() => navigation.goBack()} />,
      headerRight: () => <NavigationButton image={save} onPress={onSave} back={false} />,
      headerTitleStyle:{...GlobalStyles.buttonText},
      headerShadowVisible: false
    });
  }, [navigation, route]);

  return (
    <View>
        {
            htmlBody ?  <RenderHtml
            contentWidth={width}
            source={{
              html: htmlBody,
            }}
          /> : <Text style={{textAlign: 'center'}}>Nothing to show</Text>
        }
    </View>
   
  );
};

export default PreviewNotes;

const styles = StyleSheet.create({});
