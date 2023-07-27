import Image from 'next/image'
import profile from '../public/profile.jpg'

const imageStyle = {
  borderRadius: '100%',
  width: '150px',
  height: '150px',
  border: '2px solid #fff',
  marginTop: '1rem',
  objectFit: 'cover'
}

export default function ProfileImage() {
  return <Image src={profile} style={imageStyle} alt="profile" />
}
