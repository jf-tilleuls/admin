import {Filter} from 'react-admin';
import React from 'react';

const resolveProps = props => {
  const {options} = props;
  const {parameterFactory, resource} = options;
  const {parameters} = resource;
  return {
    ...props,
    parameterFactory: parameterFactory,
    parameters: parameters,
  };
};

const ListFilter = props => {
  const {parameters, parameterFactory} = resolveProps(props);

  const parameterAlwaysOn = parameters.length < 8;

  return (
    <Filter {...props}>
      {parameters.length > 0 &&
        parameters.map(parameter =>
          parameterFactory(parameter, {
            alwaysOn: parameterAlwaysOn,
          }),
        )}
    </Filter>
  );
};

export default ListFilter;
