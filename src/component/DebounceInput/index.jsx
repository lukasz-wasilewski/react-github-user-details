import React from 'react';
import _ from 'lodash';
import { FormControl } from 'react-bootstrap';
import './styles.css';

function DebounceInput({ onChange, debounceTime }) {
  const onChangeDebounce = _.debounce((e) => {
    const val = e.target.value;
    onChange(val);
  }, debounceTime);

  return (
    <div className="debounce-input">
      <FormControl
        onChange={(e) => {
          e.persist();
          onChangeDebounce(e);
        }}
      />
    </div>
  );
}

DebounceInput.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  debounceTime: React.PropTypes.number.isRequired,
};

export default DebounceInput;
