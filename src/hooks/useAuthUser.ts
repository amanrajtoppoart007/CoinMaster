import {useSelector} from 'react-redux';
import {RootStateProps} from '@state/store';

export default function useAuthUser() {
  return useSelector((state: RootStateProps) => state.user);
}
