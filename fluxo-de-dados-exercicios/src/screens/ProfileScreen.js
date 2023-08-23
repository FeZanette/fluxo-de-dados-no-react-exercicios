import ProfileForm from "../components/ProfileForm/ProfileForm";
import ProfileMenu from "../components/ProfileMenu/ProfileMenu";
import { ScreenContainer } from "./ProfileScreen.styled";
import { useState } from "react";

function ProfileScreen() {

  const [name, setName] = useState("")
  const [bio, setBio] = useState("")
  const [image, setImage] = useState("")

  return (
    <ScreenContainer>
      <ProfileMenu name={name} bio={bio} image={image} />

      <ProfileForm setName={setName} setBio={setBio} setImage={setImage} />
    </ScreenContainer>
  );
}

export default ProfileScreen;