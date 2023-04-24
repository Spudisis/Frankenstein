import { Bgc, DefaultWrapper } from "src/UI";
import { Header, ProjectsUser, Profile as ProfileModule } from "src/modules";

export const Profile = () => {
  return (
    <div>
      <Bgc>
        <Header />
        <DefaultWrapper>
          <ProfileModule />

          <ProjectsUser />
        </DefaultWrapper>
      </Bgc>
    </div>
  );
};
