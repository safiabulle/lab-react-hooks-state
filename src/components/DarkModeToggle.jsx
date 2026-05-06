import React from 'react'

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={toggleDarkMode}>
      Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  )
}

export default DarkModeToggle
