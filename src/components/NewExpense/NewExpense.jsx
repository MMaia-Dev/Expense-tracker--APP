import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [clickedButton, setClickedButton] = useState(false);

  const clickedButtonHandler = () => {
    setClickedButton(true);
  };

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setClickedButton(false);
  };

  const cancelButtonHandler = () => {
    setClickedButton(false);
  };

  return (
    <div className="new-expense">
      {!clickedButton && (
        <button onClick={clickedButtonHandler}>Add New Expense</button>
      )}
      {clickedButton && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancel={cancelButtonHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
