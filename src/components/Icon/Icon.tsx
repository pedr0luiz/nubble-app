import React from 'react';
import {ArrowLeftIcon} from './ArrowLeftIcon';
import {ArrowRightIcon} from './ArrowRightIcon';
import {BellIcon} from './BellIcon';
import {BellOnIcon} from './BellOnIcon';
import {BookmarkFillIcon} from './BookmarkFillIcon';
import {BookmarkIcon} from './BookmarkIcon';
import {CameraIcon} from './CameraIcon';
import {ChatIcon} from './ChatIcon';
import {ChatOnIcon} from './ChatOnIcon';
import {CheckIcon} from './CheckIcon';
import {ChevronRightIcon} from './ChevronRightIcon';
import {CommentIcon} from './CommentIcon';
import {EyeOffIcon} from './EyeOffIcon';
import {EyeOnIcon} from './EyeOnIcon';
import {FlashOffIcon} from './FlashOffIcon';
import {FlashOnIcon} from './FlashOnIcon';
import {HeartFillIcon} from './HeartFillIcon';
import {HeartIcon} from './HeartIcon';
import {HomeFillIcon} from './HomeFillIcon';
import {HomeIcon} from './HomeIcon';
import {MessageIcon} from './MessageIcon';
import {NewPostIcon} from './NewPostIcon';
import {ProfileFillIcon} from './ProfileFillIcon';
import {ProfileIcon} from './ProfileIcon';
import {SearchIcon} from './SearchIcon';
import {SettingsIcon} from './SettingsIcon';
import {TrashIcon} from './TrashIcon';
import {ThemeColors} from '../../theme/theme';
import {useAppTheme} from '../../hooks/useAppTheme';

export interface IconBase {
  size?: number;
  color?: string;
}

interface Props {
  name: IconName;
  color?: ThemeColors;
  size?: number;
}
export function Icon({name, color = 'backgroundContrast', size}: Props) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  bell: BellIcon,
  bellOn: BellOnIcon,
  bookmark: BookmarkIcon,
  bookmarkFill: BookmarkFillIcon,
  camera: CameraIcon,
  chat: ChatIcon,
  chatOn: ChatOnIcon,
  check: CheckIcon,
  comment: CommentIcon,
  chevronRight: ChevronRightIcon,
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  flashOn: FlashOnIcon,
  flashOff: FlashOffIcon,
  heart: HeartIcon,
  heartFill: HeartFillIcon,
  home: HomeIcon,
  homeFill: HomeFillIcon,
  message: MessageIcon,
  newPost: NewPostIcon,
  profile: ProfileIcon,
  profileFill: ProfileFillIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  trash: TrashIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
