import MainPage from "../page/index.js";
import ColumnStore from "../store/column/index.js";

const columnStore = new ColumnStore();
const App = () => MainPage({ columnStore });

export default App;
