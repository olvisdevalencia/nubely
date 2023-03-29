import React from "react";
import { IconType } from "react-icons";
import { User } from "../types/User";

type UserCardProps = {
  user: User;
  icon?: IconType;
  onSelect?: () => void
};

const UserCard: React.FC<UserCardProps> = ({ user, icon }) => {
  return (
    <div>
      <div>
        <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} />
      </div>
      <div>
        <div>
          {icon && <IconComponent icon={icon} />}
          <span>{user.name.first} {user.name.last}</span>
        </div>
        <div>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
};

const IconComponent: React.FC<{ icon: IconType }> = ({ icon }) => {
  const Icon = icon;
  return <Icon />;
};

export default UserCard;