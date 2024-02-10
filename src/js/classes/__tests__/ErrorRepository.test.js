import ErrorRepository from '../ErrorRepository';

test('Error code 01', () => {
  expect(ErrorRepository.translate('01')).toBe('Такой персонаж уже есть в команде');
});

test('Error unknown code', () => {
  expect(ErrorRepository.translate('03')).toBe('Unknown error');
});