import React, { useState } from "react";
import {StyleSheet,  Modal, Button, Text, View, useWindowDimensions} from "react-native";
import RenderHtml, {HTMLElementModel, useInternalRenderer } from 'react-native-render-html'

import {GlobalStyles} from "@styles";
import {NavigationButton} from "@components";
import back from "@images/back.png";import save from "@images/save.png";


const PreviewNotes = ({navigation, route}) => {
  const {width} = useWindowDimensions();
  const htmlContent = route.params?.body;

  const inputModel = new HTMLElementModel({
    tagName: 'input',
    contentModel: 'textual', 
    isVoid: true,
    isOpaque: true,
  });
  
  const customHTMLElementModels = {
    ...HTMLElementModel.defaultModels,
    input: inputModel,
  };

  const onSave = () => {};

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: "center",
      title: route.params?.title ? route.params.title : '',
      headerLeft: () => <NavigationButton image={back} onPress={() => navigation.goBack()} />,
      headerRight: () => <NavigationButton image={save} onPress={onSave} back={false} />,
      headerTitleStyle:{...GlobalStyles.buttonText},
      headerShadowVisible: false
    });
  }, [navigation, route]);

 
  const tagsStyles = {
    img: {
      height: '50%',
      width: '100%'
    }
  };

  const renderersProps = {
    img: {
      enableExperimentalPercentWidth: true
    }
  };

  return (
    <View style={{paddingHorizontal: 20, paddingVertical: 10}}>


      <RenderHtml 
      debug
        contentWidth={width} 
        source={{ html: htmlContent }} 
        tagsStyles={tagsStyles}
        renderersProps={renderersProps}

        />
    </View>
  )
};

export default PreviewNotes;

