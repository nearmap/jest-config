import config from '.';

test('jest-config regression', ()=> {
  expect(config).toMatchSnapshot();
});
