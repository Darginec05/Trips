type TripAddress = {
  street: string;
  street_num: string;
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
};

export type TripDetailType = {
  tripId: string;
  isEditable: boolean;
};

export type TripFormValues = Omit<Trip, 'id' | 'address'> & TripAddress;
