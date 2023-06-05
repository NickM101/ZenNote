import React, { useCallback } from 'react'
import { useTheme } from '@react-navigation/native'
import { SafeAreaView, KeyboardAvoidingView } from 'react-native'
import { actions, RichEditor, RichToolbar } from 'react-native-pell-rich-editor'
import PromptAndroid from 'react-native-prompt-android'

import FontFamilyStyleSheet from '../../config/utils/stylesheet'
import NavigationBar from './NavigationBar'
import CustomTextInput from './CustomTextInput'

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
  actions.removeFormat
]

const NewNote = React.memo(({ navigation }) => {
  const _editorRef = React.createRef()
  const { colors } = useTheme()

    const onCursorPosition = (event) => {
      console.log('event', event)
      const scrollY = event
      _editorRef.current?.scrollTo({ y: scrollY - 30, animated: true })
    }

  const [descHTML, setDescHTML] = React.useState('')
  const [showDescError, setShowDescError] = React.useState(false)

  const richTextHandle = useCallback((descriptionText) => {
    setDescHTML(descriptionText)
    setShowDescError(!descriptionText)
  }, [])

  const submitContentHandle = () => {
    setShowDescError(!descHTML)
    if (descHTML) {
      // send data to your server!
      navigation.navigate('PreviewNote', { body: descHTML })
    } else {
      console.log('Error', descHTML)
      console.info(descHTML)
    }
  }

  const handleInsertImage = () => {
    PromptAndroid(
      'Insert Image',
      'Enter the image URL:',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: (url) => {
            const imageTag = `<img src="${url}" alt="Image" height="200" style="max-width:100%; max-height: 30%" />`
            _editorRef.current?.insertHTML(imageTag)
          }
        }
      ],
      {
        type: 'plain-text',
        cancelable: false
      }
    )
  }

  const handleInsertVideo = () => {
    PromptAndroid(
      'Insert Video',
      'Enter the video URL:',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: (url) => {
            const videoTag = `<iframe src="${url}" frameborder="0" allowfullscreen></iframe>`
            _editorRef.current?.insertHTML(videoTag)
          }
        }
      ],
      {
        type: 'plain-text',
        cancelable: false
      }
    )
  }

  const handleInsertLink = () => {
    PromptAndroid(
      'Insert Link',
      'Enter the URL:',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: (url) => {
            const linkTag = `<a href="${url}">${url}</a>`
            _editorRef.current?.insertHTML(linkTag)
          }
        }
      ],
      {
        type: 'plain-text',
        cancelable: false
      }
    )
  }

  const editorStyle = {
    initialCSSText: `${FontFamilyStyleSheet}`,
    contentCSSText: 'font-family: Zilla Slab',
    backgroundColor: colors.background,
    color: colors.text
  }

  const toolbarStyle = {
    borderTopWidth: 1,
    borderTopColor: colors.text,
    backgroundColor: colors.background,
    color: colors.text
  }

  return (
    <SafeAreaView
      style={{
        flex: 1
      }}
    >
      <NavigationBar onPreviewPress={submitContentHandle} />
      <CustomTextInput />
      <KeyboardAvoidingView behavior={'height'}>
        
          <RichEditor
            ref={_editorRef}
            androidLayerType="software"
            showsVerticalScrollIndicator={false}
            useContainer={true}
            placeholder="Your Note..."
            androidHardwareAccelerationDisabled
            initialHeight={'84%'}
            editorStyle={editorStyle}
            onChange={richTextHandle}
            onCursorPosition={onCursorPosition}
            pasteAsPlainText={true}
            containerStyle={{ flex: 1, paddingHorizontal: 10 }}
          />
        <RichToolbar
          editor={_editorRef}
          style={toolbarStyle}
          selectedIconTint={colors.text}
          actions={ToolbarTools}
          onPressAddImage={() => handleInsertImage()}
          onInsertLink={() => handleInsertLink()}
          insertVideo={() => handleInsertVideo()}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
})

export default NewNote





// Iron Man
// Tony Stark - Stark Industries
// Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. The character made his first appearance in Tales of Suspense #39 (cover dated March 1963), and received his own title in Iron Man #1 (May 1968).


// Brave 
// Courage
// Rude
// Do you like Iron Man?
