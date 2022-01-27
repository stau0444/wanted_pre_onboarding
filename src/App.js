import './App.css';
import Toggle from './component/Toggle';
import styled from 'styled-components';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';
import AutoComplete from './component/AutoComplete';
import ClickToEdit from './component/ClickToEdit';

export const Section = styled("div")`
    width: 400px;
    border-radius: 40px;
    border:1px solid black;
    margin: 40px auto;
`
function App() {
  return (
    <div className="App">
      <Toggle/>
      <Modal/>
      <Tab/>
      <Tag/>
      <AutoComplete/>
      <ClickToEdit/>
    </div>
  );
}

export default App;
