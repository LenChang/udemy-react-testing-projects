import checkPropTypes from "check-prop-types";

export const findByTestAttr = (wrapper: any, val: any) =>
  wrapper.find(`[data-test="${val}"]`);

export const checkProps = (comp: any, conformingProps: any) => {
  const propError = checkPropTypes(
    comp.propTypes,
    conformingProps,
    "prop",
    comp.name
  );
  expect(propError).toBeUndefined();
};
