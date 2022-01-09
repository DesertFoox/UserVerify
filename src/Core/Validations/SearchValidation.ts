import * as Yup from "yup";

const SubscribeValidation = Yup.object().shape({
  search: Yup.string(),
});

export { SubscribeValidation };
