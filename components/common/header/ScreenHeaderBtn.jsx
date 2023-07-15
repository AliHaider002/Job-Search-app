import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './screenheader.style'
import { icons } from '../../../constants'
import { Image } from 'react-native'
import { useRouter } from 'expo-router'

const ScreenHeaderBtn = ({handlePress, iconsUrl, dimenstions}) => {
  const router = useRouter();
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image source={iconsUrl} alt='menu' resizeMode='cover' style={styles.btnImg(dimenstions)} />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn