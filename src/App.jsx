
import './App.css'
import CardContextProvider from './ATMCard/Context/CardContext';
import CardDetails from './ATMCard/CardDetails/CardDetails';
import CardFormPage from './ATMCard/FormPage/CardFormPage';
import BackPageDIsplay from './ATMCard/CVCNumber/BackPageDIsplay';
import MainContainer from './Component/MainContainer/App';
import TodoParent from './Component/To-DoTestParent';
import ProductProvider from './API-ProductPreview(Test 3)/Context/ProductProvider';
import ProductData from './API-ProductPreview(Test 3)/Product/ProductData';


function App() {

  return (
    <>
      <div>

            {/* TEST 1 */}
        {/* <TodoParent /> */}


        {/* UseContext */}
        {/* <MainContainer /> */}

        
            {/* TEST 2 */}
        {/* <CardContextProvider>
          <CardFormPage />
          <CardDetails />
          <BackPageDIsplay />
        </CardContextProvider> */}

            {/* {TEXT 3} */}
            <ProductProvider>
              <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
                <ProductData />
              </main>
            </ProductProvider>
      </div>
    </>
  )
}

export default App;
