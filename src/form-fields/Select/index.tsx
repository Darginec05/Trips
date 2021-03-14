import { Control, Controller } from 'react-hook-form';
import ReactSelect, { OptionTypeBase, SelectComponentsConfig, StylesConfig } from 'react-select';

type OptionType = {
  value: string;
  label: string;
};

type SelectProps = {
  components: SelectComponentsConfig<OptionTypeBase, false>;
  options: OptionType[];
  disabled: boolean;
  name: string;
  control: Control<any>;
  instanceId: string;
  defaultValue: unknown;
  isMulti: boolean;
};

const styles: StylesConfig<OptionType, false> = {
  container: (provided: any) => ({
    ...provided,
    width: '100%',
  }),
  control: (provided: any, state) => ({
    ...provided,
    height: 48,
    borderRadius: state.menuIsOpen ? '10px 10px 0 0' : '10px',
  }),
  menu: (provided) => ({
    ...provided,
    margin: 0,
    borderRadius: '0 0 10px 10px',
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),
  indicatorSeparator: (provided) => ({
    display: 'none',
  }),
};

const SelectField = ({
  options,
  components,
  name,
  disabled,
  control,
  instanceId,
  isMulti,
  defaultValue,
}: SelectProps) => {
  return (
    <Controller
      name="country"
      control={control}
      rules={{ required: 'please fill' }}
      defaultValue={defaultValue || ''}
      as={(
        <ReactSelect
          styles={styles}
          options={options}
          components={components}
          name={name}
          isDisabled={disabled}
          instanceId={instanceId}
          isMulti={isMulti}
          indi
        />
      )}
    />
  );
};

export { SelectField };
