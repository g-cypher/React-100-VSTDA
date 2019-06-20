# React-100-VSTDA

Goal : Create a "to-do" app which allows a user to add items with a given priority of importance (low, medium, high) 
to a to-do list.  The user should also be able to delete the to-do item from the list, edit it, and mark it complete.

Languages, Frameworks, & Libraries : HTML, CSS, Javascript, JSX, React, Bootstrap

Approach: I created a series of React components utilizing prop-drilling in order to hold / pass state from one component
to another.  

Component 1 "AddToDo" : This component, using Twitter Bootstrap, presents the portion of the app where the user is able to add
a to-do item in a text-area and select a priority for that to-do item.  This class holds component state with the given 
information the user just input.  Once the user clicks the add-to-do button, the state of user input is passed as a prop to
my main App component and finally, the component state of AddToDo is reset back to default so that more to-do items can be 
added.

Component 2 "ViewToDo" : This component, using Twitter Bootstrap, presents the container for where the to-do items will 
populate.  But more importantly, this component maps through the to-do-items array (created in my App component), and passes
the props of one individual to-do item to a new component called ToDoItem.

Component 3 "ToDoItem" : This component, using Twitter Bootstrap, presents individual to-do items and also the formatting for 
editing a to-do item using a toggle method.  

