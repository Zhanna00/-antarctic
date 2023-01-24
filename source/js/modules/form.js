export default (formElement, id = 0) => {
  const groupElements = formElement.querySelectorAll('[data-group]');

  groupElements.forEach((groupElement) => {
    const fieldElement = groupElement.querySelector('[name]');
    const {name, type} = fieldElement;

    if (type === 'password') {
      return;
    }

    const fieldId = `form-${id}-${name}`;
    const value = localStorage.getItem(fieldId);
    if (value !== null) {
      fieldElement.value = value;
    }

    fieldElement.addEventListener('change', () => {
      if (fieldElement.checkValidity()) {
        localStorage.setItem(fieldId, fieldElement.value);
      }
    });
  });
};
