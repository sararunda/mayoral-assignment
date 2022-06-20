import { render, screen } from '@testing-library/react';
import TshirtItem from './TshirtItem';
const item = { price: 0, name: 'tshirt', photo: 'photo' };
test('renders image', () => {
  const component = render(<TshirtItem item={item} />);

  const img = component.container.querySelector('img');

  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute('src', item.photo);
});
test('renders name', () => {
  render(<TshirtItem item={item} />);

  const name = screen.getByText(item.name);

  expect(name).toBeInTheDocument();
});
test('renders price', () => {
  render(<TshirtItem item={item} />);

  const price = screen.getByText(`${item.price} €`);

  expect(price).toBeInTheDocument();
});
test('renders "Más colores', () => {
  render(<TshirtItem item={item} />);

  const textColours = screen.getByText('Más colores');

  expect(textColours).toBeInTheDocument();
});
test('renders button', () => {
  const component = render(<TshirtItem item={item} />);

  const button = component.container.querySelector('button');
  screen.getByText('Añadir');

  expect(button).toBeInTheDocument();
  expect(button).toHaveAttribute('type', 'button');
});
