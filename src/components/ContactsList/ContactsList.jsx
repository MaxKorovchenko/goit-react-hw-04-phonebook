import PropTypes from 'prop-types';

import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = ({ items, onDelete }) => {
  return (
    <>
      <ul>
        {items.map(({ id, name, number }) => (
          <li key={id}>
            <ContactItem
              id={id}
              name={name}
              number={number}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

ContactsList.defaultProps = {
  items: [],
};

ContactsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
