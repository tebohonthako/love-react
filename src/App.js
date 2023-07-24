import logo from './logo.svg';
import './App.css';

// Components = resusable bits of code. 
//            = serves same purpose as js functions 
//            = COMPONENTS ARE FUNCTIONS THAT RETURN REACT ELEMENTS (UI)(JSX) --> OBJ 
function App() {
  return (
     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Reasons why I'm excited to learn React!</h1>
             <ol>
                 <li>Closer to my dream job as a React Developer 👨🏽‍💻</li>
                 <li>Financial freedom 💸</li>
                 <li>Passionate about Front-end development and curious to master it.</li>
                 <li>Makes my life so much easier.</li>
             </ol>
       </header>
     </div>
  );
 }


// ReactDOM.render(emoji, document.getElementById("root"))

 export default App;


// C H A L L E N G E    1 

// part 1: create page of your own using your own custom component . 
//        - should return an <ol> with the reasons why you excited to learn react. 
//        - render you list to the page 


// e x a m p l e    P a g e   c o m p o n e n t 
function Page() {
  return 
  <div>
    {/* h e a d e r  */}
    <header>
      <nav>
        <img src="./public/logo192.png" width="40px"/>
      </nav>
    </header>
    {/* e n d   o f   h e a d e r  */}
    <h1>Reasons I love React</h1>
    <ol>
      <li>My chances are greater of getting a job as a developer when i know React.</li>
      <li>It's a popular library</li>
    </ol>
    <footer>
      <small>© 2023 Teboo.dev Pty. All rights reserved.</small>
    </footer>
  </div>
}
// ReactDOM.render(<Page/>, document.getElementById("root"))


// C H A L L E N G E  2  
// Move header element from the Page component into a new component named header 
function Header() {
  return (
  <header>
    <nav>
    <img src="./public/logo192.png" width="40px"/>
    </nav>
  </header>
  )
}

// C H A L L E N G E  3 
function FooterComponent() {
  return (
    <footer>
       <small>© 2023 Teboo.dev Pty. All rights reserved.</small>
    </footer>
  )
}
///////////////////////////////
function BodyComponent() {
  return (
      <div>
        <h1>Reasons I love React</h1>
             <ol>
                <li>My chances are greater of getting a job as a developer when i know React.</li>
                <li>It's a popular library</li>
            </ol>
      </div>
  )
}
/////////////////////////////
// f i n a l   c o m p o n e n t  with other components inside it 

// function Page() {
//   return (
        <div>
            <Header/>
            <BodyComponent/>
            <FooterComponent/>
        </div>
//      
//   )
// }