import {useSelector} from 'react-redux';
import {RootStateProps} from '@state/store';

export default function useAuth() {
  return useSelector((state: RootStateProps) => state.auth);
}
