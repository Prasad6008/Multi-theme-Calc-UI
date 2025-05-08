import React, { useSyncExternalStore } from 'react'
import { useState,useEffect } from 'react';

const App = () => {


  


  const [position, setPosition] = useState(0); // 0 = Theme 1, 1 = Theme 2, 2 = Theme 3


  const handleToggle = () => {
    const newPosition = (position + 1) % 3;
    setPosition(newPosition);
    console.log("Selected theme:", newPosition + 1);
  }




  //Input states 

  const [input,setInput] = useState('')

  const handleInputs = (n) => {
    let fullNum = prevInput => prevInput + String(n)
    setInput(fullNum); 
  };

  const del = () =>
  {
    setInput((prevInput) => prevInput.slice(0, -1));
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key >= '0' && e.key <= '9') {
        handleInputs(e.key); // Call handleInputs with the pressed key (as a string)
      } else if (e.key === 'Backspace') {
        del(); // Call del function on backspace
      }
    };

    // Attach the keypress event listener to the window
    window.addEventListener('keydown', handleKeyPress);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);





  useEffect(() => {


      //Elements 

  const title = document.querySelector('.title')
  const label = document.querySelector('.label')
  const toggle_track = document.querySelector('.toggle-track')
  const toggle_circle = document.querySelector('.toggle-circle')
  const numbers = document.querySelector('.numbers')
  const inputarea = document.querySelector('.input_div input')
  const buttons_div = document.querySelector('.buttons_div')
  const buttons_div_btn = document.querySelectorAll('.buttons_div div button');
  const delbtn = document.querySelector('.del')
  const resetbtn = document.querySelector('#reset')
  const equalbtn = document.querySelector('#equal')


    
    if (position === 1) {
      document.body.style.backgroundColor = 'hsl(0, 0%, 90%)';
      title.style.color = 'black'
      label.style.color = 'black'
      toggle_track.style.backgroundColor = 'hsl(0, 5%, 81%)'
      toggle_circle.style.backgroundColor = 'hsl(25, 98%, 40%)'
      numbers.style.color = 'black'
      inputarea.style.backgroundColor = 'white'
      inputarea.style.color = 'hsl(60, 10%, 19%)'
      buttons_div.style.backgroundColor = 'hsl(0, 5%, 81%)'

      buttons_div_btn.forEach(button => {
        button.style.backgroundColor = 'hsl(45, 7%, 89%)';
        button.style.color = 'hsl(60, 10%, 19%)';

        button.addEventListener('mouseover', () => {
          button.style.backgroundColor = 'white';
        });
        
        button.addEventListener('mouseout', () => {
          button.style.backgroundColor = 'hsl(45, 7%, 89%)'; // or set back to the original color
        });
      });

      delbtn.style.backgroundColor = 'hsl(185, 42%, 37%)'
      delbtn.style.color = 'white'
      
      delbtn.addEventListener('mouseover', () => {
        delbtn.style.backgroundColor = 'hsl(185, 37.50%, 56.10%)';
      });
      
      delbtn.addEventListener('mouseout', () => {
        delbtn.style.backgroundColor = 'hsl(185, 42%, 37%)'; // or set back to the original color
      });

      resetbtn.style.backgroundColor = 'hsl(185, 42%, 37%)'
      resetbtn.style.color = 'white'

      resetbtn.addEventListener('mouseover', () => {
        resetbtn.style.backgroundColor = 'hsl(185, 37.50%, 56.10%)';
      });
      
      resetbtn.addEventListener('mouseout', () => {
        resetbtn.style.backgroundColor = 'hsl(185, 42%, 37%)'; // or set back to the original color
      });

      equalbtn.style.backgroundColor = 'hsl(25, 98%, 40%)'
      equalbtn.style.color = 'white'

      equalbtn.addEventListener('mouseover', () => {
        equalbtn.style.backgroundColor = 'hsl(25, 72.70%, 56.90%)';
      });
      
      equalbtn.addEventListener('mouseout', () => {
        equalbtn.style.backgroundColor = 'hsl(25, 98%, 40%)'; // or set back to the original color
      });
    }else if(position === 2)
      {
        document.body.style.backgroundColor = 'hsl(268, 75%, 9%)';
        title.style.color = 'hsl(52, 100%, 62%)'
        label.style.color = 'hsl(52, 100%, 62%)'
        toggle_track.style.backgroundColor = 'hsl(268, 71%, 12%)'
        toggle_circle.style.backgroundColor = 'hsl(176, 100%, 44%)'
        numbers.style.color = 'hsl(52, 100%, 62%)'
        inputarea.style.backgroundColor = 'hsl(268, 71%, 12%)'
        inputarea.style.color = 'hsl(52, 100%, 62%)'
        buttons_div.style.backgroundColor = 'hsl(268, 71%, 12%)'
  
        buttons_div_btn.forEach(button => {
          button.style.backgroundColor = 'hsl(268, 47%, 21%)';
          button.style.color = 'hsl(52, 100%, 62%)';
          button.style.boxShadow = 'inset 0px -4px 1px hsl(290, 70%, 36%)';

          button.addEventListener('mouseover', () => {
            button.style.backgroundColor = 'hsl(290, 68.70%, 28.80%)';
          });
          
          button.addEventListener('mouseout', () => {
            button.style.backgroundColor = 'hsl(268, 47%, 21%)'; // or set back to the original color
          });
          
        });
        
  
        delbtn.style.backgroundColor = 'hsl(281, 89%, 26%)'
        delbtn.style.boxShadow = 'inset 0px -4px 1px  hsl(285, 91%, 52%)';

        resetbtn.style.backgroundColor = 'hsl(281, 89%, 26%)'
        resetbtn.style.boxShadow = 'inset 0px -4px 1px  hsl(285, 91%, 52%)';

        resetbtn.addEventListener('mouseover', () => {
          resetbtn.style.backgroundColor = 'hsl(285, 91%, 52%)';
        });
        
        resetbtn.addEventListener('mouseout', () => {
          resetbtn.style.backgroundColor = 'hsl(281, 89%, 26%)'; // or set back to the original color
        });

        equalbtn.style.backgroundColor = 'hsl(176, 100%, 44%)'
        equalbtn.style.boxShadow = 'inset 0px -4px 1px  hsl(177, 92%, 70%)';
        equalbtn.style.color = 'hsl(198, 20%, 13%)'

        equalbtn.addEventListener('mouseover', () => {
          equalbtn.style.backgroundColor = 'hsl(177, 92%, 70%)';
        });
        
        equalbtn.addEventListener('mouseout', () => {
          equalbtn.style.backgroundColor = 'hsl(176, 100%, 44%)'; // or set back to the original color
        });
      } 
      else if(position !== 1 && 2)
      {
        document.body.style.backgroundColor = '';

title.style.color = '';
label.style.color = '';
toggle_track.style.backgroundColor = '';
toggle_circle.style.backgroundColor = '';
numbers.style.color = '';
inputarea.style.backgroundColor = '';
inputarea.style.color = '';
buttons_div.style.backgroundColor = '';

buttons_div_btn.forEach(button => {
  button.style.backgroundColor = '';
  button.style.color = '';
  button.style.boxShadow = 'inset 0px -4px 1px hsl(28, 16%, 65%)';

  // Optionally remove existing event listeners (if previously added)
  // Or you can safely skip re-adding hover events
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '';
  });

  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '';
  });
});

