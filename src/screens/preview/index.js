import React from "react";
import {View, useWindowDimensions, Alert} from "react-native";
import RenderHtml, {HTMLElementModel, useInternalRenderer } from 'react-native-render-html'
import dayjs from 'dayjs';


import {GlobalStyles} from "@styles";
import {NavigationButton} from "@components";
import back from "@images/back.png";


import {cutStringWithEllipsis} from "../../config/utils/helper";
import useNotesStore from "../../config/store";
import RightBarMenu from "./RightBarMenu";


const PreviewNotes = ({navigation, route}) => {
  const body = route.params?.body;
  const title = route.params?.title ?? '';
  const status = route.params?.read_only ?? false;
  const id = route.params?.id;

  
  const {width} = useWindowDimensions();
  const addNote = useNotesStore((state) => state.addNote);
  const deleteNote = useNotesStore((state) => state.deleteNote);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: "center",
      title: cutStringWithEllipsis(title, 22),
      headerLeft: () => <NavigationButton image={back} onPress={() => navigation.goBack()} />,
      headerRight: () => <RightBarMenu read_only={status} onNotesSave={onNotesSave} onMenuTap={onMenuTap}/>,
      headerTitleStyle:{width: 10, overflow: "hidden", ...GlobalStyles.buttonText},
      headerShadowVisible: false
    });
  }, [navigation, route]);


  const onNotesSave = () => {
    const currentDate = dayjs().format('YYYY-MM-DD');
      const newNote = { id,title, body, createdOn: currentDate};
      addNote(newNote);
     return navigation.navigate('BrowseNotes');
  }

  const onMenuTap = () =>
  Alert.alert("Confirm Deletion", "Are you sure you want to delete this note? This action cannot be undone.", [
    {
      text: 'Cancel',
      onPress: () => {},
      style: 'cancel',
    },
    {text: 'OK', onPress: () => {deleteNote(id), navigation.goBack()}},
  ]);


 
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
        source={{ html: body }} 
        tagsStyles={tagsStyles}
        renderersProps={renderersProps}

        />
    </View>
  )
};

export default PreviewNotes;


