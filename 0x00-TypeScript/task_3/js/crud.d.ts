import { RowID, RowElement } from "./interface.js";

declare function insertRow(row: RowElement): number;

declare function deleteRow(rowId: RowID): void;

declare function updateRow(rowId: RowID, row: RowElement): number;

// export {
//     insertRow,
//     deleteRow,
//     updateRow,
// }