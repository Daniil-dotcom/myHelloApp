import React from 'react'
import UnicornEmoji from './components/UnicornEmoji'
import MyName from './components/MyName'
import JinguLogo from './components/JinguLogo'

function App() {
  return (
    <>
    <div className='mobile'>
      <div>
        <div className='iconAnimation'>
          <JinguLogo/>
        </div>
      <MyName/>
      <div className='iconAnimation'>
         <UnicornEmoji/>
      </div>
      </div>
    </div>
    <div className='desktop' style={{
      padding: 30,
      maxWidth: 1135,
      margin: '0 auto'
    }}>
      <div className='inline'>
        <div className='iconAnimation'>
          <JinguLogo/>  
        </div>
         <MyName/>
      </div>
      <div className='iconAnimation'>
        <UnicornEmoji/>
      </div>
        
    </div>
    </>
      
  );
}

export default App;
