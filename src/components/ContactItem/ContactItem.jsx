import PropTypes from 'prop-types';

import { DeleteBtn, Info } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <>
      <Info>
        {name}: {number}
        <DeleteBtn type="button" onClick={() => onDelete(id)}>
          Delete
        </DeleteBtn>
      </Info>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
