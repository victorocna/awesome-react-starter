import toaster from 'toasted-notes';

toaster.success = (message, options) => {
  if (/<\/?[a-z][\s\S]*>/i.test(message)) {
    return false;
  }

  return toaster.notify(
    <div className="Toaster__success Toaster__alert_text">{message}</div>,
    options
  );
};
toaster.error = (message, options) => {
  if (/<\/?[a-z][\s\S]*>/i.test(message)) {
    message = 'Ups! A apărut o eroare necunoscută';
  }

  return toaster.notify(
    <div className="Toaster__error Toaster__alert_text">{message}</div>,
    options
  );
};

export default toaster;
