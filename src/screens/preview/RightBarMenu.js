import React from 'react'
import { StyleSheet } from 'react-native'

import {NavigationButton} from "@components";
import save from "@images/save.png";
import bin from "@images/delete.png"

const RightBarMenu = ({read_only, onNotesSave, onMenuTap }) => {
  return read_only ? <NavigationButton image={bin} onPress={onMenuTap} back={false} /> : <NavigationButton image={save} onPress={onNotesSave} back={false} />;
}

export default RightBarMenu

const styles = StyleSheet.create({})