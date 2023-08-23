import { ProfileBio, ProfileImage, ProfileName, ProfileWrapper } from "./ProfileMenu.styled";

const ProfileMenu = (props) => {
  return (
    <ProfileWrapper>
      <ProfileImage src={props.image} alt="Profile Image" />
      <ProfileName>{props.name}</ProfileName>
      <ProfileBio>{props.bio}</ProfileBio>
    </ProfileWrapper>
  );
};

export default ProfileMenu;

// https://picsum.photos/200
