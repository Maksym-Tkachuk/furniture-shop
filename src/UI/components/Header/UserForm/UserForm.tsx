import { FC, useState } from "react";
import ModulWindow from "../../../Elements/ModalWindow/ModulWindow";
import "./UserForm.scss";
import Login from "./Login";
import Registration from "./Registration";

const UserForm: FC = (props) => {

  const [form, setForm] = useState<string>("");

  return (
    <ModulWindow>
      <div className="UserForm">
             { form == "login" ?<Login setForm={setForm} />:<Registration setForm={setForm}/>}
      </div>
    </ModulWindow>
  );
};

export default UserForm;
