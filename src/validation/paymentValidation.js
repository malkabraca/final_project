import Joi from "joi";

import validation from "./validation";

const paymentSchema = Joi.object({
  name: Joi.string().min(2).max(255).required(),
  // idCardHolder: Joi.number().min(9).max(9).required(),
  //   const identityCardSchema = Joi.string()
  //   .pattern(/^[A-Z]{2}\d{6}$/) // Replace the pattern with the specific format of your identity card number
  //   .required();
  //   cardNumber: Joi.number().min(14).max(14).required(),
  // number: Joi.string().creditCard().required(),
  number: Joi.number().min(14).max(16).required(),
  expiry: Joi.string()
    .pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
    .required(),
    cvc: Joi.number().min(3).max(3).required(),
    focus: Joi.string()
});

const validatePaymentSchema = (userInput) =>
  validation(paymentSchema, userInput);

export default validatePaymentSchema;
