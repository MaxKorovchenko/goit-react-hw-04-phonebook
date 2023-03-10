import PropTypes from 'prop-types';

import { Input, Label } from './Filter.styled';

export const Filter = ({ onFilter, onChange }) => {
  return (
    <div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={onFilter}
          name="nameToFind"
          onChange={onChange}
          autoComplete="off"
        />
      </Label>
    </div>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
