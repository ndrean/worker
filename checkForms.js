const checkInput = (form, span, input) => {
  document.querySelector(form).addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector(span).textContent = document.querySelector(
      input
    ).value;
  });
};

export { checkInput };
