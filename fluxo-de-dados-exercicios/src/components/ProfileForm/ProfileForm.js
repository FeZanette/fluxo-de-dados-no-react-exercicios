import { useState } from "react";
import { Button, Form, FormWrapper, Input, InputWrapper, Label } from "./ProfileForm.styled";


const ProfileForm = ({name, bio, image, setName, setBio, setImage}) => {

  const [formName, setFormName] = useState("")
  const [formBio, setFormBio] = useState("")
  const [formImage, setFormImage] = useState("")

  function atualizarMenu () {
    setName(formName);
    setBio(formBio);
    setImage(formImage);
    alert("Seus dados foram enviados com sucesso!")
    setFormName("")
    setFormBio("")
    setFormImage("")
  }

  return (
    <FormWrapper>
      <h1>Edit your profile</h1>

      <Form>
        <InputWrapper>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="bio">Bio</Label>
          <Input
            type="text"
            name="bio"
            id="bio"
            autoComplete="off"
            value={formBio}
            onChange={(e) => setFormBio(e.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            type="text"
            name="imageUrl"
            id="imageUrl"
            autoComplete="off"
            value={formImage}
            onChange={(e) => setFormImage(e.target.value)}
          />
        </InputWrapper>

        <Button type="submit" onClick={atualizarMenu} >Save Changes</Button>
      </Form>
    </FormWrapper>
  );
};

export default ProfileForm;
