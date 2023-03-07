import { useState } from "react";
import MainLayout from "../../components/layouts/main-layout";
import Modal from "../../components/ui/modal";
import Select from "../../components/ui/select";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { dashboardSlice, selectCount } from "./redux/slice";
import { theme, toggleTheme } from "../../store/common/themeSlice";
import Switch from "@/components/ui/switch";
import IconLightDark from "@/components/ui/icons/IconLightDark";
import Dropdown from "@/components/ui/drop-down";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState<0 | 1>(0);
  const value = useAppSelector(theme);

  const dispatch = useAppDispatch();

  const onChangeSwitch = () => {
    dispatch(toggleTheme());
  };

  const items = [
    { id: 1, label: " Label 1" },
    { id: 2, label: " Label 2" },
    { id: 3, label: " Label 3" }
  ];

  return (
    <MainLayout>
      <p>This is select component</p>
      <Select items={items} onChange={(e) => console.log(e)} />
      <Modal
        title="This is title"
        onCancel={() => setShowModal(false)}
        onOK={() => setShowModal(false)}
        visible={showModal}
      >
        <p>This is content modal</p>
      </Modal>

      {/* <Dropdown items={items} /> */}
      <div>
        <div>sdfsdfsd</div>
      </div>

      <button onClick={() => setShowModal(!showModal)}>showModal</button>

      <Switch
        status={status}
        onChange={onChangeSwitch}
        icon={<IconLightDark />}
      />
    </MainLayout>
  );
}

export default Home;
