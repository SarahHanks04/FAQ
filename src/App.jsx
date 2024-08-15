
import './App.css'
import CardContextProvider from './ATMCard/Context/CardContext';
import CardDetails from './ATMCard/CVCNumber/CardDetails';
import CardFormPage from './ATMCard/FormPage/CardFormPage';
import BackPageDIsplay from './ATMCard/BackPage/BackPageDIsplay';
import MainContainer from './Component/MainContainer/App';
import TodoParent from './Component/To-DoTestParent';


function App() {

  return (
    <>
      <div>
        {/* <TodoParent /> */}
        {/* UseContext */}
        {/* <MainContainer /> */}

        

        <CardContextProvider>
          <CardFormPage />
          <CardDetails />
          <BackPageDIsplay />
        </CardContextProvider>
      </div>
    </>
  )
}

export default App;
