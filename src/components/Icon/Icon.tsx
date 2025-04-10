import React, {useMemo} from 'react';
import {Pressable} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

import {ArrowLeftIcon} from './ArrowLeftIcon';
import {ArrowRightIcon} from './ArrowRightIcon';
import {BellIcon} from './BellIcon';
import {BellOnIcon} from './BellOnIcon';
import {BookmarkFillIcon} from './BookmarkFillIcon';
import {BookmarkIcon} from './BookmarkIcon';
import {CameraClick} from './CameraClick';
import {CameraIcon} from './CameraIcon';
import {ChatIcon} from './ChatIcon';
import {ChatOnIcon} from './ChatOnIcon';
import {CheckIcon} from './CheckIcon';
import {CheckRoundIcon} from './CheckRoundIcon';
import {ChevronRightIcon} from './ChevronRightIcon';
import {CommentIcon} from './CommentIcon';
import {ErrorRoundIcon} from './ErrorRoundIcon';
import {EyeOffIcon} from './EyeOffIcon';
import {EyeOnIcon} from './EyeOnIcon';
import {FlashOffIcon} from './FlashOffIcon';
import {FlashOnIcon} from './FlashOnIcon';
import {HeartFillIcon} from './HeartFillIcon';
import {HeartIcon} from './HeartIcon';
import {HomeFillIcon} from './HomeFillIcon';
import {HomeIcon} from './HomeIcon';
import {MessageIcon} from './MessageIcon';
import {MessageRoundIcon} from './MessageRoundIcon';
import {NewPostIcon} from './NewPostIcon';
import {ProfileFillIcon} from './ProfileFillIcon';
import {ProfileIcon} from './ProfileIcon';
import {SearchIcon} from './SearchIcon';
import {SettingsIcon} from './SettingsIcon';
import {TrashIcon} from './TrashIcon';

export interface IconBase {
  size?: number;
  color?: string;
  fillColor?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  fillColor?: ThemeColors;
  onPress?: () => void;
}
export function Icon({
  name,
  color = 'backgroundContrast',
  fillColor = 'background',
  size,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  const iconProps: React.ComponentProps<typeof SVGIcon> = useMemo(
    () => ({
      size,
      color: colors[color],
      fillColor: colors[fillColor],
    }),
    [size, color, fillColor, colors],
  );

  if (onPress) {
    return (
      <Pressable testID={name} hitSlop={10} onPress={onPress}>
        <SVGIcon {...iconProps} />
      </Pressable>
    );
  }
  return <SVGIcon {...iconProps} />;
}

const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  bell: BellIcon,
  bellOn: BellOnIcon,
  bookmark: BookmarkIcon,
  bookmarkFill: BookmarkFillIcon,
  camera: CameraIcon,
  cameraClick: CameraClick,
  chat: ChatIcon,
  chatOn: ChatOnIcon,
  check: CheckIcon,
  checkRound: CheckRoundIcon,
  errorRound: ErrorRoundIcon,
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
  messageRound: MessageRoundIcon,
  newPost: NewPostIcon,
  profile: ProfileIcon,
  profileFill: ProfileFillIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  trash: TrashIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
