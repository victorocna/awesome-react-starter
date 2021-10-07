import { Button } from '../../components';
import { toaster } from '../../lib';

const SayGoodbye = () => {
  const handleClick = () => {
    const hello = [
      'Adiós',
      'Do zobaczenia',
      'Dos svidaniya',
      'Güle güle',
      'La reverdere',
      'Ma’assalama',
      'Sayonara',
      'Tschüss',
      'Zai jian',
    ];
    toaster.success(hello[Math.floor(Math.random() * hello.length)]);
  };

  return (
    <Button className="button full accent" onClick={handleClick}>
      Say Goodbye
    </Button>
  );
};

export default SayGoodbye;
