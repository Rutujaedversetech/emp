import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
    combineReducers,
  } from "redux";
  
  import {thunk} from 'redux-thunk';
  import authReducer from './auth/reducer';
  import assetReducer from './asset/reducer';
  import cabReducer from './cab/reducer';
  import  ticketreducer from './ticket/reducer'
  import  reimbursementreducer from './reimbursment/reducer'
  import  complaintsreducer from './complaints/reducer'
  import  referralsreducer from './referral/reducer'
  import  leavereducer from './leaves/reducer'
  import  calenderreducer from './calender/reducer'
  import  announcementreducer from './announcement/reducer'

  import  financereducer from './finanance/reducer'
  import   projectreducer from './projects/reducer'
  import   taskreducer from './task/reducer'
  import   jobreducer from './job/reducer'
  import   applicationreducer from './application/reducer'





  //import cartReducer from './cart/reducer';
  //import productsReducer from './products/reducer';
  
  const rootReducer = combineReducers({
      auth : authReducer,
      asset:assetReducer,
      cab:cabReducer,
      ticket:ticketreducer,
      complaints:complaintsreducer,
      reimbursement:reimbursementreducer,
      leave:leavereducer,
      calender:calenderreducer,
      referral:referralsreducer,
      announce:announcementreducer,
      finance:financereducer,
project:projectreducer,
task:taskreducer,
job:jobreducer,
application:applicationreducer







  });
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );