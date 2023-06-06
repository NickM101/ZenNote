import React, { useState } from "react";
import {StyleSheet,  Modal, Button, Text, View, useWindowDimensions} from "react-native";
import RenderHtml, {HTMLElementModel, useInternalRenderer } from 'react-native-render-html'
import dayjs from 'dayjs';


import {GlobalStyles} from "@styles";
import {NavigationButton} from "@components";
import back from "@images/back.png";
import save from "@images/save.png";

import {cutStringWithEllipsis, uid} from "../../config/utils/helper";
import useNotesStore from "../../config/store";


const PreviewNotes = ({navigation, route}) => {
  const htmlContent = route.params?.body;
  const title = route.params?.title ?? '';
  const status = route.params?.read_only ?? false;
  
  const {width} = useWindowDimensions();
  const addNote = useNotesStore((state) => state.addNote);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: "center",
      title: cutStringWithEllipsis(title, 22),
      headerLeft: () => <NavigationButton image={back} onPress={() => navigation.goBack()} />,
      headerRight: () => status ? <View/> : <NavigationButton image={save} onPress={onNotesSave} back={false} />,
      headerTitleStyle:{width: 10, overflow: "hidden", ...GlobalStyles.buttonText},
      headerShadowVisible: false
    });
  }, [navigation, route]);


  const onNotesSave = () => {
    const currentDate = dayjs().format('YYYY-MM-DD');
      const newNote = { id: uid() ,title, note: htmlContent, createdOn: currentDate};
      addNote(newNote);
      navigation.navigate('BrowseNotes')
  }


 
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


