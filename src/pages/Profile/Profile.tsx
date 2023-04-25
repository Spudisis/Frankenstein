import { Bgc, DefaultWrapper } from "src/UI";
import { NamePage } from "src/components";
import { Header, ProjectsUser, Profile as ProfileModule } from "src/modules";

export const Profile = () => {
  return (
    <Bgc>
      <Header />
      <DefaultWrapper>
        <NamePage name={"Profile"} />
        <ProfileModule />

        <ProjectsUser />
      </DefaultWrapper>
    </Bgc>
  );
};
