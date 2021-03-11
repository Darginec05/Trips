type TripAddress = {
  street: string;
  street_num?: string;
  city: string;
  country: string;
  zip: string;
};

export type Trip = {
  id: string;
  start_date: Date;
  end_date: Date;
  company_name: string;
  address: TripAddress;
  covid: boolean,
  covid_test_date: Date;
};

export type TripFormData = Omit<Trip, 'id'>

export type TripDetailType = {
  tripId: string;
  isEditable: boolean;
};

export type TripFormValues = Omit<Trip, 'id' | 'address'> & TripAddress;

export type AddTripResponse = Pick<Trip, 'id'>;
