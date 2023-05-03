import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import {useTheme} from "@react-navigation/native";
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";

import NavigationBar from "./NavigationBar";
import TitleComponent from "./TitleComponent";
import FontFamilyStyleSheet from "../../config/utils/stylesheet";

const NewNote = () => {
  const _editor = React.createRef();
  const {colors} = useTheme();

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <NavigationBar ref={_editor} />
      <TitleComponent />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={{marginHorizontal: 10}}>
          <RichEditor
            ref={_editor}
            placeholder="Your Note..."
            androidHardwareAccelerationDisabled={true}
            initialHeight={"85%"}
            editorStyle={{
              initialCSSText: `${FontFamilyStyleSheet}`,
              contentCSSText: `font-family: Zilla Slab`,
              backgroundColor: colors.background,
              color: colors.text,
            }}
            // onChange={(descriptionText) => {
            //   console.log("descriptionText:", descriptionText);
            // }}
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
          actions={[
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
            actions.insertVideo
          ]}
          onPressAddImage={(_) => console.log(_)}
          onInsertLink={(_) => console.log(_)}
         
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default NewNote;
