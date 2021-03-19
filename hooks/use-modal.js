import { useState } from 'react';

export default function useModal() {
  const [show, setModal] = useState(false);
  const modal = {};
  modal.hide = () => setModal(false);
  modal.show = () => setModal(true);

  return [show, modal];
}
