type selectOption<'a> = {label: string, value: 'a}

type classNamesConfig<'props> = {
  clearIndicator?: 'props => string,
  container?: 'props => string,
  control?: 'props => string,
  dropdownIndicator?: 'props => string,
  group?: 'props => string,
  groupHeading?: 'props => string,
  indicatorsContainer?: 'props => string,
  indicatorSeparator?: 'props => string,
  input?: 'props => string,
  loadingIndicator?: 'props => string,
  loadingMessage?: 'props => string,
  menu?: 'props => string,
  menuList?: 'props => string,
  menuPortal?: 'props => string,
  multiValue?: 'props => string,
  multiValueLabel?: 'props => string,
  multiValueRemove?: 'props => string,
  noOptionsMessage?: 'props => string,
  option?: 'props => string,
  placeholder?: 'props => string,
  singleValue?: 'props => string,
  valueContainer?: 'props => string,
}

type selectComponentsConfig<'props> = {
  @as("ClearIndicator") clearIndicator?: 'props => React.element,
  @as("Container") container?: 'props => React.element,
  @as("Control") control?: 'props => React.element,
  @as("DropdownIndicator") dropdownIndicator?: 'props => React.element,
  @as("Group") group?: 'props => React.element,
  @as("GroupHeading") groupHeading?: 'props => React.element,
  @as("IndicatorsContainer") indicatorsContainer?: 'props => React.element,
  @as("IndicatorSeparator") indicatorSeparator?: 'props => React.element,
  @as("Input") input?: 'props => React.element,
  @as("LoadingIndicator") loadingIndicator?: 'props => React.element,
  @as("LoadingMessage") loadingMessage?: 'props => React.element,
  @as("Menu") menu?: 'props => React.element,
  @as("MenuList") menuList?: 'props => React.element,
  @as("MenuPortal") menuPortal?: 'props => React.element,
  @as("MultiValue") multiValue?: 'props => React.element,
  @as("MultiValueLabel") multiValueLabel?: 'props => React.element,
  @as("MultiValueRemove") multiValueRemove?: 'props => React.element,
  @as("NoOptionsMessage") noOptionsMessage?: 'props => React.element,
  @as("Option") option?: 'props => React.element,
  @as("Placeholder") placeholder?: 'props => React.element,
  @as("SingleValue") singleValue?: 'props => React.element,
  @as("ValueContainer") valueContainer?: 'props => React.element,
}

@module("react-select") @react.component
external make: (
  ~className: string=?,
  ~classNames: classNamesConfig<_>=?,
  ~components: selectComponentsConfig<_>=?,
  ~defaultValue: _=?,
  ~value: _=?,
  ~onChange: array<selectOption<'a>> => unit,
  ~options: array<selectOption<'a>>,
  ~isSearchable: bool=?,
  ~isMulti: bool=?,
  ~unstyled: bool=?,
  ~placeholder: string=?,
  ~noOptionsMessage: _ => string=?,
) => React.element = "default"
