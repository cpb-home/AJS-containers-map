import ErrorRepository from './ErrorRepository';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    if (this.members.has(char.type)) {
      throw new Error(ErrorRepository.translate('01'));
    } else {
      this.members.add(char.type);
    }
  }

  addAll(chars) {
    chars.forEach(char => this.members.add(char.type));
  }

  toArray() {
    return [...this.members];
  }
}