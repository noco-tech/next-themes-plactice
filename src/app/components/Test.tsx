'use client'
import React from 'react'
import { useThemeStore } from './ThemeStore'


export const Test = () => {

  let { themeState } = useThemeStore();
  return (
    <div>aaa{themeState}
      <div>test</div>
    </div>
  )
}
