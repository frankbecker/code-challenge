import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../../store/todos-actions";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

const TodoFormComp = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "title") {
      setTitle(event.target.value);
    }
  };
  const createTodo = () => {
    if (!title) return;
    dispatch(addNewTodo(title));
    setTitle("");
  };
  const submitHandler = () => {
    createTodo();
  };
  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createTodo();
  };

  return (
    <form action="" className="" onSubmit={formSubmitHandler}>
      <Paper style={{ marginTop: 16, marginBottom: 16, padding: 16 }}>
        <Grid container>
          <Grid md={10} item style={{ paddingRight: 16 }}>
            <TextField id="standard-basic"
              type="text"
              name="title"
              placeholder="Add Todo here"
              value={title}
              onChange={handleChange}
              fullWidth />
          </Grid>
          <Grid md={1} item>
            <Button
              fullWidth
              color="secondary"
              variant="outlined"
              onClick={submitHandler}
            >
              Add
          </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

export default TodoFormComp;
