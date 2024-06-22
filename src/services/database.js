import { v4 as uuidv4 } from 'uuid';
import { Subject } from "rxjs";

class Database {
  onDocumentInserted$ = new Subject();
  onDocumentUpdated$ = new Subject();
  onDocumentDeleted$ = new Subject();

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
    document.id = `${ table }_${ uuidv4() }`
    const tableIdsJson = localStorage.getItem(`${ table }_ids`) || '[]';
    const tableIds = JSON.parse(tableIdsJson);
    tableIds.push(document.id);
    localStorage.setItem(`${ table }_ids`, JSON.stringify(tableIds));
    localStorage.setItem(document.id, JSON.stringify(document));
    this.onDocumentInserted$.next({ table, document });
  }

  update(document) {
    localStorage.setItem(document.id, JSON.stringify(document));
    this.onDocumentUpdated$.next(document);
  }

  delete(table, id) {
    const tableIdsJson = localStorage.getItem(`${ table }_ids`) || '[]';
    const tableIds = JSON.parse(tableIdsJson);
    const index = tableIds.indexOf(id);
    tableIds.splice(index, 1);
    localStorage.setItem(`${ table }_ids`, JSON.stringify(tableIds));
    localStorage.removeItem(id);
    this.onDocumentDeleted$.next(id);
  }
}

export default new Database();
