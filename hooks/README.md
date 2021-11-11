# React Hooks

## useArray

Array state helpers.

Useful for scenarios like pushing a new item in an array, removing an item from an array and others.

## useCollapsible

Determines from local storage if a collapsible section is opened or closed.

Useful for scenarios like persisting the collapsed or expanded state of a multi level menu.

```jsx
const MenuGroup = () => {
  const { isOpen, toggle } = useCollapsible(`menu.${name}`);

  return (
    <div className={classnames(!isOpen && 'hidden')}>
      <MenuItem href="/about-us">About us</MenuItem>
      <MenuItem href="/contact">Contact</MenuItem>
    </div>
  );
};
```

## useDebounce

Updates a value with delay.

Useful for scenarios like waiting the user to stop typing.

```jsx
const Search = () => {
  const [value, setValue] = useState('');
  const search = useDebounce(value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      <h3>Search value: {search}</h3>
    </>
  );
};
```

## useDisclosure

Handles open/close/toggle scenarios.

Useful for scenarios like opening a confirmation modal after pressing the delete button.

```jsx
const RemoveTodo = () => {
  const { isOpen, show, hide } = useDisclosure();

  return (
    <>
      <Button onClick={show}>Delete Todo</Button>
      <Modal isOpen={isOpen} hide={hide}>
        Confirm operation
      </Modal>
    </>
  );
};
```

## useInfiniteQuery

Fetches (infinite) pages of data from an API.

Similar to the useQuery hook, but returns pages of data instead of the data of a single element.

Options like filters and search can be passed to this hook.

These options must be set in a parent component and passed as props to this component.

```jsx
const TodoList = ({ options }) => {
  const { data, status } = useInfiniteQuery(`todos`, options);

  return (
    <article>
      {status === 'loading' && <TodoListLoading />}
      {status === 'error' && <TodoListError />}
      {status === 'success' && <TodoListSuccess {...data} />}
    </article>
  );
};
```

## useMutation

Performs server-side effects in the context of React Query.

## useOnClickOutside

Detects clicks outside of a specified element.

## useQuery

Fetches data from an API.

```jsx
const TodoCard = ({ uuid }) => {
  const { data, status } = useQuery(`/todo/${uuid}`);

  return (
    <article>
      {status === 'loading' && <TodoCardLoading />}
      {status === 'error' && <TodoCardError />}
      {status === 'success' && <TodoCardSuccess {...data} />}
    </article>
  );
};
```

## useRerender

Forces a React component to rerender.

Useful when components depend on some other application logic.

Think of an invoice due date that should be reset when the invoice date changes.

```jsx
const DueDate = () => {
  const [key, rerender] = useRerender('due_date');
  const { values } = useContext(); // values from some app context

  useEffect(() => {
    if (values.date > values.dueDate) {
      rerender();
    }
  }, [values.date]);

  return <Datepicker key={key} name="dueDate" format="yyyy-MM-dd" />;
};
```
