import React from 'react'
import profileImage from '../assets/images/stick-man.png'

export const ProfileComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-10 pt-10">
      <img src={profileImage} alt="Fernando Avalos" className="profile-image" />
      <h1 className="profile-title">Fernando Avalos</h1>
      <p className="text-center text-lg mb-8">Aspiring Renaissance-man</p>
    </div>
  )
}
