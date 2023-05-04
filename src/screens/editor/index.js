import React, { useCallback } from "react";
import {SafeAreaView, View, KeyboardAvoidingView, Platform} from "react-native";
import {useTheme} from "@react-navigation/native";
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";

import {GlobalStyles} from "@styles";
import {NavigationButton} from "@components";
import dark_back from "@images/dark_back.png";
import Preview from "@images/file_preview.png";

import TitleComponent from "./TitleComponent";
import FontFamilyStyleSheet from "../../config/utils/stylesheet";
import NavigationBar from "./NavigationBar";

const ToolbarTools = [
  actions.redo,
  actions.undo,
  actions.checkboxList,
  actions.insertOrderedList,
  actions.insertBulletsList,
  actions.setBold,
  actions.setItalic,
  actions.setUnderline,
  actions.setStrikethrough,
  actions.blockquote,
  actions.insertLink,
  actions.insertImage,
  actions.insertVideo,
  actions.setSubscript,
  actions.setSuperscript,
  actions.alignLeft,
  actions.alignCenter,
  actions.alignRight,
  actions.alignFull,
  actions.indent,
  actions.outdent,
  actions.code,
  // actions.heading1,
  // actions.heading2,
  // actions.heading3,
  // actions.heading4,
  // actions.heading5,
  // actions.heading6,
  actions.line,
  actions.setParagraph,
  actions.removeFormat,
];

const NewNote = React.memo(({navigation, route}) => {
  const _editor = React.createRef();
  const {colors} = useTheme();

  const [descHTML, setDescHTML] = React.useState("");
  const [showDescError, setShowDescError] = React.useState(false);

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: true,
  //     headerTitleAlign: "center",
  //     title: "",
  //     headerLeft: () => (
  //       <NavigationButton
  //         image={dark_back}
  //         onPress={() => navigation.goBack()}
  //       />
  //     ),
  //     headerRight: () => (
  //       <NavigationButton
  //            image={Preview}
  //            back={false}
  //            onPress={submitContentHandle}
  //          />
  //     ),
  //     headerTitleStyle: {...GlobalStyles.buttonText},
  //     headerShadowVisible: false,
  //   });
  // }, [navigation, route]);



  const richTextHandle = useCallback((descriptionText) => {
    setDescHTML(descriptionText);
    setShowDescError(!descriptionText);
  }, []);

  const submitContentHandle = () => {
    setShowDescError(!descHTML);
    if (descHTML) {
      // send data to your server!
      navigation.navigate('PreviewNote', { body: descHTML})
    } else {
      console.log("Error", descHTML);
      console.info(descHTML)
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <NavigationBar onPreviewPress={submitContentHandle} />
      <TitleComponent />
      <KeyboardAvoidingView
        behavior={"height"}
      >
        <View style={{marginHorizontal: 10}}>
          <RichEditor
            ref={_editor}
            placeholder="Your Note..."
            androidHardwareAccelerationDisabled={true}
            initialHeight={"84%"}
            editorStyle={{
              initialCSSText: `${FontFamilyStyleSheet}`,
              contentCSSText: `font-family: Zilla Slab`,
              backgroundColor: colors.background,
              color: colors.text,
            }}
            onChange={richTextHandle}
          />
        </View>
        <RichToolbar
          editor={_editor}
          style={{
            borderTopWidth: 1,
            borderTopColor: colors.text,
            backgroundColor: colors.background,
            color: colors.text,
          }}
          selectedIconTint={colors.text}
          actions={ToolbarTools}
          onPressAddImage={(_) => console.log(_)}
          onInsertLink={(_) => console.log(_)}
          insertVideo={(_) => console.log(_)}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
});

export default NewNote;
