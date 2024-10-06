import {
  Avatar,
  AvatarImage,
  Button,
  Dropdown,
  DropdownAction,
  DropdownContent,
} from "keep-react";

const Profile = () => {
  return (
    <Dropdown>
      <DropdownAction className="!bg-transparent px-0">
        <Avatar className="dark:border-white">
          <AvatarImage src={""} />
        </Avatar>
      </DropdownAction>
      <DropdownContent>
        <div>
          <Avatar>
            <AvatarImage src={""} />
          </Avatar>
        </div>
        <div>
          <h1>Keep Designer</h1>
          <p>keepdesign@email.com</p>
        </div>
        <Button variant="outline">Follow</Button>
      </DropdownContent>
    </Dropdown>
  );
};

export default Profile;
