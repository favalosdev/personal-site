import React from 'react'
import { ProfileComponent } from './Profile'
import { SocialMediaIcons } from './SocialMediaIcons'

export const Sidebar: React.FC = () => {
  return (
    <div className="h-[100%] w-[25%] flex flex-col items-center p-10">
      <ProfileComponent />
      <SocialMediaIcons />
    </div>
  )
}
