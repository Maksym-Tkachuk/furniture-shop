import "./App.scss";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { ProductSlice } from "./store/reducers/ProductSlice";
import { ContentProvider } from "./UI/components/ContentProvider/ContentProvider";
import Footer from "./UI/components/Footer/Footer";
import Header from "./UI/components/Header/Header";
import MainContent from "./UI/components/MainContent/MainContent";
import ModulWindow from "./UI/Elements/ModalWindow/ModulWindow";

function App() {





  return (
    <ContentProvider>
      <div className="wrapper">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </ContentProvider>
  );
}

export default App;
