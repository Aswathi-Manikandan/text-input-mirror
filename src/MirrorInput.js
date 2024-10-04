import React, { useState } from 'react'

function MirrorInput() {
    const[text,setText] = useState('')
  return (
    <div>
      <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
      <p>Mirrored Text : {text}</p>
    </div>
  )
}

export default MirrorInput
