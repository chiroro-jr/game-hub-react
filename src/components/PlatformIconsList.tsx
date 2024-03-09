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
import { Platform } from '@/entities/Platform'

interface Props {
  platforms: { platform: Platform }[]
}

const getPlatformIcon = (slug: string) => {
  const platformIcons: { [key: string]: ReactElement } = {
    playstation: <BsPlaystation size="22px" />,
    xbox: <BsXbox size="22px" />,
    nintendo: <BsNintendoSwitch size="22px" />,
    pc: <BsWindows size="22px" />,
    ios: <MdPhoneIphone size="22px" />,
    android: <BsAndroid size="22px" />,
    linux: <FaLinux size="22px" />,
    mac: <BsApple size="22px" />,
    web: <BsGlobe size="22px" />,
  }

  return platformIcons[slug]
}

function PlatformIconsList({ platforms }: Props) {
  return (
    <ul className="flex gap-1.5">
      {platforms.map(({ platform }) => (
        <li key={platform.id}>{getPlatformIcon(platform.slug)}</li>
      ))}
    </ul>
  )
}

export default PlatformIconsList
