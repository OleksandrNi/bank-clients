import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchCusomers } from './asyncAction/customers';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const addCash = (cash) => {
    dispatch({type:'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type:'GET_CASH', payload: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div style={{display:"flex"}}>
        <div style={{fontSize:"2rem", marginTop:"20px"}}>{cash}</div>
        <button onClick={() => addCash(Number(prompt()))}>ADD money</button>
        <button onClick={() => getCash(Number(prompt()))}>GET money</button>
        <button onClick={() => addCustomer(prompt())}>Add customer</button>
        <button onClick={() => dispatch(fetchCusomers())}>Add customer from base</button>
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer =>
            <div onClick={() => removeCustomer(customer)} style={{fontSize:"2rem", marginTop:"20px"}}>{customer.name}</div>
          )}
        </div>
        : 
        <div style={{fontSize:"2rem", marginTop:"20px"}}>
          No clients
        </div>
      }
    </div>
  );
}

export default App;
