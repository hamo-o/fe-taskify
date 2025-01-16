import { ActionHistoryItem } from "../../components/ActionHistoryItem/index.js";
import { typos } from "../../constants/tokens/typos.js";
import { parser } from "../../lib/jsx-runtime/parser.js";

import styles from "./userLog.module.js";

export const UserLogs = ({ userLogs }) => {
  console.log(userLogs);
  return parser`
  <div class=${styles.container}>
    <div class=${styles.header}>
        <span class=${typos.display.bold[16]}>사용자 활동 기록</span>
    </div>
    ${userLogs.map((log) => ActionHistoryItem(log))}
  </div>
  `;
};
