import MainPage from "../page/index.js";
import ColumnStore from "../store/column/index.js";
import UserLogStore from "../store/logs/index.js";

const columnStore = new ColumnStore();
const userLogStore = new UserLogStore();
const App = () => MainPage({ columnStore, userLogStore });

export default App;
