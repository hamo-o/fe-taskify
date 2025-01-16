import { FAB } from "../components/FAB/index.js";
import { useState } from "../lib/HamReact/hooks/useState.js";
import { parser } from "../lib/jsx-runtime/parser.js";

import { Header } from "./Header/index.js";
import styles from "./page.module.js";
import { TodoColumn } from "./TodoColumn/index.js";
import { UserLogs } from "./UserLogs/index.js";

const MainPage = ({ columnStore, userLogStore }) => {
  const [columns, setColumns] = useState(columnStore.getColumns());
  const [openLogs, setOpenLogs] = useState(true);

  const handleClickAddColumn = () => {
    const newColumn = columnStore.addColumn();
    setColumns([...columns, newColumn]);
  };

  const handleClickDelColumn = (id) => {
    const deletedColumns = columnStore.removeColumn(id);
    setColumns(deletedColumns);
  };

  return parser`
    <div class=${styles.page}>
        ${Header({
    onOpenLogs() {
      setOpenLogs(true);
    },
  })}
  ${openLogs && UserLogs({ userLogs: userLogStore.getLogs() })}
        <main>
          <ul class="${styles.container}">
            ${columns.map(({ id, name }) => parser`<li class=${styles.list} key=${id}>
                ${id}
                ${TodoColumn({
    id,
    name,
    columnStore,
    onClickDel() {
      handleClickDelColumn(id);
    },
  })}
              </li>`)}
          </ul>
        </main>
        ${FAB({ onClick: handleClickAddColumn })}
    </div>
`;
};

export default MainPage;
