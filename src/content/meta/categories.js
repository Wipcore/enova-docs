import SettingsIcon from 'react-feather/dist/icons/settings';
import GitBranchIcon from 'react-feather/dist/icons/git-branch';
import ImageIcon from 'react-feather/dist/icons/image';
import FolderPlusIcon from 'react-feather/dist/icons/folder-plus';

export const categories = [
  { name: 'general', label: 'Produkter', icon: SettingsIcon },
  { name: 'first', label: 'Kunder', icon: GitBranchIcon },
  { name: 'second', label: 'Order', icon: ImageIcon },
  { name: 'last', label: 'Kampanjer', icon: FolderPlusIcon }
];

export default categories;
