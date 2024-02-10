export default class ErrorRepository {

  static errorList = new Map([
    ['01', 'Такой персонаж уже есть в команде'],
    ['02', 'Указан неверный тип персонажа']
  ]);

  static translate(code) {
    return this.errorList.has(code) ? this.errorList.get(code) : 'Unknown error';
  }
}