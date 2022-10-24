import { React } from "react";
import Hello from "./Hello";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { InteraciveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { ToDoList } from "./ToDoList";
import { Container } from "./Container";
import { SelectLanguage } from "./SelectLanguage";
import { Sum } from "./Sum";
import { GitHubUser } from "./GitHubUser";
import { GitHubUserList } from "./GitHubUserList";
import { HookCounter } from "./HookCounter";
import { HookForm } from "./HookForm";
import { FilteredList } from "./FilteredList";
import { CarDetails } from "./CarDetails";
import { Routes, Route, Link } from 'react-router-dom'
import { ShowGitHubUser } from "./ShowGitHubUser";


export function App() {
    return(
        <Container title={'My awesome App!'}>   
                <Link to='/'>Navigate to Home</Link> <br />
                <Link to='/counter'>Navigate to Counter</Link> <br />   
                <Link to='/:username'>Navigate to ShowGithubUser</Link>   <br />

            <Routes>
                <Route path="/" element={<Welcome name="Michele"/>} />
                <Route path="counter" element={<Counter />} />
                <Route path="/user:username" element={<ShowGitHubUser />}/>  
                <Route 
                path='*' 
                element={ <div>
                        <p>URL doesn't match any path!</p>
                        <Link to='/'>Return to Homepage</Link>
                </div>
                }/>   

            </Routes>
        </Container>
    )
} 
// export function App() {


//     const [showCounter, setResetCounter] = useState(true)

//     function handleUnmount() {
//         setResetCounter(showCounter => !showCounter)
//     }

//     return <div>
//         <Container title='My React application' >

//             <Hello />
//             <Welcome name={<strong>Michele Garribba</strong>} age={27} />
//             <button onClick={handleUnmount}>Reset Counter</button>
//             {showCounter && <Counter />}
//             {/* <ClickCounter /> */}
//             <ClickTracker />
//             <InteraciveWelcome />
//             <Login />
//             <UncontrolledLogin />
//             <ToDoList
//                 render={(items, remove) => {


//                     const ListItems = items.map((todo, index) =>
//                         <li id={index}>
//                             {todo}
//                             <button onClick={() => { remove(index) }} name={'remove'} id={index}>Remove</button>
//                         </li>)
//                     return <ul>{ListItems}</ul>
//                 }} />

//             <SelectLanguage />
//             <Sum />
//             <GitHubUser username='gianmarcotoso'/>
//             <GitHubUserList />
//             <HookCounter />
//             <HookForm />
//             <CarDetails />
//             <FilteredList />
//         </Container>
//     </div>;
// } 
