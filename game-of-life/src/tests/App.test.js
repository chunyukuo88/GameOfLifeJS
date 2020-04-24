import { total } from '../App';
import { add } from '../add';

jest.mock('../add', () => ({
  add: jest.fn(() => 25)
}));

test('total', () => {
  expect(total(5, 20)).toBe('$25');
  expect(add(1,2)).toBe(25);

  add.mockImplementation(() => 30);
  expect(add(1,2)).toBe(30);
  expect(add).toHaveBeenCalledTimes(3);
});