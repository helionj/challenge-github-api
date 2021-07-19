import ContentLoader from 'react-content-loader';

const ProfileLoader = () => (
    <ContentLoader
    viewBox="0 0 400 160"
    height={300}
    width={300}
    backgroundColor="transparent"
   
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>
)

ProfileLoader.metadata = {
  name: 'RioF',
  github: 'clariokids',
  description: 'Three Dots',
  filename: 'ThreeDots',
}


export default ProfileLoader;
