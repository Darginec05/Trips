import { Fields } from '../../../components/InputField';
import { MainContent } from '../../../components/MainContent';

const TripCreatePage = () => {
  return (
    <MainContent title="New trip">
      <Fields isEditable buttonText="Save" />
    </MainContent>
  );
};

export default TripCreatePage;
