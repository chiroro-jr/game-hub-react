import { Platform } from '@/hooks/useGames'
import {
  BsPlaystation,
  BsXbox,
  BsNintendoSwitch,
  BsWindows,
  BsAndroid,
  BsApple,
  BsGlobe,
} from 'react-icons/bs'
import { MdPhoneIphone } from 'react-icons/md'
import { FaLinux } from 'react-icons/fa'
import { ReactElement } from 'react'

interface Props {
  platforms: { platform: Platform }[]
}

const getPlatformIcon = (slug: string) => {
  const platformIcons: { [key: string]: ReactElement } = {
    playstation: <BsPlaystation size="24px" />,
    xbox: <BsXbox size="24px" />,
    nintendo: <BsNintendoSwitch size="24px" />,
    pc: <BsWindows size="24px" />,
    ios: <MdPhoneIphone size="24px" />,
    android: <BsAndroid size="24px" />,
    linux: <FaLinux size="24px" />,
    mac: <BsApple size="24px" />,
    web: <BsGlobe size="24px" />,
  }

  return platformIcons[slug]
}

function PlatformIconsList({ platforms }: Props) {
  return (
    <ul className="flex gap-2">
      {platforms.map(({ platform }) => (
        <li key={platform.id}>{getPlatformIcon(platform.slug)}</li>
      ))}
    </ul>
  )
}

export default PlatformIconsList
