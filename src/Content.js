import React from 'react'

export const Content = () => {
  function selectLang() {
    let langs = ['React', 'Angular', 'Vue'];
    let randint = Math.floor(Math.random() * 3);
    return langs[randint];
  }
  return (
    <div>
      <p>Learn {selectLang()}</p>
      
    </div>
  )
}
