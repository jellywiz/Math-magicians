/* eslint-disable comma-dangle */
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../../pages/Navbar';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
