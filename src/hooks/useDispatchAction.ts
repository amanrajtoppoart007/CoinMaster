import {useDispatch} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';

export default function useDispatchAction() {
  return useDispatch<ThunkDispatch<any, any, AnyAction>>();
}
