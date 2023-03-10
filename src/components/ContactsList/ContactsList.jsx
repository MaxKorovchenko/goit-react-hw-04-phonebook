import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = ({ contactsList, onDelete }) => {
  return (
    <>
      <ul>
        {contactsList.map(({ id, name, number }) => (
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
  contactsList: [],
};

ContactsList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
