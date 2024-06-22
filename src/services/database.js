import { v4 as uuidv4 } from 'uuid';

class Database {
  get(id) {
    return JSON.parse(localStorage.getItem(id));
  }

  getAll(table) {
    const tableIdsJson = localStorage.getItem(`${ table }_ids`) || '[]';
    const tableIds = JSON.parse(tableIdsJson);
    return tableIds.map(id => JSON.parse(localStorage.getItem(id)));
  }

  getByFilter(table, filter) {
    const tableIdsJson = localStorage.getItem(`${ table }_ids`) || '[]';
    const tableIds = JSON.parse(tableIdsJson);
    return tableIds
      .map(id => JSON.parse(localStorage.getItem(id)))
      .filter(filter);
  }

  insert(table, document) {
    document.id = uuidv4();
    const tableIdsJson = localStorage.getItem(`${ table }_ids`) || '[]';
    const tableIds = JSON.parse(tableIdsJson);
    tableIds.push(document.id);
    localStorage.setItem(`${ table }_ids`, JSON.stringify(tableIds));
    localStorage.setItem(document.id, JSON.stringify(document));
  }
}

export default new Database();
