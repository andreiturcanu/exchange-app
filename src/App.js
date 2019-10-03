import React, { useEffect } from 'react'
import fetch from './fetch'

function App() {
  useEffect(() => {
    fetch('/posts').then(response => {
      if(response.status === 200) {
        return response.json()
      }

      return []
    })
    .then(data => {
      console.log({data})
    })
  }, [])

  return (
    <div className="App">
      app
    </div>
  );
}

export default App
