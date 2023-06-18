import React, { useCallback, useState, ChangeEvent } from 'react';
import classes from './styles.module.scss';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import { PROJECT_COLORS } from '../../constants/theme';
import CodeBlock from '../UI/CodeBlock';
import { sampleTodoItem } from './codeBlocks';
import Input from '../UI/Input';
import { ButtonBlue } from '../UI/Button';
import IconButton from '../UI/IconButton';
import Trash from '../Icons/Trash';
import { isEmptyString } from '../../utils';

// TODO - on clicking a todo item, user can strike it off and it moves below the non striked out items
// TODO - animate TODOs in the view

interface Todo {
  text: string;
  isSelected: boolean;
}

interface TodoItemProps extends Todo {
  onClick: () => void;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { text, isSelected, onClick, onDelete } = props;

  const handleDeleteClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onDelete();
  }, [onDelete]);

  return (
    <div className={classes.todoItem} onClick={onClick}>
      <p className={`${classes.todoItemText} ${isSelected ? classes.todoItemSelected : ''}`}>{text}</p>
      <IconButton onClick={handleDeleteClick} className={classes.deleteButton}>
        <Trash />
      </IconButton>
    </div>
  );
};

const TodoList: React.FC<Props> = () => {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const handleTextChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    setTodoText(text);
  }, []);

  const handleTodoItemClick = useCallback((index: number) => {
    setTodos((prevTodos) => {
      const prevTodosClone = [...prevTodos];
      const selectedTodo = { ...prevTodosClone[index] };
      selectedTodo.isSelected = !selectedTodo.isSelected;
      prevTodosClone[index] = selectedTodo;
      return prevTodosClone;
    });
  }, []);

  const handleTodoItemDelete = useCallback((index: number) => {
    setTodos((prevTodos) => {
      const prevTodosClone = [...prevTodos];
      prevTodosClone.splice(index, 1);
      return prevTodosClone;
    });
  }, []);

  const handleAddTodo = useCallback((text: string) => {
    if (isEmptyString(text)) {
      return;
    }
    setTodos((prevTodos) => ([
      {
        text,
        isSelected: false,
      },
      ...prevTodos,
    ]));
    setTodoText('');
  }, []);

  const handlePressEnter = useCallback((
    e: React.KeyboardEvent<HTMLInputElement>, text: string,
  ) => {
    if (e?.key === 'Enter') {
      handleAddTodo(text);
    }
  }, [handleAddTodo]);

  return (
    <ProjectPage background={PROJECT_COLORS.PROJECT32.background} containerClassName={classes.pageContainer}>
      <QuestionDetails
        title='Todo List'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}>
        <p>
          You're given HTML and CSS files for a simple todo list, and you need to make the todo list functional using
          JavaScript.
        </p>
        <p>
          The todo list has an input field and an add button, which are meant to be used to create named todo items. It
          also has an empty <span className={classes.questionDescriptionHighlight}>#todo-list</span>{' '}
          <span className={classes.questionDescriptionHighlight}>ul</span>, to which todo items will be appended.
        </p>
        <p>The todo list should have the following functionality:</p>
        <ul>
          <li>
            When nothing is typed into the input, the add button should be disabled. Otherwise, it should be enabled.
          </li>
          <li>
            When the add button is enabled and clicked on, a new todo item should be created and appended to the{' '}
            <span className={classes.questionDescriptionHighlight}>#todo-list</span>, and the input should be cleared.
          </li>
          <li>
            Each todo item should be an HTML list item with two children: a level-two heading and a button element. The
            heading should have the text content of whatever was typed into the input at the time of creation, and the
            button should have <span className={classes.questionDescriptionHighlight}>X</span> as its text content and{' '}
            <span className={classes.questionDescriptionHighlight}>delete-button</span> as its class (this class is
            defined in the provided CSS file).
          </li>
          <li>
            When the <span className={classes.questionDescriptionHighlight}>X</span> button of a todo item is clicked
            on, the todo item should be removed from the list. Below is an example of a todo item in HTML:
          </li>
        </ul>
        <div className={classes.codeWrapper}>
          <CodeBlock codeString={sampleTodoItem} language='xml' />
        </div>
      </QuestionDetails>
      <section className={classes.solutionContainer}>
        <div className={classes.todoListWrapper}>
          <h1 className={classes.todoListHeader}>Todo List</h1>
          <div className={classes.todoListInputWrapper}>
            <Input
              autoFocus
              id='todo'
              type='text'
              placeholder='Add a todo...'
              value={todoText}
              onChange={handleTextChange}
              onKeyDown={(e) => handlePressEnter(e, todoText)}
            />
            <ButtonBlue onClick={() => handleAddTodo(todoText)} className={classes.addButton}>Add</ButtonBlue>
          </div>
          <div className={classes.todosWrapper}>
            {todos.map((todo, index) => (
              <TodoItem
                key={`todo-${index}`}
                text={todo.text}
                isSelected={todo.isSelected}
                onClick={() => handleTodoItemClick(index)}
                onDelete={() => handleTodoItemDelete(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </ProjectPage>
  );
};

export default TodoList;
