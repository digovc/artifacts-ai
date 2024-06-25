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
    document.createdAt = new Date().toISOString();
    document.updatedAt = new Date().toISOString();

    const tableIdsJson = localStorage.getItem(`${ table }_ids`) || '[]';
    const tableIds = JSON.parse(tableIdsJson);
    tableIds.push(document.id);
    localStorage.setItem(`${ table }_ids`, JSON.stringify(tableIds));
    localStorage.setItem(document.id, JSON.stringify(document));
    this.onDocumentInserted$.next({ table, document });
  }

  update(document) {
    document.updatedAt = new Date().toISOString();
    localStorage.setItem(document.id, JSON.stringify(document));
    this.onDocumentUpdated$.next(document);
  }

  updateFields(id, update, emitOnUpdate = true) {
    console.log('updateFields', id, update);
    const document = JSON.parse(localStorage.getItem(id));
    Object.assign(document, update);
    document.updatedAt = new Date().toISOString();
    localStorage.setItem(id, JSON.stringify(document));

    if (emitOnUpdate) {
      this.onDocumentUpdated$.next(document);
    }
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

  deleteByFilter(table, filter) {
    const documents = this.getByFilter(table, filter);
    documents.forEach(document => this.delete(table, document.id));
  }
}

export default new Database();
