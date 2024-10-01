export function validatePassword(password) {
  const criteria = [
    { regex: /.{8,}/, description: 'حداقل 8 کاراکتر' },
    { regex: /[A-Z]/, description: 'حروف بزرگ' },
    { regex: /[a-z]/, description: 'حروف کوچک' },
    { regex: /[0-9]/, description: 'اعداد' },
    { regex: /[^A-Za-z0-9]/, description: 'کاراکتر های خاص' }
  ];

  const validCriteria = criteria.filter(criterion => criterion.regex.test(password));
  const isValid = validCriteria.length === criteria.length;

  return {
    isValid,
    error: isValid ? '' : 'سطح امنیت گذرواژه منتخب کافی نمیباشد',
    strength: validCriteria.length,
    validCriteria: validCriteria.map(c => c.description),
    allCriteria: criteria.map(c => c.description)
  };
}

export function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\+?[1-9]\d{11}$/;
  return phoneRegex.test(phoneNumber);
}