import { Control, Controller } from 'react-hook-form';
import ReactSelect from 'react-select';

type OptionType = {
  value: string;
  label: string;
};

type SelectProps = {
  // components?: SelectComponentsConfig<OptionTypeBase, false, GroupTypeBase<OptionType>>;
  components?: any;
  options: OptionType[];
  disabled: boolean;
  control: Control<any>;
  instanceId: string;
  isMulti: boolean;
  name: string;
  onFocus: () => void;
};

const styles = {
  container: (provided: any) => ({
    ...provided,
    width: '100%',
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    height: 48,
    borderRadius: state.menuIsOpen ? '10px 10px 0 0' : '10px',
  }),
  menu: (provided: any) => ({
    ...provided,
    margin: 0,
    borderRadius: '0 0 10px 10px',
  }),
  menuList: (provided: any) => ({
    ...provided,
    padding: 0,
  }),
  indicatorSeparator: () => ({
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
  onFocus,
}: SelectProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: 'please fill' }}
      defaultValue=""
      as={(
        <ReactSelect
          styles={styles}
          options={options}
          components={components}
          isDisabled={disabled}
          instanceId={instanceId}
          isMulti={isMulti}
          onFocus={onFocus}
        />
      )}
    />
  );
};

export { SelectField };
