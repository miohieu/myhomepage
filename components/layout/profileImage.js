import Image from 'next/image'
import profile from "../../public/profile.JPG"

const imageStyle = {
  borderRadius: 'full',
  border: '2px solid #fff',
}

export default function ProfileImage() {
  return (
    <Image src={profile} width={150} height={150} style={imageStyle} alt="profile" />
  )
}
