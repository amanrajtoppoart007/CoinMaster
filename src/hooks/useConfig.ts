import {useSelector} from 'react-redux';
import {RootStateProps} from '@state/store';

export default function useConfig() {
  return useSelector((state: RootStateProps) => state.config);
}
