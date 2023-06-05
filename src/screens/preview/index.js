import React, { useState } from "react";
import {StyleSheet,  Modal, Button, Text, View, useWindowDimensions} from "react-native";
import RenderHtml, {HTMLElementModel, useInternalRenderer } from 'react-native-render-html'

import {GlobalStyles} from "@styles";
import {NavigationButton} from "@components";
import back from "@images/back.png";
import save from "@images/save.png";

import {cutStringWithEllipsis} from "../../config/utils/helper";


const PreviewNotes = ({navigation, route}) => {
  const {width} = useWindowDimensions();
  const htmlContent = route.params?.body;
  const title = route.params?.title ?? '';

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
      title: cutStringWithEllipsis(title, 22),
      headerLeft: () => <NavigationButton image={back} onPress={() => navigation.goBack()} />,
      headerRight: () => <NavigationButton image={save} onPress={onSave} back={false} />,
      headerTitleStyle:{width: 10, overflow: "hidden", ...GlobalStyles.buttonText},
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
    <View style={{paddingHorizontal: 20, marginBottom: 10}}>
      <RenderHtml 
        contentWidth={width} 
        source={{ html: htmlContent }} 
        tagsStyles={tagsStyles}
        renderersProps={renderersProps}

        />
    </View>
  )
};

export default PreviewNotes;


