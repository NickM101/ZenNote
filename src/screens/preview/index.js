import React, { useState } from "react";
import {StyleSheet,  Modal, Button, Text, View, useWindowDimensions} from "react-native";
import RenderHtml, {HTMLElementModel, useInternalRenderer } from 'react-native-render-html'

import {GlobalStyles} from "@styles";
import {NavigationButton} from "@components";
import back from "@images/back.png";import save from "@images/save.png";


const PreviewNotes = ({navigation, route}) => {
  const {width} = useWindowDimensions();
  const htmlContent = route.params?.body;

  console.log("react-native-render-html",htmlContent);

  const inputModel = new HTMLElementModel({
    tagName: 'input',
    contentModel: 'textual', // or 'mixed' if you want to allow nested content
    isVoid: true, // set to true for self-closing tags like input
    isOpaque: true, // set to true if the content of the tag should not be rendered
  });
  
  // Extend the default HTMLElementModels with the custom input model
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
        <RenderHtml 
        debug
          contentWidth={width} 
          source={{ html: htmlContent }} 
          tagsStyles={tagsStyles}
          renderersProps={renderersProps}

          />
  )
};

export default PreviewNotes;

