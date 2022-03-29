import { FC } from "react";
import Button from "../../../Elements/Button/Button";
import ModulWindow from "../../../Elements/ModalWindow/ModulWindow";
import "./Search.scss"

const Search: FC = (props) => {
  return (
    <ModulWindow>
      <div className="serach">
          <div className="search__input">
              <input type="text" />
              <Button text="">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M18.3333 31.6667C25.6971 31.6667 31.6667 25.6971 31.6667 18.3333C31.6667 10.9695 25.6971 5 18.3333 5C10.9695 5 5 10.9695 5 18.3333C5 25.6971 10.9695 31.6667 18.3333 31.6667Z" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                     <path d="M34.9999 35L27.7499 27.75" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
              </Button>
          </div>
      </div>
    </ModulWindow>
  );
};

export default Search;
