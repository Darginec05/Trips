import { TripFormFields } from '../../../components/TripFormFields';
import { MainContent } from '../../../components/MainContent';

const TripCreatePage = () => {
  return (
    <MainContent title="New trip">
      <TripFormFields isEditable buttonText="Save" />
    </MainContent>
  );
};

export default TripCreatePage;