delbtn.style.backgroundColor = '';
delbtn.style.color = '';
delbtn.style.boxShadow = 'inset 0px -4px 1px  hsl(224, 28%, 35%)';

delbtn.addEventListener('mouseover', () => {
  delbtn.style.backgroundColor = '';
});

delbtn.addEventListener('mouseout', () => {
  delbtn.style.backgroundColor = '';
});

resetbtn.style.backgroundColor = '';
resetbtn.style.color = '';
resetbtn.style.boxShadow = 'inset 0px -4px 1px  hsl(224, 28%, 35%)';

resetbtn.addEventListener('mouseover', () => {
  resetbtn.style.backgroundColor = '';
});

resetbtn.addEventListener('mouseout', () => {
  resetbtn.style.backgroundColor = '';
});

equalbtn.style.backgroundColor = '';
equalbtn.style.color = '';
equalbtn.style.boxShadow = 'inset 0px -4px 1px hsl(6, 63%, 50%)';

equalbtn.addEventListener('mouseover', () => {
  equalbtn.style.backgroundColor = '';
});

equalbtn.addEventListener('mouseout', () => {
  equalbtn.style.backgroundColor = '';
});

      }
  }, [position]);
  

  return (
    <>
      <div className="container">
        <div className="header">
          <div className='title'>
                calc
          </div>

<div class="theme-switch-container">

    <label class="label">Theme</label>
      <div class="switch">
       <span class="numbers">
          <span>1</span>
          <span>2</span>
          <span>3</span>
       </span>

            <div class="toggle-track" onClick={handleToggle}>
              <div style={{ left: `${2 + position * 25}px` }} class="toggle-circle"></div>
            </div>
      </div>
</div>

        </div>

        <div className="input_div">
          <input 
          type="tel" 
          maxLength={10}
          value={input}
          id='inputarea'
          />
        </div>

        <div className="buttons_div">

          <div><button onClick={()=> handleInputs(7)}>7</button></div>
          <div><button onClick={()=> handleInputs(8)}>8</button></div>
          <div><button onClick={()=> handleInputs(9)}>9</button></div>
          <div><button className='del' onClick={() => del()}>DEL</button></div>

          <div><button onClick={()=> handleInputs(4)}>4</button></div>
          <div><button onClick={()=> handleInputs(5)}>5</button></div>
          <div><button onClick={()=> handleInputs(6)}>6</button></div>
          <div><button>+</button></div>

          <div><button onClick={()=> handleInputs(1)}>1</button></div>
          <div><button onClick={()=> handleInputs(2)}>2</button></div>
          <div><button onClick={()=> handleInputs(3)}>3</button></div>
          <div><button>-</button></div>

          <div><button onClick={()=> handleInputs(".")}>.</button></div>
          <div><button onClick={()=> handleInputs(0)}>0</button></div>
          <div><button>/</button></div>
          <div><button>x</button></div>

          <div className='reset'><button id='reset'>RESET</button></div>
          <div className='equal'><button id='equal'>=</button></div>
          
        </div>
      </div>
    </>
  )
}

export default App